import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Management: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in">
         {/* Hero */}
         <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
            <div className="absolute inset-0 opacity-40">
                <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2000&auto=format&fit=crop" 
                    alt="Management Landscape" 
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            <div className="relative z-10 text-center max-w-4xl px-6">
                <h1 className="text-5xl md:text-7xl font-serif mb-2 uppercase tracking-widest">Management</h1>
                <h2 className="text-3xl md:text-5xl font-serif tracking-widest text-neutral-300">Services</h2>
            </div>
        </section>

        <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
            <div className="space-y-12">
                <div className="prose prose-lg max-w-none text-neutral-600 font-light leading-relaxed">
                    <p className="mb-6">
                        First Nation, Inuit and Métis communities and organizations carry an enormous amount of responsibility; managing programs, funding agreements, governance expectations, reporting requirements, and the day-to-day realities of serving members and managing businesses. Many important tasks end up stalled not because they lack importance, but because time and capacity are often stretched thin.
                    </p>
                    <p>
                        Our management services are designed to support First Nation governments and Indigenous organizations by taking on some of those pressures, freeing up time and space for leadership and staff to focus on core responsibilities.
                    </p>
                    <p className="font-medium text-black">
                        Our services include, but are not limited to:
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-serif text-black border-b-2 border-black inline-block pb-1 mb-8">
                        Accounting Services
                    </h3>
                    <ul className="space-y-4">
                         {[
                            "Month end and year end checklists",
                            "Accounting for your funding agreement",
                            "Bank reconciliations and other reconciliations",
                            "Chart of Account maintenance"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-100 hover:border-brand-red transition-colors group">
                                <div className="w-2 h-2 bg-brand-red rounded-full group-hover:scale-150 transition-transform"></div>
                                <span className="text-neutral-800 text-lg font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Management;