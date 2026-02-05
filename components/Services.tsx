import React from 'react';
import { Footprints, Eye, Map as MapIcon, Microscope } from 'lucide-react';

const services = [
  {
    icon: <Footprints strokeWidth={1} />,
    title: "Anomaly Tracking",
    description: "Deep-dive forensic accounting and market investigations to find elusive data points."
  },
  {
    icon: <Eye strokeWidth={1} />,
    title: "Aerial Oversight",
    description: "High-level strategic governance and long-range corporate vision planning."
  },
  {
    icon: <MapIcon strokeWidth={1} />,
    title: "Territory Mapping",
    description: "Comprehensive competitive landscape analysis and expansion routing."
  },
  {
    icon: <Microscope strokeWidth={1} />,
    title: "Cryptid Analytics",
    description: "Identifying 'mythical' returns and unicorn opportunities in emerging markets."
  }
];

const Services: React.FC = () => {
  return (
    <section id="expertise" className="relative py-24 bg-neutral-100 text-black border-y border-neutral-200 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=3200&auto=format&fit=crop" 
            alt="Aerial View Texture" 
            className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-neutral-300">
            <div>
                <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2 block">Our Methodology</span>
                <h2 className="font-serif text-4xl md:text-5xl text-black">The Research Protocol</h2>
            </div>
            <p className="text-neutral-600 mt-4 md:mt-0 max-w-sm text-right text-sm font-medium">
                From the forest floor to the mountain peak.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-10 hover:bg-white transition-all duration-300 group cursor-crosshair border border-transparent hover:border-neutral-200 shadow-sm hover:shadow-xl">
                <div className="mb-8 text-neutral-400 group-hover:text-brand-red transition-colors duration-300 transform group-hover:scale-110 origin-left">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 36 })}
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-4 text-black group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                </h3>
                
                <p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-900">
                    {service.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;