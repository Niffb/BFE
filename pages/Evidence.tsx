import React from 'react';
import ChartSection from '../components/ChartSection';
import { FileText, Lock, EyeOff } from 'lucide-react';

const Evidence: React.FC = () => {
    return (
        <div className="pt-20 animate-fade-in">
            {/* Header Section */}
            <section className="bg-neutral-50 py-24 px-6 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4 text-brand-red uppercase tracking-widest text-xs font-bold">
                        <Lock size={14} />
                        <span>Classified Intelligence</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-black mb-6">The Evidence</h1>
                    <p className="text-neutral-600 max-w-2xl text-lg font-light leading-relaxed">
                        Anecdotal stories are interesting. Data is undeniable. We turn folklore into financial forecasting.
                    </p>
                </div>
            </section>

            <ChartSection />

            {/* Dossier Section */}
            <section className="py-24 bg-brand-black text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-12">
                    <div className="flex justify-between items-end mb-16 border-b border-neutral-800 pb-8">
                        <h2 className="text-3xl font-serif">Recent Intercepts</h2>
                        <div className="flex items-center gap-2 text-neutral-500 text-xs uppercase tracking-widest">
                            <EyeOff size={14} /> Clearance Level 4 Required
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { id: 'CASE-992', title: 'Project: Yeti', sector: 'Consumer Tech', status: 'Confirmed', date: 'Oct 12, 2024' },
                            { id: 'CASE-884', title: 'Operation: Swamp Ape', sector: 'Real Estate', status: 'Debunked', date: 'Nov 04, 2024' },
                            { id: 'CASE-102', title: 'Asset: Mothman', sector: 'Aerospace', status: 'Pending', date: 'Dec 01, 2024' },
                        ].map((file) => (
                            <div key={file.id} className="bg-neutral-900 border border-neutral-800 p-6 hover:border-brand-red transition-colors group cursor-pointer">
                                <div className="flex justify-between mb-8">
                                    <FileText className="text-neutral-600 group-hover:text-white transition-colors" />
                                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${file.status === 'Confirmed' ? 'bg-green-900 text-green-300' :
                                            file.status === 'Debunked' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'
                                        }`}>{file.status}</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs text-neutral-500 font-mono">{file.id} // {file.date}</div>
                                    <h3 className="text-xl font-serif">{file.title}</h3>
                                    <p className="text-sm text-neutral-400">Sector: {file.sector}</p>
                                </div>
                                <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center text-xs">
                                    <span className="text-neutral-600">Encrypted</span>
                                    <span className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">Access File -{'>'}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Evidence;