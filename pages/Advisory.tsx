import React from 'react';
import { CheckCircle2 } from 'lucide-react';

import eagleImage from '../assets/advisory_eagle.png';

const Advisory: React.FC = () => {
    return (
        <div className="pt-20 animate-fade-in">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-white text-black border-b border-neutral-200">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src={eagleImage}
                        alt="Eagle Vision"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="text-5xl md:text-7xl font-serif mb-2 uppercase tracking-widest">Advisory</h1>
                    <h2 className="text-3xl md:text-5xl font-serif tracking-widest text-neutral-500">Services</h2>
                </div>
            </section>

            <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="space-y-12">
                    <div className="prose prose-lg max-w-none text-neutral-600 font-light leading-relaxed">
                        <p className="text-xl md:text-2xl text-black font-serif mb-8 leading-snug">
                            Indigenous communities deserve support grounded in listening, respect, and genuine understanding of the pressures facing First Nation governments and Indigenous organizations.
                        </p>
                        <p>
                            Our advisory approach focuses on walking alongside leadership and administration – offering practical guidance, professional insight, and steady partnership as you move toward your community defined goals.
                        </p>
                    </div>

                    <div className="bg-neutral-900 text-white p-10 md:p-14 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-brand-red rounded-full blur-3xl opacity-10 -mr-16 -mt-16 pointer-events-none"></div>

                        <h3 className="font-serif text-3xl mb-10 relative z-10">Our advisory services include:</h3>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                            {[
                                "Developing and supporting the implementation of Management Action Plans (MAPs)",
                                "Developing and supporting the implementation of Capacity Development Plans",
                                "Fractional CFO Services",
                                "Developing and executing debt servicing plans",
                                "General Assessment Report analysis and developing risk management strategies",
                                "Budget development, monitoring and variance analysis",
                                "Audit preparation process design, including readiness assessments",
                                "Strategic Planning facilitation services and implementation services"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <span className="text-brand-red mt-1.5 text-xs font-bold">0{i + 1}</span>
                                    <span className="text-neutral-300 group-hover:text-white transition-colors leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-neutral-200 pt-8 mt-12">
                        <p className="text-sm text-neutral-500 italic font-serif text-center max-w-3xl mx-auto">
                            Credit to Stacey Longclaws, CPA, CAFM, for your guidance, support and advice in shaping our approach to advisory services.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Advisory;