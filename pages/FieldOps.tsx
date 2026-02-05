import React from 'react';
import Services from '../components/Services';
import { Target, Compass } from 'lucide-react';

const FieldOps: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in">
        {/* Header Section */}
        <section className="bg-brand-black text-white py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                 <img 
                    src="https://images.unsplash.com/photo-1519810755548-39de2157184c?q=80&w=2000&auto=format&fit=crop" 
                    alt="Tactical Map" 
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-2 mb-4 text-brand-red uppercase tracking-widest text-xs font-bold">
                    <Compass size={14} /> 
                    <span>Global Deployment</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif mb-6">Field Operations</h1>
                <p className="text-neutral-400 max-w-2xl text-lg font-light leading-relaxed">
                    We do not rely on satellite imagery alone. We deploy specialized teams to the darkest corners of the market to verify data manually.
                </p>
            </div>
        </section>

        <Services />

        {/* Methodology Timeline */}
        <section className="py-24 bg-white border-t border-neutral-200">
             <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-serif mb-8">The Tracking Protocol</h2>
                        <p className="text-neutral-600 mb-6">
                            Our agents follow a strict, four-stage protocol derived from wilderness survival techniques and adapted for high-stakes corporate espionage.
                        </p>
                        <ul className="space-y-8 mt-12">
                            {[
                                { title: '01. Scat Analysis', desc: 'Analyzing the "waste" data competitors leave behind.' },
                                { title: '02. Prints & Tracks', desc: 'Following digital footprints to their origin source.' },
                                { title: '03. Visual Confirmation', desc: 'Obtaining irrefutable proof of market anomaly.' },
                                { title: '04. Tag & Release', desc: 'Monitoring the asset for long-term growth patterns.' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 group">
                                    <span className="text-neutral-300 font-serif text-2xl group-hover:text-brand-red transition-colors">/</span>
                                    <div>
                                        <h4 className="font-bold text-black uppercase text-sm tracking-wide mb-1">{item.title}</h4>
                                        <p className="text-neutral-500 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-full min-h-[400px] bg-neutral-100 p-8 border border-neutral-200">
                        <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-neutral-400">Tactical Grid</div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <Target size={200} strokeWidth={0.5} className="text-brand-red animate-pulse" />
                        </div>
                        <div className="absolute bottom-8 right-8 text-right">
                            <div className="text-4xl font-serif text-black">24/7</div>
                            <div className="text-xs text-neutral-500 uppercase">Monitoring Active</div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    </div>
  );
};

export default FieldOps;