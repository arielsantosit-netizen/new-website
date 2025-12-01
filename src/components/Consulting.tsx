'use client';

import React from 'react';
import { trackButtonClick, trackExternalLink, trackFormSubmission } from '@/lib/analytics';

const Consulting: React.FC = () => {
  const [selectedSession, setSelectedSession] = React.useState<'20' | '90'>('20');

  const handleBook = () => {
    // Track button click
    trackButtonClick('book_session', 'consulting_section');

    // Track consulting request
    trackFormSubmission('consulting_request', {
      session_length: selectedSession === '20' ? '20min' : '90min',
    });

    // Track external link click
    if (selectedSession === '20') {
      trackExternalLink('https://calendar.app.google/koPerS8JKfqi5HGE8', '20min Free Session');
      window.open('https://calendar.app.google/koPerS8JKfqi5HGE8', '_blank', 'noopener,noreferrer');
    } else {
      trackExternalLink('https://calendar.app.google/hJsP5Jz11pHsPGhh9', '90min Paid Session');
      window.open('https://calendar.app.google/hJsP5Jz11pHsPGhh9', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="consulting"
      className="bg-[#212121] snap-start pt-[65px] pb-20 lg:py-0 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 w-full h-[calc(100vh-65px)] lg:h-[calc(100vh-65px)]">
        <div className="h-full flex items-center justify-center pt-0 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch w-full">
            {/* Left: IT Consultation - 2 columns */}
            <div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Get Started
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                Schedule a free consultation to discuss your IT needs and discover how we can help your business thrive.
              </p>
              <div className="bg-[#212121] border border-[#FF9800]/30 rounded-xl p-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Free Consultation</span>
                    <span className="text-white font-semibold text-xs">30 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">IT Assessment</span>
                    <span className="text-[#FF9800] font-semibold text-xs">Comprehensive</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Custom Solutions</span>
                    <span className="text-[#FF9800] font-semibold text-xs">Tailored to you</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  trackButtonClick('contact_ariel', 'consulting_section');
                  const footer = document.querySelector('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#1A237E] to-[#0D1642] text-white text-base font-semibold rounded-xl hover:from-[#0D1642] hover:to-[#1A237E] transition-all duration-300 shadow-lg hover:shadow-[#1A237E]/50"
              >
                Contact Us Today
              </button>
            </div>

            {/* Right: Why Choose Us - 3 columns */}
            <div className="lg:col-span-3 w-full">
              <div className="bg-gradient-to-br from-[#1A237E]/40 via-[#26C6DA]/20 to-transparent border-2 border-[#FF9800]/30 rounded-3xl p-8 lg:p-10 h-full flex flex-col backdrop-blur-sm shadow-2xl shadow-[#1A237E]/20">
                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                      Why Choose TechMentor?
                    </h3>
                    <div className="inline-block bg-[#FF9800]/20 border border-[#FF9800]/40 rounded-lg px-4 py-2">
                      <p className="text-[#FF9800] font-bold text-sm">
                        Veteran-owned • Expert-driven • Client-focused
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-200 text-lg leading-relaxed">
                    With over a decade of IT experience and a military background in precision and reliability, we deliver solutions that work.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                    <p className="flex items-start gap-2">
                      <span className="text-[#FF9800] font-bold mt-1">✓</span>
                      <span className="text-sm">IT infrastructure expertise</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#FF9800] font-bold mt-1">✓</span>
                      <span className="text-sm">Cloud migration specialists</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#FF9800] font-bold mt-1">✓</span>
                      <span className="text-sm">Network optimization</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#FF9800] font-bold mt-1">✓</span>
                      <span className="text-sm">24/7 support available</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#FF9800] font-bold mt-1">✓</span>
                      <span className="text-sm">Custom web development</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#FF9800] font-bold mt-1">✓</span>
                      <span className="text-sm">IT training & mentoring</span>
                    </p>
                  </div>

                  <div className="bg-[#212121] border-2 border-[#FF9800]/30 rounded-2xl p-5">
                    <p className="text-white text-lg font-semibold mb-2">Our Commitment:</p>
                    <p className="text-gray-300 text-sm">
                      Making technology accessible, secure, and empowering for businesses of all sizes. Your success is our mission.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    trackButtonClick('view_services', 'consulting_section');
                    const work = document.getElementById('work');
                    if (work) {
                      work.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#1A237E] to-[#0D1642] text-white text-lg font-bold rounded-xl hover:from-[#0D1642] hover:to-[#1A237E] transition-all duration-300 shadow-xl hover:shadow-[#1A237E]/60 mt-6"
                >
                  Explore Our Services →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
