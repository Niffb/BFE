import React from 'react';
import { Mountain } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-neutral-800 pb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-5 h-5 text-white">
                                <Mountain strokeWidth={2.5} />
                            </div>
                            <span className="font-serif font-bold text-xl tracking-wide">
                                BIGFOOT & THE EAGLE
                            </span>
                        </div>
                        <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
                            A specialized research firm dedicated to uncovering high-value market anomalies and providing high-altitude strategic oversight.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-sans font-bold mb-6 text-xs tracking-widest text-neutral-500 uppercase">Outposts</h4>
                        <ul className="space-y-3 text-sm text-neutral-300">
                            <li>Pacific Northwest HQ</li>
                            <li>London</li>
                            <li>Singapore</li>
                            <li>Zurich</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sans font-bold mb-6 text-xs tracking-widest text-neutral-500 uppercase">Firm</h4>
                        <ul className="space-y-3 text-sm text-neutral-300">
                            <li className="hover:text-brand-red cursor-pointer transition-colors">Methodology</li>
                            <li className="hover:text-brand-red cursor-pointer transition-colors">Case Studies</li>
                            <li className="hover:text-brand-red cursor-pointer transition-colors">Intelligence Reports</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-neutral-500">© 2026 Bigfoot & The Eagle Research Institute. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {['LinkedIn', 'Twitter', 'Insights'].map(social => (
                            <a key={social} href="#" className="text-xs font-medium text-neutral-400 hover:text-white transition-colors">{social}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;