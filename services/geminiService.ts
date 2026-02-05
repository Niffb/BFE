import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Creates a chat session and returns a generator for the stream.
 */
export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the Lead Investigator at "Bigfoot and the Eagle Research". 
      Your firm specializes in finding "the unfindable" (Bigfoot metaphor) and providing "high-altitude oversight" (Eagle metaphor).
      
      Your tone is:
      - Highly professional and academic.
      - Slightly mysterious but grounded in data.
      - You use metaphors related to tracking, hunting, aerial views, and territory mapping.
      - You are an expert in forensics, market intelligence, and anomaly detection.
      
      When asked about the name, explain that "Bigfoot" represents the elusive data on the ground, and "The Eagle" represents the strategic vision from above.`,
      temperature: 0.6,
    },
  });
};

/**
 * Sends a message to the chat session and yields chunks of text.
 */
export async function* sendMessageStream(chat: Chat, message: string) {
  try {
    const responseStream = await chat.sendMessageStream({ message });
    
    for await (const chunk of responseStream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "Signal lost in the field. Re-establishing secure uplink...";
  }
}