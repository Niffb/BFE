import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in bg-white">
        
        {/* Hero Quote - Reused/Expanded */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
                    alt="Forest Path" 
                    className="w-full h-full object-cover grayscale opacity-20"
                />
                 <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
            </div>
            
            <div className="max-w-4xl text-center relative z-10">
                <div className="w-1 h-24 bg-brand-red mx-auto mb-8"></div>
                <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-8 text-black">
                    "The trail is never cold <br/> if you know how to <span className="italic text-brand-red">look</span>."
                </h1>
                <p className="font-sans text-neutral-500 text-sm tracking-[0.3em] uppercase font-bold">Founding Principle</p>
            </div>
        </section>

        {/* The Duality Section */}
        <section className="py-24 max-w-5xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div>
                        <span className="text-8xl font-serif text-neutral-100 absolute -z-10 -ml-8 -mt-8">01</span>
                        <h2 className="text-3xl font-serif mb-4 relative z-10">The Sasquatch</h2>
                        <h3 className="text-xs uppercase tracking-widest text-brand-red mb-4">Ground Presence</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            The Sasquatch represents the unseen reality. It is the ability to move through the market undetected, gathering raw intelligence from the forest floor. It is about patience, stealth, and the recognition that the most valuable data is often camouflaged as noise.
                        </p>
                    </div>
                    <div>
                        <span className="text-8xl font-serif text-neutral-100 absolute -z-10 -ml-8 -mt-8">02</span>
                        <h2 className="text-3xl font-serif mb-4 relative z-10">The Eagle</h2>
                        <h3 className="text-xs uppercase tracking-widest text-brand-red mb-4">Aerial Perspective</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            The Eagle represents the strategic strike. Once the anomaly is confirmed on the ground, we ascend. From 30,000 feet, patterns emerge that are invisible to the pedestrian observer. We provide the oversight necessary to turn intelligence into domination.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop" 
                        alt="Mountain Peak" 
                        className="w-full h-[600px] object-cover grayscale rounded-sm shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-brand-black text-white p-8 max-w-xs shadow-xl">
                        <p className="font-serif text-xl italic">
                            "We bridge the gap between the mud and the clouds."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Philosophy;