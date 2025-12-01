'use client';

import React, { useRef, useEffect, useState } from 'react';
import LightRays from './LightRays';

interface ImageSectionProps {
  imagePath?: string;
  alt?: string;
}

const approaches = [
  {
    title: 'Mission-Critical Mindset',
    description: "Military-trained precision meets IT expertise. Every system I build is designed with the same discipline and attention to detail that kept mission-critical operations running in the Air Force and Navy."
  },
  {
    title: 'Reliable Infrastructure',
    description: 'Your business needs technology that works when you need it. I build and maintain robust IT systems with proven reliability, ensuring your operations run smoothly without interruption.'
  },
  {
    title: 'Tailored Solutions',
    description: 'No cookie-cutter approaches. Whether it\'s cloud migration, network architecture, or web development, every solution is customized to fit your unique business needs and goals.'
  },
  {
    title: 'Empowering Growth',
    description: 'Technology should enable your success, not complicate it. I provide the expertise, training, and ongoing support to help your team leverage IT as a strategic advantage for sustainable growth.'
  }
];

const ImageSection: React.FC<ImageSectionProps> = ({
  imagePath = '/Collage Photo.jpg',
  alt = 'Ariel Santos TechMentor Professional'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(800);
  const [tilt, setTilt] = useState({ x: -5, y: 8 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSectionHeight(window.innerHeight - 65);
      setIsMobile(window.innerWidth < 1024);
    }

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
      setScrollProgress(progress);
    };

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setSectionHeight(window.innerHeight - 65);
        setIsMobile(window.innerWidth < 1024);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const tiltX = (e.clientY - centerY) / 10;
      const tiltY = (centerX - e.clientX) / 10;
      setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
      setTilt({ x: -5, y: 8 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const getActiveIndex = () => {
    if (scrollProgress <= 0.2) return 0;
    if (scrollProgress < 0.4) return 1;
    if (scrollProgress < 0.6) return 2;
    return 3;
  };

  const activeIndex = getActiveIndex();

  return (
    <section ref={sectionRef} id="image-section" className="bg-black snap-start relative" style={{ height: 'calc((100vh - 65px) * 4)' }}>
      <div className="sticky top-0 w-full h-screen relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LightRays
            raysOrigin="top-center"
            raysColor="#FF9800"
            raysSpeed={1.5}
            lightSpread={isMobile ? 0.25 : 0.6}
            rayLength={isMobile ? 5.0 : 1.5}
            fadeDistance={isMobile ? 0.2 : 1.0}
            saturation={isMobile ? 2.0 : 1.0}
            followMouse={!isMobile}
            mouseInfluence={0.1}
            noiseAmount={isMobile ? 0.02 : 0.1}
            distortion={0.05}
          />
        </div>
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center pt-[65px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-full">
              <div className="relative h-full flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 65px)' }}>
                <div className="relative w-full" style={{ height: 'calc((100vh - 65px) * 4)' }}>
                  {approaches.map((approach, index) => {
                    const isActive = index === activeIndex;
                    const offset = (index - activeIndex) * sectionHeight;
                    return (
                      <div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                        style={{
                          transform: `translateY(${offset}px)`,
                          opacity: isActive ? 1 : 0.3,
                          pointerEvents: isActive ? 'auto' : 'none' as const
                        }}
                      >
                        <div className="max-w-xl text-center px-4 space-y-6">
                          {isActive && (
                            <>
                              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 uppercase">
                                {approach.title}
                              </h3>
                              <p className="text-gray-300 text-lg leading-relaxed">
                                {approach.description}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="hidden lg:flex relative w-full justify-end items-center h-full">
                <div className="relative w-full lg:w-auto lg:max-w-xl">
                  <div
                    ref={cardRef}
                    className="relative rounded-2xl overflow-hidden transition-transform duration-300 ease-out cursor-pointer"
                    style={{
                      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FF9800]/50 via-[#FF9800]/30 to-[#FF9800]/50 rounded-2xl blur-xl opacity-50 transition-opacity duration-300 hover:opacity-75"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-[#FF9800]/30 bg-gradient-to-br from-gray-900/40 via-black/60 to-black backdrop-blur-xl shadow-2xl hover:border-[#FF9800]/50 transition-all duration-300"
                      style={{ boxShadow: '0 25px 50px -12px rgba(255, 152, 0, 0.25), 0 0 100px -20px rgba(255, 152, 0, 0.15)' }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10"></div>
                      <img
                        src={imagePath}
                        alt={alt}
                        className="w-full lg:w-auto h-auto object-contain relative z-0"
                        style={{ maxHeight: '60vh', aspectRatio: '1188 / 1485', maxWidth: '100%' }}
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#FF9800]/20 blur-2xl rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
