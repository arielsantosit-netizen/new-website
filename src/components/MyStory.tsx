'use client';

import React from 'react';

const MyStory: React.FC = () => {
  return (
    <section 
      id="mystory"
      className="bg-white snap-start py-20 lg:py-0 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#f0f9ff]/50 to-[#e0e7ff]/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full lg:min-h-[calc(100vh-65px)] relative z-10">
        <div className="lg:min-h-full flex items-center py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 items-start w-full">
          {/* Left: Heading + lead */}
          <div className="lg:pr-8 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif-elegant text-[#111] leading-tight mb-8">
              From Barely Making Rent to Building <span className="text-gradient-elegant italic">AI Products</span> People Pay For
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-serif-elegant tracking-wide">
              <p>
                A year ago I was barely making money, questioning if this entrepreneur thing was realistic.
              </p>
              
              <p>
                Then I lost my dad in December 2023.
              </p>

              <p>
                He was the person who believed in me no matter what. When he left, I had a choice: step into those shoes and believe in myself like he did, or abandon hope.
              </p>
              
              <p className="text-[#111] font-semibold text-xl italic">
                I chose to bet on myself.
              </p>
              
              <p>
                I went from client work (Disruptiv Solutions) to building proof-of-concept tools (ChatterCard) to becoming lead architect for an AI platform serving 1,500+ active users. From knowing nothing about speaking to leading workshops.
              </p>
            </div>
          </div>

          {/* Separator (desktop only), vertically centered */}
          <div className="hidden lg:block justify-self-center self-stretch h-full py-12">
            <div className="w-px bg-gray-200 h-full rounded-full"></div>
          </div>

          {/* Right: Remaining story */}
          <div className="lg:pl-8 space-y-6 text-gray-600 text-lg leading-relaxed font-serif-elegant tracking-wide pt-4 lg:pt-0">
            <p>
              I learned that imposter syndrome is expensive. That knowing your worth isn't optional.
            </p>
            
            <p>
              Now I'm 31, living in Pensacola, FL, building in public and teaching others to do the same.
            </p>
            
            <p>
              I work on my dream every day. I also know that grinding isn't always the answer—rest matters too.
            </p>
            
            <div className="rounded-3xl border border-gray-100 bg-gray-50/50 p-8 mt-10 space-y-4 shadow-sm">
              <p className="text-[#111] font-semibold text-2xl mb-6">If you're where I was 12 months ago:</p>
              <p className="flex items-center gap-4">
                <span className="text-pink-500 font-bold text-xl">→</span>
                <span>You're more capable than you think</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="text-pink-500 font-bold text-xl">→</span>
                <span>Work on your craft daily</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="text-pink-500 font-bold text-xl">→</span>
                <span>Failure is growth</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="text-pink-500 font-bold text-xl">→</span>
                <span>Build your audience</span>
              </p>
            </div>
            
            <p className="text-[#111] font-semibold text-xl mt-10 italic">
              The universe put you exactly where you need to be.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;

