import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero_background_v2.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Misty Mountain Wilderness with Bigfoot and Eagle"
          className="w-full h-full object-cover grayscale opacity-80 scale-105"
        />
        {/* Gradients to fade image into white for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-10">

        {/* Main Content */}
        <div className="max-w-4xl flex flex-col items-start space-y-8">

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-black tracking-tight drop-shadow-sm mix-blend-multiply">
            We find what <br />
            <span className="text-neutral-500 italic">others miss.</span>
          </h1>

          <p className="max-w-xl text-neutral-900 text-lg leading-relaxed font-light border-l-2 border-brand-red pl-6">
            Combining the ground-level persistence of the <strong>Sasquatch</strong> with the high-altitude strategic vision of the <strong>Eagle</strong>. We uncover hidden market truths.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-black text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-brand-red transition-colors duration-300 flex items-center gap-3 group shadow-lg">
              Deploy Research <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;