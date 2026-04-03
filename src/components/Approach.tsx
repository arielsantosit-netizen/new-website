'use client';

import React from 'react';

const Approach: React.FC = () => {
  return (
    <section 
      id="approach"
      className="min-h-screen flex items-center justify-center bg-[#fdfdfd] snap-start relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#f4d9df]/20 to-[#fdf5d6]/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 py-20 w-full relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif-elegant text-[#111] mb-16 text-center">
          Core <span className="text-gradient-elegant italic">Value</span> Propositions
        </h2>
        
        <div className="space-y-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-serif-elegant text-[#111] mb-4 flex items-center gap-4">
              <span className="text-gray-400 font-script text-4xl">01.</span> Mentorship
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed pl-14">
              <span className="font-bold text-[#111] block mb-1 uppercase tracking-widest text-xs">Expert Guidance</span>
              Navigate tech careers with personalized mentorship grounded in real-world experience.
            </p>
          </div>
          
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-serif-elegant text-[#111] mb-4 flex items-center gap-4">
              <span className="text-gray-400 font-script text-4xl">02.</span> Learning
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed pl-14">
              <span className="font-bold text-[#111] block mb-1 uppercase tracking-widest text-xs">Accessible Learning</span>
              Clear, practical resources—written guides, tutorials, and lessons designed for all backgrounds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-serif-elegant text-[#111] mb-4 flex items-center gap-4">
              <span className="text-gray-400 font-script text-4xl">03.</span> Community
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed pl-14">
              <span className="font-bold text-[#111] block mb-1 uppercase tracking-widest text-xs">Empowered Transitions</span>
              Support for career changers, veterans, and anyone ready to unlock their potential.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-serif-elegant text-[#111] mb-4 flex items-center gap-4">
              <span className="text-gray-400 font-script text-4xl">04.</span> Digital Safety
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed pl-14">
              <span className="font-bold text-[#111] block mb-1 uppercase tracking-widest text-xs">Privacy & Safety First</span>
              Maintaining your digital security and privacy as core values in all guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

