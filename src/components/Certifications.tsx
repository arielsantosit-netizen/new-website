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
            className="bg-black snap-start pt-[65px] pb-20 lg:py-20 min-h-screen"
        >
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Licenses & Certifications
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Committed to continuous learning and professional development in IT and beyond
                        </p>
                    </div>

                    {/* Active Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-3 h-3 bg-[#1A237E] rounded-full"></span>
                            Active Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeCerts.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-[#1A237E]/20 to-transparent border-2 border-[#1A237E]/30 rounded-xl p-6 hover:border-[#1A237E]/50 transition-all duration-300"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-xl font-bold text-white pr-2">{cert.title}</h4>
                                            <span className="text-xs bg-[#1A237E]/20 text-[#1A237E] px-2 py-1 rounded-full whitespace-nowrap">
                                                {cert.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                        <p className="text-gray-500 text-sm">Issued: {cert.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* In Progress Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-3 h-3 bg-[#26C6DA] rounded-full animate-pulse"></span>
                            In Progress
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {inProgressCerts.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-[#26C6DA]/20 to-transparent border-2 border-[#26C6DA]/30 rounded-xl p-6 hover:border-[#26C6DA]/50 transition-all duration-300"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-lg font-bold text-white pr-2">{cert.title}</h4>
                                            <span className="text-xs bg-[#26C6DA]/20 text-[#26C6DA] px-2 py-1 rounded-full whitespace-nowrap">
                                                {cert.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pending Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-3 h-3 bg-[#FF9800] rounded-full"></span>
                            Pending
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pendingCerts.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-[#FF9800]/20 to-transparent border-2 border-[#FF9800]/30 rounded-xl p-6 hover:border-[#FF9800]/50 transition-all duration-300"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-xl font-bold text-white pr-2">{cert.title}</h4>
                                            <span className="text-xs bg-[#FF9800]/20 text-[#FF9800] px-2 py-1 rounded-full whitespace-nowrap">
                                                Pending
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                        <p className="text-gray-500 text-sm italic">{cert.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expired Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                            Previous Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {expiredCerts.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-900/20 to-transparent border-2 border-gray-700/30 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 opacity-75"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-xl font-bold text-white pr-2">{cert.title}</h4>
                                            <span className="text-xs bg-gray-600/20 text-gray-400 px-2 py-1 rounded-full whitespace-nowrap">
                                                {cert.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                        <p className="text-gray-500 text-sm">{cert.date}</p>
                                        {cert.credentialId && (
                                            <p className="text-gray-600 text-xs">ID: {cert.credentialId}</p>
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
