'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { trackButtonClick } from '@/lib/analytics';

interface NavigationProps {
  activeSection?: string;
}

const Navigation = ({ activeSection = 'hero' }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#who-this-is-for' },
    { name: 'Services', href: '#work' },
    { name: 'Contact', href: '#consulting' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);

      const navItem = navigationItems.find(item => item.href === href);
      trackButtonClick('nav_click', navItem?.name || targetId);

      if (pathname !== '/') {
        router.push(`/#${targetId}`);
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = targetId === 'hero' ? 0 : elementPosition - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = targetId === 'hero' ? 0 : elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#212121]/98 backdrop-blur-sm border-b border-[#FF9800]/30 h-16">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img src="/ariel-santos-logo.jpg" alt="Ariel Santos" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white uppercase" style={{ fontFamily: 'var(--font-poppins)' }}>
                Ariel Santos TechMentor
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`font-semibold uppercase text-sm transition-colors duration-200 ${isActive
                      ? 'text-[#FF9800] border-b-2 border-[#FF9800]'
                      : 'text-white hover:text-[#FF9800]'
                      }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-[#FF9800] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu} />
          <div className="fixed top-0 right-0 h-full w-80 bg-[#212121]/98 backdrop-blur-sm border-l border-[#FF9800]/30">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-[#FF9800]/30">
                <button onClick={() => handleNavClick('#hero')} className="flex items-center gap-3">
                  <img src="/ariel-santos-logo.jpg" alt="Ariel Santos" className="h-8 w-auto" />
                  <span className="text-lg font-bold text-white uppercase" style={{ fontFamily: 'var(--font-poppins)' }}>
                    TechMentor
                  </span>
                </button>
                <button onClick={toggleMobileMenu} className="text-white hover:text-[#FF9800]">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  {navigationItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-lg font-bold uppercase transition-colors duration-200 ${isActive
                          ? 'text-black bg-[#FF9800]'
                          : 'text-white hover:text-[#FF9800] hover:bg-white/5'
                          }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </nav>
              <div className="p-6 border-t border-[#FF9800]/30">
                <p className="text-sm text-gray-400 uppercase font-semibold">Professional IT Solutions</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
