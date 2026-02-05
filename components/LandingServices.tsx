import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import bigfootImage from '../assets/governance_bigfoot.png';
import eagleImage from '../assets/advisory_eagle.png';

const LandingServices: React.FC = () => {
    const services = [
        {
            title: 'GOVERNANCE',
            description: 'Building confidence and capacity in leadership structures.',
            image: bigfootImage,
            link: '/governance'
        },
        {
            title: 'MANAGEMENT',
            description: 'Operational support to free up leadership for core responsibilities.',
            image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1000&auto=format&fit=crop',
            link: '/management'
        },
        {
            title: 'ADVISORY',
            description: 'Practical guidance and professional insight for community goals.',
            image: eagleImage,
            link: '/advisory'
        }
    ];

    return (
        <div className="w-full bg-white">
            {/* Redesigned Mission Section */}
            <section className="relative py-32 px-6 sm:px-12 bg-neutral-900 text-white overflow-hidden">
                {/* Ambient Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-brand-red rounded-full blur-[120px] mix-blend-screen opacity-20"></div>
                    <div className="absolute left-10 bottom-10 w-[300px] h-[300px] bg-neutral-700 rounded-full blur-[100px] opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
                        <div className="lg:w-1/2">
                            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">
                                Walking the line between <span className="text-neutral-500 italic">myth</span> and <span className="text-brand-red">market reality.</span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2 pt-2 lg:pt-4">
                            <div className="w-12 h-0.5 bg-brand-red mb-8"></div>
                            <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-8">
                                We believe meaningful intelligence is built through respect for the unknown, consistency in tracking, and listening to the signals others ignore.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-12">
                    <div className="flex justify-between items-end mb-16 border-b border-neutral-100 pb-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Core Disciplines</h3>
                        <div className="text-brand-red font-serif italic text-lg">Our Expertise</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <Link key={index} to={service.link} className="group block">
                                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-8">
                                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute bottom-0 right-0 p-6 z-20">
                                        <span className="inline-flex items-center justify-center w-12 h-12 bg-white text-black group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-lg">
                                            <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </span>
                                    </div>
                                </div>

                                <div className="pr-4">
                                    <h3 className="text-3xl font-serif text-black mb-3 group-hover:text-brand-red transition-colors">{service.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingServices;