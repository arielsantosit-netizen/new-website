'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { trackButtonClick, trackExternalLink } from '@/lib/analytics';

const Consulting: React.FC = () => {
  const handleBook = (type: '20' | '90') => {
    trackButtonClick('book_session', 'consulting_section');
    if (type === '20') {
      trackExternalLink('https://calendar.app.google/C4jGJ8X7h23hjxb58', '30min Free Session');
      window.open('https://calendar.app.google/C4jGJ8X7h23hjxb58', '_blank', 'noopener,noreferrer');
    } else {
      trackExternalLink('https://calendar.app.google/7s37RjTv4gyh1CJe9', '90min Paid Session');
      window.open('https://calendar.app.google/7s37RjTv4gyh1CJe9', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="consulting" className="bg-white py-24 lg:py-40 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f0f9ff]/50 to-[#e0e7ff]/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#555] text-sm font-serif-elegant uppercase tracking-[0.3em] mb-4 block">Direct Access</span>
            <h2 className="text-5xl md:text-7xl font-serif-elegant text-[#111] leading-tight mb-8">
              Expert <br /><span className="text-gradient-elegant italic">Partnership</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
              Schedule a dedicated working session to solve your most complex challenges or map out your next strategic phase.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-gray-100 group hover:border-[#111111]/30 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#111] font-serif-elegant text-2xl">Precision</h4>
                  <p className="text-gray-500 text-sm mt-1">Reliability and attention to detail in every project.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-gray-100 group hover:border-[#111111]/30 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#111] font-serif-elegant text-2xl">Proactive Support</h4>
                  <p className="text-gray-500 text-sm mt-1">Solving problems before they impact your operations.</p>
                </div>
              </div>

              {/* Social Connect */}
              <div className="pt-6">
                <p className="text-[#555] text-xs font-serif-elegant uppercase tracking-widest mb-6">Social Presence</p>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z' },
                    { name: 'Instagram', icon: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01' },
                    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-all shadow-sm group"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all"
            >
              <div>
                <span className="text-gray-400 text-xs font-serif-elegant uppercase tracking-widest mb-4 block">Introductory</span>
                <h3 className="text-3xl font-serif-elegant text-[#111] mb-4">Discovery</h3>
                <p className="text-gray-500 text-sm mb-8">Discussion of your current landscape and initial strategic alignment.</p>
                <div className="text-3xl font-serif-elegant text-[#111] mb-2">FREE</div>
                <div className="text-gray-400 text-xs tracking-widest uppercase">30 Minutes</div>
              </div>
              <button
                onClick={() => handleBook('20')}
                className="mt-8 w-full py-4 rounded-full border border-[#111] hover:bg-gray-50 text-[#111] font-serif-elegant uppercase text-sm tracking-widest transition-all"
              >
                Book Free
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#111] rounded-3xl p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all"
            >
              <div>
                <span className="text-gray-400 text-xs font-serif-elegant uppercase tracking-widest mb-4 block">Accelerated</span>
                <h3 className="text-3xl font-serif-elegant text-white mb-4">Strategic</h3>
                <p className="text-gray-400 text-sm mb-8">Deep-dive technical session. Architecture review and roadmap development.</p>
                <div className="text-3xl font-serif-elegant text-white mb-2">PAID</div>
                <div className="text-gray-400 text-xs tracking-widest uppercase">90 Minutes</div>
              </div>
              <button
                onClick={() => handleBook('90')}
                className="mt-8 w-full py-4 rounded-full bg-white hover:bg-gray-200 text-[#111] font-serif-elegant uppercase text-sm tracking-widest transition-all"
              >
                Book Paid
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
