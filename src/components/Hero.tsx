'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { trackButtonClick } from '@/lib/analytics';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // JS implementation for particles and cursor logic
  useEffect(() => {
    // 1. Particles Generation
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      // Clear any existing particles
      particlesContainer.innerHTML = '';
      
      const particleCount = 20;
      for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Randomize size, position, and animation properties
        const size = Math.random() * 8 + 4; // 4px - 12px
        const left = Math.random() * 100; // 0% - 100%
        const delay = Math.random() * 5; // 0s - 5s
        const duration = Math.random() * 10 + 10; // 10s - 20s
        
        // Pick one of the iridescent colors randomly
        const colors = ['var(--color-lavender)', 'var(--color-mint)', 'var(--color-blush)', 'var(--color-lemon)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${left}%`;
        p.style.bottom = `-20px`; // start below viewport
        p.style.backgroundColor = color;
        p.style.animationDelay = `${delay}s`;
        p.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(p);
      }
    }

    // Background light rays or other static visual logic can go here
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="holo-bg relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div id="particles"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Subtle Accent Spacing */}
          <div className="mb-8 relative flex justify-center items-center w-full">
            <span className="sparkle-load text-3xl text-[var(--accent-violet)]">✦</span>
          </div>

          {/* Main Tagline */}
          <div className="mb-6 max-w-4xl">
            <h1 className="hero-subtitle font-serif-elegant text-4xl md:text-6xl lg:text-[72px] text-[#111] font-medium leading-[1.1] pointer-events-auto">
              Technology, Career Growth, and Learning — <span className="font-script bg-gradient-to-r from-[#888] to-[#111] bg-clip-text text-transparent">Made Accessible</span>
            </h1>
          </div>

          {/* Subheading / Mission */}
          <div className="mb-12 max-w-2xl">
            <p className="text-gray-500 font-serif-elegant text-lg md:text-xl lg:text-2xl leading-relaxed pointer-events-auto">
              Empowering career changers, veterans, and tech professionals through clarity, mentorship, and actionable guidance.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8 p-4 reveal-stagger visible pointer-events-auto">
            <button
              onClick={() => {
                const work = document.getElementById('work');
                work?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-shimmer px-10 py-4 bg-[var(--color-text)] text-white font-serif-elegant tracking-widest uppercase rounded-full transition-all duration-500 shadow-xl"
            >
              Explore Services
            </button>
            <button
              onClick={() => {
                trackButtonClick('contact_us', 'hero_section');
                document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-shimmer px-10 py-4 border border-[var(--color-text)] text-[var(--color-text)] font-serif-elegant tracking-widest uppercase rounded-full backdrop-blur-md transition-all duration-500 bg-white/20"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-text)] to-transparent"></div>
        <span className="text-[10px] text-[var(--color-text)] uppercase tracking-widest font-serif-elegant font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;

