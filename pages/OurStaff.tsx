import React from 'react';

const OurStaff: React.FC = () => {
    return (
        <div className="pt-20 animate-fade-in bg-gradient-to-b from-white to-neutral-100 min-h-screen">
            <section className="py-24 max-w-6xl mx-auto px-6 sm:px-12">

                {/* Header / Bio Section */}
                <div className="mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold font-sans mb-1 text-black">
                        Glenn Fleetwood, CPA, CAFM, CAPA, CIL, FNI.Dir.
                    </h1>
                    <h2 className="text-xl font-serif text-neutral-600 mb-6">President</h2>

                    <div className="space-y-1 mb-8 font-serif text-lg">
                        <p><a href="mailto:glenn@bigfooteagle.ca" className="underline hover:text-brand-red transition-colors">glenn@bigfooteagle.ca</a></p>
                        <p>204.471.4635</p>
                    </div>

                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-neutral-800 max-w-4xl">
                        <p>
                            For more than 14 years Glenn has dedicated his career to serving First Nation governments and Indigenous organizations. His experience includes senior management roles such as those of Chief Financial Officer and Chief Operating Officer, as well as providing advisory services with two accounting firms, one a national firm, the other with a more regional focus. Through this work, Glenn has gained a deep appreciation for the privilege of supporting First Nation, Inuit, and Métis communities as a non-Indigenous practitioner.
                        </p>
                        <p>
                            Glenn specializes in governance, financial management, and operational leadership within First Nation and Indigenous contexts. He provides client directed support rooted in partnership, relationships, humility and respect. His work focuses on strengthening capacity with Chief and Council, Boards of Directors, and operational teams, ensuring organizations have the professional expertise they need to achieve their goals.
                        </p>
                    </div>
                </div>

                {/* Layout: Qualifications only */}
                <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
                    {/* Qualifications */}
                    <div className="w-full">
                        <h3 className="text-2xl font-serif mb-6 text-black">Professional Qualifications</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Chartered Professional Accountant (CPA)",
                                "Certified Aboriginal Financial Manager (CAFM)",
                                "Certified Aboriginal Professional Administrator (CAPA)",
                                "Certified Indigenous Leadership (CIL)",
                                "First Nations and Indigenous Board Governance (FNI.Dir.)",
                                "Certified in Public Sector Accounting Standards"
                            ].map((qual, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-neutral-800">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                    {qual}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default OurStaff;