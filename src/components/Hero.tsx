'use client';

import React, { useRef, useEffect } from 'react';
import { trackButtonClick, trackVideoPlay } from '@/lib/analytics';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When hero section is visible, play the video
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            video.play().catch((error) => {
              console.warn('Video autoplay failed:', error);
            });
          } else {
            // Pause when not visible to save resources
            video.pause();
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '0px'
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen lg:min-h-screen flex items-center justify-center bg-black snap-start" style={{ overflow: 'hidden' }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover blur-background"
          style={{ filter: 'brightness(0.5) contrast(1.1) grayscale(20%)' }}
        >
          <source src="/website video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with orange accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FF9800]/10"></div>
      </div>

      {/* Content wrapper positioned correctly */}
      <div className="w-full relative px-6 pt-[85px] pb-24 lg:pb-32 lg:pt-60 flex items-center justify-end h-full" style={{ zIndex: 10 }}>
        {/* Content aligned to the right */}
        <div className="space-y-4 lg:space-y-6 lg:text-right max-w-2xl lg:mr-12 w-full">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4 lg:mb-6 uppercase">
            Ariel Santos
          </h1>
          <div className="h-1 w-32 bg-[#FF9800] mb-6 lg:ml-auto"></div>

          {/* Subheadline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
            TechMentor | IT Consultant & Technology Strategist
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
            Making technology, career advancement, and lifelong learning accessible to all.
            <br /><br />
            <span className="text-white font-semibold">Empowering your business with expert IT solutions</span>
          </p>

          {/* CTAs */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => {
                const work = document.getElementById('work');
                if (work) {
                  work.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-[#FF9800] text-black font-bold uppercase rounded-lg hover:bg-[#1A237E] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#FF9800]/50"
            >
              View Services
            </button>
            <button
              onClick={() => {
                trackButtonClick('contact_us', 'hero_section');
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border-2 border-[#FF9800] text-white font-bold uppercase rounded-lg hover:bg-[#FF9800] hover:text-black transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-12 left-0 right-0 flex justify-center animate-bounce" style={{ zIndex: 10 }}>
        <svg
          className="w-6 h-6 text-[#FF9800]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
