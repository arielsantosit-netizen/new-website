'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#111111]/10 py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#111111] to-transparent opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand */}
          <div className="space-y-8 md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="h-20 overflow-hidden">
                <img src="/logo-new.png" alt="Ariel Santos Logo" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-sm font-serif-elegant leading-relaxed">
              Making technology, career advancement, and lifelong learning accessible to all with clarity and empathy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[#111] font-serif-elegant text-sm uppercase tracking-[0.3em] font-medium">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Resources', 'Mentorship', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-500 hover:text-[#111111] font-serif-elegant transition-colors uppercase text-sm tracking-widest"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-[#111] font-serif-elegant text-sm uppercase tracking-[0.3em] font-medium">Inquiries</h4>
            <div className="space-y-4">
              <a href="mailto:info@arielsantos.space" className="block text-xl text-[#333] font-serif-elegant hover:text-[#111111] transition-colors">
                info@arielsantos.space
              </a>
              <p className="text-gray-500 text-sm font-serif-elegant uppercase tracking-widest leading-loose">
                Based in the USA<br />
                Global Deployment Available
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#111111]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-serif-elegant uppercase tracking-widest">
            © {currentYear} Ariel Santos • Tech Educator & Mentor. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-gray-400 text-[10px] font-serif-elegant uppercase tracking-[0.3em]">Precision</span>
            <span className="text-gray-400 text-[10px] font-serif-elegant uppercase tracking-[0.3em]">Integrity</span>
            <span className="text-gray-400 text-[10px] font-serif-elegant uppercase tracking-[0.3em]">Impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
