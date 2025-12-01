'use client';

import React, { useState, useEffect, useRef } from 'react';

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "Cloud Architecture & Mentoring",
      tag: "Build & Learn Infrastructure",
      description: "Designing scalable cloud solutions while training your team to manage and optimize them independently.",
      details: [
        "Cloud strategy workshops",
        "Infrastructure-as-Code training",
        "Secure cloud storage solutions",
        "Cloud security best practices coaching"
      ],
      benefits: "Reduce infrastructure costs while empowering your team with the skills to manage cloud environments confidently.",
      tech: "AWS • Azure • Google Cloud • Cloud Security Tools"
    },
    {
      title: "IT Operations & Team Training",
      tag: "Empowering Your Team",
      description: "Moving beyond break/fix support to empower your internal team with the skills to maintain operational excellence.",
      features: [
        "Help desk workflow training",
        "System administration coaching",
        "IT documentation workshops",
        "Proactive maintenance strategies"
      ],
      impact: "Transform your IT from a cost center to a strategic asset by building internal capabilities and reducing reliance on external support.",
      tech: "Remote Support Tools • Monitoring Systems • Ticketing Platforms"
    },
    {
      title: "Network Strategy & Education",
      tag: "Connectivity & Knowledge",
      description: "Building robust networks and educating your staff on connectivity fundamentals and troubleshooting.",
      details: [
        "Network design sessions",
        "WiFi optimization training",
        "Connectivity troubleshooting guides",
        "Network security fundamentals"
      ],
      benefits: "Stay connected with reliable networks and a team that understands how to keep them running efficiently.",
      tech: "Cisco • Ubiquiti • Enterprise WiFi • VPN Solutions"
    },
    {
      title: "Digital Presence Coaching",
      tag: "Own Your Web Strategy",
      description: "Building your digital presence while teaching you how to maintain, update, and grow your website.",
      features: [
        "Custom website development",
        "Content management training",
        "SEO fundamentals workshops",
        "Analytics interpretation coaching"
      ],
      impact: "Take control of your digital narrative with a professional website and the knowledge to manage it effectively.",
      tech: "React • Next.js • WordPress • Modern Web Technologies",
      cta: "Get Started"
    },
    {
      title: "Strategic Tech Audit",
      tag: "Educational Assessment",
      description: "A deep-dive analysis of your systems accompanied by educational sessions on identified risks and opportunities.",
      learnings: [
        "Comprehensive system reviews",
        "Risk explanation sessions",
        "Strategic roadmap planning",
        "Security vulnerability education"
      ],
      benefits: "Understand your IT infrastructure inside and out. Know exactly where to invest for maximum impact.",
      tech: "Assessment Tools • Security Scanners • Performance Monitors"
    },
    {
      title: "Operational Excellence Workshops",
      tag: "Resilience Training",
      description: "Training your organization to build and maintain resilient, fail-safe systems that withstand challenges.",
      details: [
        "Disaster recovery drills",
        "Business continuity workshops",
        "System hardening training",
        "Performance optimization coaching"
      ],
      impact: "Build a resilient organization that can weather any storm through preparation, training, and robust systems.",
      tech: "Monitoring Tools • Backup Solutions • High Availability Systems"
    }
  ];

  // Detect which card is in the center of the viewport (desktop only)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    const detectCenterCard = () => {
      if (!scrollContainerRef.current) return;

      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;
      const threshold = 100;

      let closestIndex = 0;
      let closestDistance = Infinity;
      let cardInCenterZone = false;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenterY - centerY);

        if (distance < threshold) {
          cardInCenterZone = true;
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index % projects.length;
          }
        } else if (!cardInCenterZone && distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index % projects.length;
        }
      });

      if (cardInCenterZone && closestIndex !== activeIndex) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex(closestIndex);
          setIsTransitioning(false);
        }, 400);
      }
    };

    const interval = setInterval(detectCenterCard, 300);
    return () => clearInterval(interval);
  }, [activeIndex, projects.length]);

  // Auto-cycle through projects on mobile every 5 seconds
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setIsTransitioning(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, projects.length]);

  const activeProject = projects[activeIndex];

  return (
    <section id="work" className="h-screen bg-black overflow-hidden lg:relative snap-start">
      <div className="h-full">
        {/* Main Content Area */}
        <div className="lg:flex h-full">
          <div className="max-w-7xl w-full mx-auto px-6 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 h-full lg:items-start">
              {/* Left Side - Active Project Details */}
              <div className="flex flex-col items-start justify-start h-full overflow-y-auto scrollbar-hide lg:pl-0 py-8">
                {/* Static Title Section */}
                <div className="mb-6 max-w-2xl w-full">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                    IT Services & Solutions
                  </h2>
                  <p className="text-gray-300 text-lg max-w-3xl">
                    Comprehensive IT solutions tailored to unlock your business potential and keep you running efficiently.
                  </p>
                </div>

                {/* Dynamic Project Content */}
                <div
                  className={`space-y-6 max-w-2xl w-full transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                  <div>
                    <span className="text-[#FF9800] text-sm font-semibold">{activeProject.tag}</span>
                    <h3 className="text-2xl font-bold text-white mb-2 mt-1">
                      {activeProject.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {activeProject.description}
                  </p>

                  {activeProject.details && Array.isArray(activeProject.details) && (
                    <div className="space-y-3">
                      {activeProject.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 flex items-start gap-3">
                          <span className="text-[#FF9800]">•</span>
                          <span>{detail}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  {activeProject.features && (
                    <div className="space-y-3">
                      <p className="text-white font-semibold">What I built:</p>
                      {activeProject.features.map((feature, idx) => (
                        <p key={idx} className="text-gray-300 flex items-start gap-3">
                          <span className="text-[#FF9800]">•</span>
                          <span>{feature}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  {activeProject.learnings && (
                    <div className="space-y-3">
                      <p className="text-white font-semibold">Key Services:</p>
                      {activeProject.learnings.map((learning, idx) => (
                        <p key={idx} className="text-gray-300 flex items-start gap-3">
                          <span className="text-[#FF9800]">•</span>
                          <span>{learning}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  {activeProject.impact && (
                    <div className="border-l-4 border-[#FF9800] pl-4">
                      <p className="text-gray-300 text-sm mb-1">Impact</p>
                      <p className="text-white font-medium">{activeProject.impact}</p>
                    </div>
                  )}

                  {activeProject.details && !Array.isArray(activeProject.details) && (
                    <p className="text-gray-300">{activeProject.details}</p>
                  )}

                  {activeProject.benefits && (
                    <div className="border-l-4 border-[#FF9800] pl-4">
                      <p className="text-gray-300 text-sm mb-1">Benefits</p>
                      <p className="text-white font-medium">{activeProject.benefits}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-gray-300 mb-2">Tech Stack</p>
                    <p className="text-[#FF9800] font-medium">{activeProject.tech}</p>
                  </div>

                  {activeProject.cta && (
                    <button
                      onClick={() => {
                        const footer = document.querySelector('footer');
                        if (footer) {
                          footer.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-8 py-4 bg-gradient-to-r from-[#1A237E] to-[#0D1642] text-white font-bold rounded-xl hover:from-[#0D1642] hover:to-[#1A237E] transition-all duration-300 shadow-lg hover:shadow-[#1A237E]/50"
                    >
                      {activeProject.cta}
                    </button>
                  )}
                </div>
              </div>

              {/* Right Side - Infinite Scroll Showcase (Desktop Only) */}
              <div
                ref={scrollContainerRef}
                className="hidden lg:block relative h-full overflow-hidden px-4"
              >
                <style jsx>{`
                  @keyframes scroll-continuous {
                    0% {
                      transform: translateY(0);
                    }
                    100% {
                      transform: translateY(-50%);
                    }
                  }

                  .scroll-animation {
                    animation: scroll-continuous 50s linear infinite;
                  }

                  .scroll-animation:hover {
                    animation-play-state: paused;
                  }
                `}</style>

                <div className="scroll-animation">
                  {/* Render cards twice for seamless loop */}
                  {[...projects, ...projects].map((project, index) => {
                    const actualIndex = index % projects.length;
                    const isActive = actualIndex === activeIndex;


                    return (
                      <div
                        key={index}
                        ref={(el) => {
                          cardsRef.current[index] = el;
                        }}
                        className="mb-4 px-2 transition-all duration-700"
                      >
                        <div
                          className={`bg-transparent border rounded-xl p-6 transition-all duration-700 ${isActive
                            ? 'border-[#FF9800] opacity-100 scale-105'
                            : 'border-[#ECEFF1] opacity-50 scale-100'
                            }`}
                        >
                          <h3 className="text-xl font-semibold text-white mb-3">
                            {project.title}
                          </h3>
                          <p className="text-sm text-[#FF9800] font-medium mb-3">
                            {project.tag}
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

