'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Mentorship Programs",
    tag: "1-on-1 & Specialized",
    description: "Structured guidance for career changers and veterans. Build real-world skills and land your next role.",
    details: ["Career Transitions", "Veteran Tech Support", "Ongoing Roadmap Support"],
    tech: "TECH • CAREER • GROWTH",
    icon: "🤝"
  },
  {
    title: "Educational Content",
    tag: "Guides & Tutorials",
    description: "Clear, practical resources designed for all backgrounds. Written guides, video lessons, and podcasts.",
    details: ["Written Tutorials", "Video Explainers", "Downloadable Roadmaps"],
    tech: "LEARN • ACCESSIBILITY",
    icon: "📚"
  },
  {
    title: "Workshops & Speaking",
    tag: "Corporate & Public",
    description: "Training on cybersecurity, digital transformation, and workforce development for teams and events.",
    details: ["Team Training", "Public Workshops", "Panel Participation"],
    tech: "SPEAK • TRAIN • LEAD",
    icon: "🎤"
  },
  {
    title: "Career Coaching",
    tag: "Placement Strategy",
    description: "Personalized support for resume optimization, LinkedIn presence, and interview preparation.",
    details: ["Resume & LinkedIn", "Technical Interviews", "Strategy Sessions"],
    tech: "STRATEGY • COACH • EXECUTE",
    icon: "⚡"
  }
];

const Portfolio: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="work" className="bg-[#fdfdfd] py-24 lg:py-40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#f4d9df]/20 to-[#fdf5d6]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

          {/* Left: Titles / Navigation */}
          <div className="lg:w-1/2 flex flex-col space-y-10">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-500 text-sm font-serif-elegant uppercase tracking-[0.3em] mb-4 block font-medium"
              >
                Core Competencies
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-serif-elegant text-[#111111] leading-tight">
                Services <br /><span className="text-gray-400 italic">& Solutions</span>
              </h2>
            </div>

            <div className="space-y-4 flex-1">
              {projects.map((p, i) => (
                <motion.button
                  key={i}
                  onMouseEnter={() => setSelected(i)}
                  className={`w-full text-left p-6 rounded-3xl transition-all duration-500 border flex items-center gap-6 group ${selected === i
                      ? 'bg-white shadow-lg border-gray-100 scale-[1.02]'
                      : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
                    }`}
                >
                  <span className={`text-2xl transition-transform duration-500 ${selected === i ? 'scale-125' : ''}`}>
                    {p.icon}
                  </span>
                  <div className="flex-1">
                    <p className={`font-serif-elegant uppercase tracking-widest text-xs mb-1 ${selected === i ? 'text-gray-600' : 'text-gray-400'}`}>
                      {p.tag}
                    </p>
                    <h3 className="text-2xl font-serif-elegant text-[#111111]">
                      {p.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ x: selected === i ? 0 : -20, opacity: selected === i ? 1 : 0 }}
                    className="text-[#111111]"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Showcase */}
          <div className="lg:w-1/2 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <div className="bg-white/60 p-10 md:p-14 h-full flex flex-col justify-between border border-gray-100 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-serif-elegant text-[#111111] leading-tight mb-6">
                      {projects[selected].title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed mb-10">
                      {projects[selected].description}
                    </p>

                    <div className="space-y-4 mb-12">
                      <p className="text-[#111111] font-serif-elegant font-medium text-xs uppercase tracking-widest">Technical Focus</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects[selected].details.map((d, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            <span className="text-sm font-medium text-gray-500">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 font-serif-elegant font-medium text-[10px] uppercase tracking-[0.3em] mb-2">Primary Stack</p>
                      <p className="text-[#111111] font-serif-elegant font-medium text-lg tracking-wide uppercase">
                        {projects[selected].tech}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.getElementById('consulting')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-14 h-14 rounded-full bg-[#111111] flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:bg-[#333333] transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

