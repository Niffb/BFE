import React from 'react';

const TreatyRelationships: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in">
         {/* Hero Section */}
         <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2674&auto=format&fit=crop" 
                    alt="Nature Landscape" 
                    className="w-full h-full object-cover"
                />
                 {/* Soft overlay to ensure text readability */}
                 <div className="absolute inset-0 bg-neutral-900/20"></div>
             </div>
             
             <div className="relative z-10 text-center w-full px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal text-white drop-shadow-md uppercase tracking-wide">
                    Treaty Relationships Matter
                </h1>
             </div>
         </section>

         {/* Content Section */}
         <section className="py-32 max-w-5xl mx-auto px-6 text-center">
            <div className="space-y-16">
                <p className="text-2xl md:text-3xl font-serif leading-normal text-neutral-800">
                    Canada is covered by 96 Treaties: 69 Historic Treaties signed between 1701 and 1923, and 27 Modern Treaties negotiated since 1975. These Nation to Nation agreements are living commitments that shape the relationships between Indigenous People, the Crown and Canada.
                </p>
                
                <p className="text-xl md:text-2xl font-serif leading-normal text-neutral-600 font-light">
                    We recognize many Treaty obligations remain unfulfilled and this history continues to impact communities today. Bigfoot and the Eagle is committed to engaging with Indigenous partners in ways that are guided by their priorities, expertise, and vision for the future.
                </p>
            </div>
         </section>
    </div>
  );
};

export default TreatyRelationships;