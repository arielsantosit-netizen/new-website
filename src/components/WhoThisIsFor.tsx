'use client';

import React from 'react';

const WhoThisIsFor: React.FC = () => {
  return (
    <section
      id="who-this-is-for"
      className="bg-[#212121] snap-start pt-[65px] pb-20 lg:py-0 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 w-full lg:h-[calc(100vh-65px)]">
        <div className="lg:h-full flex items-center pt-0 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-12 items-center w-full h-full">
            {/* Left: Who This Is For - Static */}
            <div className="lg:pr-8 flex flex-col justify-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 uppercase">
                Technology Solutions for Growing Businesses
              </h2>
              <div className="h-1 w-32 bg-[#FF9800] mb-6"></div>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <div className="space-y-4">
                  <p className="text-xl flex items-start gap-3">
                    <span className="text-[#FF9800] font-bold text-2xl">→</span>
                    <span>Small to medium businesses needing reliable IT support</span>
                  </p>
                  <p className="text-xl flex items-start gap-3">
                    <span className="text-[#FF9800] font-bold text-2xl">→</span>
                    <span>Organizations seeking digital transformation</span>
                  </p>
                  <p className="text-xl flex items-start gap-3">
                    <span className="text-[#FF9800] font-bold text-2xl">→</span>
                    <span>Companies seeking reliable IT solutions</span>
                  </p>
                  <p className="text-xl flex items-start gap-3">
                    <span className="text-[#FF9800] font-bold text-2xl">→</span>
                    <span>Teams ready to optimize their IT infrastructure</span>
                  </p>
                </div>

                <p className="mt-8 text-white">
                  Whether you're scaling up or starting fresh,<br />
                  I provide the expertise you need to succeed.
                </p>

                <p className="text-[#FF9800] text-xl font-bold uppercase">
                  Technology should empower your business, not complicate it.<br /><br />
                  Let's build solutions that work for you.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block justify-self-center self-stretch flex items-center">
              <div className="w-px bg-[#FF9800] rounded-full h-[calc(100%-2rem)] my-8"></div>
            </div>

            {/* Right: About Me - Scrollable */}
            <div className="lg:pl-8 h-full overflow-y-auto scrollbar-hide relative">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed pb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sticky top-0 bg-[#212121] pt-4 pb-4 z-20 uppercase">
                  About Me
                </h2>
                <div className="h-1 w-24 bg-[#FF9800] mb-6"></div>
                {/* Fade gradient overlay - fades content as it scrolls up */}
                <div className="sticky top-[80px] left-0 right-0 h-20 bg-gradient-to-b from-[#212121] via-[#212121]/70 to-transparent pointer-events-none z-10 -mt-20"></div>

                <p className="text-white font-bold text-xl uppercase">
                  Education & Credentials
                </p>
                <div className="space-y-2">
                  <p>• BS in Information Systems Security</p>
                  <p>• MA in IT Project Management</p>
                  <p>• AAS in Air Transportation Operations</p>
                </div>

                <p className="text-white font-semibold text-xl mt-6">
                  Military Service
                </p>
                <p>
                  Air Force veteran and active Navy Reservist with over a decade of experience in IT, project management, and workforce services.
                </p>

                <p>
                  My military background taught me discipline, attention to detail, and the importance of mission-critical systems. I bring that same dedication to every client engagement.
                </p>

                <p className="text-white font-semibold text-xl mt-6">
                  Professional Expertise
                </p>
                <div className="space-y-2">
                  <p>• IT Infrastructure & Troubleshooting</p>
                  <p>• Digital Transformation & Process Optimization</p>
                  <p>• Project Leadership & Team Training</p>
                  <p>• Career Development & Workforce Guidance</p>
                  <p>• Content Creation & Educational Resources</p>
                </div>

                <div className="rounded-xl border border-[#FF9800]/30 bg-black/40 pl-6 pr-6 py-6 mt-8 space-y-3">
                  <p className="text-[#FF9800] font-semibold text-xl mb-4">My Mission:</p>
                  <p className="italic text-gray-200">
                    "To make technology, career advancement, and lifelong learning accessible to all, regardless of background. I believe in sharing expertise with clarity, empathy, and actionable guidance."
                  </p>
                </div>

                <p className="text-white font-semibold text-xl mt-8">
                  I'm here to help you unlock your potential in tech and professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
