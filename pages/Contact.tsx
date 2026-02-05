import React from 'react';
import { Mountain, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import heroImage from '../assets/hero_background_v2.png';

const Contact: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-brand-black text-white animate-fade-in relative flex items-center justify-center">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src={heroImage}
                    alt="Background Texture"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-neutral-900 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full py-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Left Column: Info */}
                    <div className="space-y-12">

                        {/* Brand Section */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 border border-brand-red rounded-full flex items-center justify-center text-brand-red shrink-0">
                                    <Mountain size={20} strokeWidth={1.5} />
                                </div>
                                <h1 className="text-xl md:text-2xl font-serif tracking-widest uppercase">
                                    Bigfoot & The Eagle
                                </h1>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                                Start the <br /> <span className="text-brand-red italic">Conversation.</span>
                            </h2>
                            <p className="text-neutral-400 text-lg font-light max-w-md leading-relaxed">
                                Whether for governance, management, or advisory, we are ready to listen and lead.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8 border-l border-neutral-800 pl-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-neutral-600 mt-1 shrink-0" size={18} />
                                    <div className="text-neutral-300 font-light">
                                        <p>101-1065 Portage Avenue</p>
                                        <p>Winnipeg, Manitoba R3G 0R8</p>
                                        <p className="article text-xs text-neutral-500 uppercase mt-1 tracking-widest">Peguis First Nation</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-neutral-600 shrink-0" size={18} />
                                    <p className="text-neutral-300 font-light">204.471.4635</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-neutral-600 shrink-0" size={18} />
                                    <a href="mailto:info@bigfooteagle.ca" className="text-white underline decoration-brand-red decoration-1 underline-offset-4 hover:text-brand-red transition-colors">info@bigfooteagle.ca</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-neutral-900/80 backdrop-blur-sm p-8 md:p-12 border border-neutral-800 relative group transition-all hover:border-neutral-700">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <MessageSquare className="text-neutral-700" size={40} strokeWidth={1} />
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border-b border-neutral-700 p-3 text-white focus:outline-none focus:border-brand-red transition-all placeholder-neutral-700"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/50 border-b border-neutral-700 p-3 text-white focus:outline-none focus:border-brand-red transition-all placeholder-neutral-700"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border-b border-neutral-700 p-3 text-white focus:outline-none focus:border-brand-red transition-all placeholder-neutral-700"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/50 border-b border-neutral-700 p-3 text-white focus:outline-none focus:border-brand-red transition-all resize-none placeholder-neutral-700"
                                    placeholder="Tell us more about your needs..."
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button type="button" className="w-full bg-white hover:bg-brand-red hover:text-white text-black font-bold py-4 px-8 uppercase text-xs tracking-[0.2em] transition-all duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Contact;