'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { trackButtonClick } from '@/lib/analytics';

interface NavigationProps {
  activeSection?: string;
}

const Navigation = ({ activeSection = 'hero' }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#who-this-is-for' },
    { name: 'Services', href: '#work' },
    { name: 'Resources', href: '#resources' },
    { name: 'Mentorship', href: '#approach' },
    { name: 'Contact', href: '#consulting' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const navItem = navigationItems.find(item => item.href === href);
      trackButtonClick('nav_click', navItem?.name || targetId);

      if (pathname !== '/') {
        router.push(`/#${targetId}`);
      } else {
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${scrolled ? 'lg:py-4' : 'lg:py-8'
          }`}
      >
        <div className={`max-w-5xl mx-auto rounded-full transition-all duration-500 border ${scrolled
            ? 'bg-white/80 backdrop-blur-xl border-[#111111]/10 shadow-xl'
            : 'bg-transparent border-transparent'
          }`}>
          <div className="flex items-center justify-between px-6 h-16 md:h-18">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-3 group"
            >
              <div className="relative h-18 py-2 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img src="/logo-new.png" alt="Ariel Santos Logo" className="h-full w-auto object-contain" />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[#111]/5 rounded-full p-1.5 border border-[#111]/5">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-6 py-2.5 rounded-full font-serif-elegant uppercase text-sm tracking-widest transition-all duration-300 ${isActive
                      ? 'text-white'
                      : 'text-gray-600 hover:text-[#111111]'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-[#111111] rounded-full z-0"
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => {
                trackButtonClick('book_session_cta', 'navigation');
                window.open('https://calendar.app.google/AJSSFjqjjbx6TkgDA', '_blank', 'noopener,noreferrer');
              }}
              className="hidden lg:block px-6 py-2.5 rounded-full bg-[#111111] text-white font-serif-elegant uppercase text-sm tracking-widest hover:bg-[#333333] transition-colors"
            >
              Book Session
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#111111]/5 text-[#111111]"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-[#111111] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-[#111111] transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-[#111111] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-3xl font-script text-[#111111]">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-[#111111]/10 flex items-center justify-center text-[#111111]"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navigationItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left"
                >
                  <span className="text-4xl font-serif-elegant text-[#111111] uppercase tracking-widest hover:text-gray-500 transition-colors">
                    {item.name}
                  </span>
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-[#111111]/10">
              <p className="text-gray-500 text-sm font-serif-elegant uppercase tracking-widest mb-4">Let's Connect</p>
              <a href="mailto:info@arielsantos.space" className="text-xl text-[#111111] font-medium">info@arielsantos.space</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
