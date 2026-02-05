import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, MessageSquare, X, Loader2, Mountain } from 'lucide-react';
import { Chat } from "@google/genai";
import { ChatMessage } from '../types';
import { createChatSession, sendMessageStream } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Secure uplink established. This is Lead Investigator. What anomalies are you tracking today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatSessionRef.current) {
        chatSessionRef.current = createChatSession();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const modelMessageId = (Date.now() + 1).toString();
    
    setMessages(prev => [...prev, {
      id: modelMessageId,
      role: 'model',
      text: '',
      isStreaming: true
    }]);

    try {
        const stream = sendMessageStream(chatSessionRef.current, userMessage.text);
        let fullText = '';
        
        for await (const chunk of stream) {
            fullText += chunk;
            setMessages(prev => prev.map(msg => 
                msg.id === modelMessageId 
                    ? { ...msg, text: fullText }
                    : msg
            ));
        }
    } catch (error) {
        console.error("Stream error", error);
    } finally {
        setIsTyping(false);
        setMessages(prev => prev.map(msg => 
            msg.id === modelMessageId 
                ? { ...msg, isStreaming: false }
                : msg
        ));
    }
  }, [input]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[100] bg-black text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-brand-red transition-all duration-300 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:justify-end sm:px-10 pointer-events-none">
          <div 
            className="pointer-events-auto bg-white w-full sm:w-[400px] h-[80vh] sm:h-[550px] shadow-2xl flex flex-col rounded-t-lg sm:rounded-lg overflow-hidden border border-neutral-200"
          >
            {/* Header */}
            <div className="bg-brand-black border-b border-neutral-800 p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-white">
                        <Mountain size={14} />
                    </div>
                    <div>
                        <h3 className="font-sans font-bold text-white text-sm tracking-wide">Bigfoot & Eagle</h3>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Uplink Active</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[85%] rounded px-4 py-3 text-sm leading-relaxed ${
                            msg.role === 'user' 
                                ? 'bg-black text-white' 
                                : 'bg-white text-neutral-800 border border-neutral-200 shadow-sm'
                        }`}>
                            {msg.text}
                            {msg.isStreaming && <span className="inline-block w-1 h-3 bg-brand-red ml-1 animate-pulse"/>}
                        </div>
                    </div>
                ))}
                {isTyping && messages[messages.length-1].role === 'user' && (
                     <div className="flex justify-start">
                        <div className="bg-white border border-neutral-200 text-neutral-500 rounded px-4 py-3 flex items-center gap-2 shadow-sm">
                             <Loader2 className="w-3 h-3 animate-spin" />
                             <span className="text-xs">Analyzing terrain...</span>
                        </div>
                     </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-neutral-100">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Enter command..."
                        className="w-full bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 rounded py-3 pl-4 pr-12 focus:outline-none focus:border-brand-red focus:ring-0 transition-all text-sm"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 p-2 text-black hover:text-brand-red disabled:opacity-30 transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;