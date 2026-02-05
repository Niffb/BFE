import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sightings: 240, confirmed: 120 },
  { name: 'Feb', sightings: 139, confirmed: 98 },
  { name: 'Mar', sightings: 980, confirmed: 220 },
  { name: 'Apr', sightings: 390, confirmed: 180 },
  { name: 'May', sightings: 480, confirmed: 350 },
  { name: 'Jun', sightings: 380, confirmed: 290 },
  { name: 'Jul', sightings: 430, confirmed: 310 },
];

const ChartSection: React.FC = () => {
  return (
    <section id="data" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-0 right-0 text-[200px] leading-none font-serif text-neutral-50 opacity-50 select-none pointer-events-none z-0">
        DATA
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        <div className="lg:w-1/3 space-y-8">
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1547844145-2f95c47796d8?q=80&w=1000&auto=format&fit=crop" 
                    alt="Lens/Optics" 
                    className="w-full h-48 object-cover grayscale rounded-lg shadow-md mb-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Optical Precision</span>
                </div>
            </div>

            <div>
                <div className="text-brand-red font-bold tracking-widest text-xs uppercase">Field Data</div>
                <h2 className="font-serif text-4xl md:text-5xl text-black leading-tight mt-2">
                    Separating Myth <br/> from <span className="italic text-neutral-500">Reality.</span>
                </h2>
                <p className="text-neutral-600 leading-relaxed font-light mt-4">
                    Raw data is elusive and often misleading—like a footprint in the mud. We apply rigorous forensic analysis to distinguish between noise (Sightings) and actionable intelligence (Confirmations).
                </p>
            </div>
            
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-2 gap-8">
                <div>
                    <div className="text-4xl font-serif text-black">87%</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Noise Filtered</div>
                </div>
                <div>
                    <div className="text-4xl font-serif text-black">12.4x</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Signal Amplification</div>
                </div>
            </div>
        </div>

        <div className="lg:w-2/3 w-full h-[500px] bg-neutral-50 p-8 border border-neutral-100 relative shadow-inner">
            <div className="absolute top-0 right-0 p-4 z-20">
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-neutral-200"></span> Raw Sightings
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-brand-red"></span> Verified Intel
                    </div>
                </div>
            </div>
            
            <h3 className="text-sm font-semibold mb-6 text-neutral-400 uppercase tracking-widest">Anomaly Detection Log</h3>
            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorConfirmed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8B0000" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#8B0000" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                    <XAxis dataKey="name" stroke="#999" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#999" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e5e5', color: '#000', padding: '12px', borderRadius: '4px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        itemStyle={{ color: '#000', fontSize: '12px', fontWeight: 'bold' }}
                        cursor={{ stroke: '#8B0000', strokeWidth: 1 }}
                    />
                    <Area type="monotone" dataKey="sightings" stackId="1" stroke="#d4d4d4" fill="#f5f5f5" />
                    <Area type="monotone" dataKey="confirmed" stackId="2" stroke="#8B0000" strokeWidth={2} fill="url(#colorConfirmed)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;