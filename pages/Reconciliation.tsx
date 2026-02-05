import React from 'react';

const Reconciliation: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
            <div className="absolute inset-0 opacity-60">
                 <img 
                    src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2544&auto=format&fit=crop" 
                    alt="Misty Lake" 
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
            
            <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
                <h1 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-widest text-white drop-shadow-lg">Calls to Action</h1>
            </div>
        </section>

        <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
            <div className="space-y-12 text-lg md:text-xl font-light leading-relaxed text-black font-serif">
                <p>
                    As part of our commitment to Truth and Reconciliation Call to Action 92 Bigfoot and the Eagle participates in mandatory reconciliation and historical education. This includes learning about the Residential School System, Day Schools, the Sixties Scoop, Treaties, Treaty rights, and the constitutional protections found in sections 25 and 35 of the Constitution Act, 1982. We recognize that learning is ongoing, and that understanding the impacts of colonial systems requires continual reflection and humility. This is one way we, at Bigfoot and the Eagle, honour Truth and Reconciliation Call to Action 92.
                </p>
                <p>
                    We deliver our services in the spaces, tables and offices where First Nation governments and Indigenous organizations work. We see and hear you; we take our direction from you so we may collectively focus on building and developing capacity in accounting, finance, governance, and management. We focus our training on building skills, creating opportunity, narrowing skills gaps, and building strength.
                </p>
                <p>
                    Blending Indigenous and western governance structures bridges worldviews, adding value through creating opportunities for partnerships and building meaningful relationships. Blending these worldviews in building governance structures is how we, at Bigfoot and the Eagle, honour Truth and Reconciliation Call to Action 42.
                </p>

                <div className="pt-16 mt-16 border-t border-neutral-200 text-center">
                    <p className="text-2xl md:text-3xl font-serif italic text-neutral-800 mb-4">
                        “Treaty envisioned us paddling a river together as equals.”
                    </p>
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">
                        - Cadmus Delorme, Cowessess First Nation
                    </p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Reconciliation;