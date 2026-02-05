import React from 'react';
import { CheckCircle2 } from 'lucide-react';

import bigfootImage from '../assets/governance_bigfoot.png';

const Governance: React.FC = () => {
    return (
        <div className="pt-20 animate-fade-in">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src={bigfootImage}
                        alt="Governance Silhouette"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-widest">Governance</h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="space-y-12">
                    <div className="prose prose-lg max-w-none text-neutral-600 font-light leading-relaxed">
                        <p className="text-xl md:text-2xl text-black font-serif mb-8 leading-snug">
                            Strong governance is the foundation of a thriving Nation.
                        </p>
                        <p className="mb-6">
                            From the moment Chief and Council are elected, they assume significant responsibilities – often with limited transition time, constrained resources, and immediate expectations from membership, community partners, and government agencies.
                        </p>
                        <p>
                            Our role is to walk alongside leadership, providing tools, training, and support that build confidence and capacity while respecting the authority and role of Chief and Council and the governance direction provided by the membership.
                        </p>
                    </div>

                    <div className="bg-neutral-50 p-10 md:p-14 border border-neutral-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-red"></div>
                        <h3 className="font-serif text-3xl text-black mb-8">Our governance services include:</h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                "Comprehensive governance training and orientation for Chief and Council",
                                "Designing new governance structures and updates to existing governance structures",
                                "Financial literacy education and training",
                                "Organizational reviews and operational capacity assessments",
                                "Policy and procedure development and reviews"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <CheckCircle2 className="text-brand-red mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                    <span className="text-neutral-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-neutral-200 pt-8 mt-12">
                        <p className="text-sm text-neutral-500 italic font-serif text-center max-w-2xl mx-auto">
                            Thank you to Donny Smoke, Chief of Dakota Plains Wahpeton Nation and the community for sharing your vision of what could be with us.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Governance;