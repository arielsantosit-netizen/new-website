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
    // Statis tilt or other visual effects
  }, []);

  const getActiveIndex = () => {
    if (scrollProgress <= 0.2) return 0;
    if (scrollProgress < 0.4) return 1;
    if (scrollProgress < 0.6) return 2;
    return 3;
  };

  const activeIndex = getActiveIndex();

  return (
    <section ref={sectionRef} id="image-section" className="bg-[#fdfdfd] snap-start relative" style={{ height: 'calc((100vh - 65px) * 4)' }}>
      <div className="sticky top-0 w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#fbcfe8" // soft pink
            raysSpeed={1.0}
            lightSpread={isMobile ? 0.35 : 0.8}
            rayLength={isMobile ? 3.0 : 2.0}
            fadeDistance={isMobile ? 0.4 : 1.2}
            saturation={0.5}
            followMouse={false}
            mouseInfluence={0}
            noiseAmount={0.01}
            distortion={0.02}
          />
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent to-[#fdfdfd]/80 backdrop-blur-[2px]" />
        
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
                          opacity: isActive ? 1 : 0,
                          pointerEvents: isActive ? 'auto' : 'none' as const
                        }}
                      >
                        <div className="max-w-xl text-center lg:text-left px-4 space-y-6">
                          {isActive && (
                            <>
                              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif-elegant text-[#111] mb-6 tracking-wide">
                                {approach.title}
                              </h3>
                              <p className="text-gray-600 font-serif-elegant text-lg md:text-xl leading-relaxed tracking-wide">
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
                    className="relative rounded-[2rem] overflow-hidden transition-transform duration-300 ease-out cursor-pointer shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] bg-white p-4 border border-gray-100"
                    style={{
                      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="relative rounded-[1.5rem] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-pink-50/20 to-blue-50/20 pointer-events-none z-10 mix-blend-overlay"></div>
                      <img
                        src={imagePath}
                        alt={alt}
                        className="w-full lg:w-auto h-auto object-contain relative z-0 mix-blend-multiply"
                        style={{ maxHeight: '60vh', aspectRatio: '1188 / 1485', maxWidth: '100%' }}
                      />
                    </div>
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
