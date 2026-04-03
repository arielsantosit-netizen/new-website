'use client';

import React from 'react';

const Certifications: React.FC = () => {
    const activeCerts = [
        {
            title: "Aerial Port Expeditor (APEX)",
            issuer: "United States Air Force",
            date: "Dec 2018",
            status: "Active"
        },
    ];

    const expiredCerts = [
        {
            title: "(ISC)² Candidate",
            issuer: "(ISC)²",
            date: "Jul 2023 - Jul 2024",
            status: "Expired"
        },
        {
            title: "Personal Trainer Certification",
            issuer: "ASFA - American Sports & Fitness Association",
            date: "Jul 2023 - Jul 2024",
            credentialId: "108769",
            status: "Expired"
        },
    ];

    const inProgressCerts = [
        {
            title: "CompTIA A+",
            issuer: "CompTIA",
            status: "In Progress"
        },
        {
            title: "CompTIA Network+",
            issuer: "CompTIA",
            status: "In Progress"
        },
        {
            title: "CompTIA Security+",
            issuer: "CompTIA",
            status: "In Progress"
        },
        {
            title: "ITIL Foundation Level",
            issuer: "PeopleCert",
            status: "In Progress"
        },
    ];

    const pendingCerts = [
        {
            title: "Teaching English as a Foreign Language (TEFL)",
            issuer: "International TEFL Academy",
            status: "Pending Teaching Hours"
        },
    ];

    return (
        <section
            id="certifications"
            className="bg-white snap-start pt-[65px] pb-20 lg:py-20 min-h-screen relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-pink-50/50 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif-elegant text-[#111]">
                            Licenses & <span className="text-gradient-elegant italic">Certifications</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto font-serif-elegant">
                            Committed to continuous learning and professional development in IT and beyond
                        </p>
                    </div>

                    {/* Active Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif-elegant text-[#111] flex items-center gap-3">
                            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                            Active Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeCerts.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 blur-2xl rounded-full group-hover:bg-blue-100 transition-colors" />
                                    <div className="space-y-3 relative z-10">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-xl font-serif-elegant font-bold text-[#111] pr-2">{cert.title}</h4>
                                            <span className="text-[10px] uppercase tracking-wider font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full whitespace-nowrap">
                                                {cert.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm font-serif-elegant">{cert.issuer}</p>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">Issued: {cert.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* In Progress Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif-elegant text-[#111] flex items-center gap-3">
                            <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
                            In Progress
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {inProgressCerts.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md hover:border-teal-200 transition-all duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-teal-50 blur-2xl rounded-full group-hover:bg-teal-100 transition-colors" />
                                    <div className="space-y-3 relative z-10">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-lg font-serif-elegant font-bold text-[#111] pr-2">{cert.title}</h4>
                                            <span className="text-[10px] uppercase tracking-wider font-bold bg-teal-50 text-teal-600 px-2.5 py-1 rounded-full whitespace-nowrap">
                                                {cert.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm font-serif-elegant">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pending Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif-elegant text-[#111] flex items-center gap-3">
                            <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                            Pending
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pendingCerts.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md hover:border-orange-200 transition-all duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-orange-50 blur-2xl rounded-full group-hover:bg-orange-100 transition-colors" />
                                    <div className="space-y-3 relative z-10">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-xl font-serif-elegant font-bold text-[#111] pr-2">{cert.title}</h4>
                                            <span className="text-[10px] uppercase tracking-wider font-bold bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full whitespace-nowrap">
                                                Pending
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm font-serif-elegant">{cert.issuer}</p>
                                        <p className="text-gray-400 text-xs italic">{cert.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expired Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif-elegant text-[#111] flex items-center gap-3 text-opacity-60">
                            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                            Previous Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {expiredCerts.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 opacity-75 relative overflow-hidden"
                                >
                                    <div className="space-y-3 relative z-10">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-xl font-serif-elegant font-bold text-gray-700 pr-2">{cert.title}</h4>
                                            <span className="text-[10px] uppercase tracking-wider font-bold bg-gray-200 text-gray-500 px-2.5 py-1 rounded-full whitespace-nowrap">
                                                {cert.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm font-serif-elegant">{cert.issuer}</p>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">{cert.date}</p>
                                        {cert.credentialId && (
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">ID: {cert.credentialId}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
