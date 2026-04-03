'use client';

import React from 'react';
import { trackFormSubmission, trackButtonClick } from '@/lib/analytics';

const Launchbox: React.FC = () => {
  const [activeCard, setActiveCard] = React.useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const lastProgressRef = React.useRef(0);

  const handleWaitlist = () => {
    // Track button click
    trackButtonClick('join_waitlist', 'launchbox_card');
    // Navigate to waitlist signup page
    window.location.href = '/waitlist';
  };

  const handleClass = () => {
    // Track button click
    trackButtonClick('join_free_class', 'launchbox_card');
    window.location.href = '/free-class/1';
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight - windowHeight;
      
      // Calculate scroll progress: 0 to 1 through the section
      const progress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
      // Note: scrollProgress is tracked but used via activeCard state instead

      // Determine which card should be expanded based on scroll progress
      // Use hysteresis: different thresholds for scrolling up vs down to prevent rapid switching
      const scrollingDown = progress > lastProgressRef.current;
      lastProgressRef.current = progress;

      let newCard: number;
      
      // Check if mobile for slower scrolling
      const isMobile = window.innerWidth < 1024;
      
      if (scrollingDown) {
        // Scrolling down: higher thresholds to prevent premature switching
        if (isMobile) {
          // Mobile: much slower progression
          if (progress < 0.6) {
            newCard = 0;  // First 60% = card 0 (hold longer)
          } else if (progress < 0.9) {
            newCard = 1;  // Next 30% = card 1 (hold longer)
          } else {
            newCard = 2; // Final 10% = card 2 (hold longer)
          }
        } else {
          // Desktop: original thresholds
          if (progress < 0.5) {
            newCard = 0;  // First 50% = card 0 (hold)
          } else if (progress < 0.85) {
            newCard = 1;  // Next 35% = card 1 (hold)
          } else {
            newCard = 2; // Final 15% = card 2 (hold)
          }
        }
      } else {
        // Scrolling up: lower thresholds for easier back navigation
        if (isMobile) {
          // Mobile: slower back navigation too
          if (progress < 0.4) {
            newCard = 0;
          } else if (progress < 0.8) {
            newCard = 1;
          } else {
            newCard = 2;
          }
        } else {
          // Desktop: original thresholds
          if (progress < 0.35) {
            newCard = 0;
          } else if (progress < 0.75) {
            newCard = 1;
          } else {
            newCard = 2;
          }
        }
      }

      // Only update if card actually changed
      if (newCard !== activeCard) {
        setActiveCard(newCard);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCard]);

  // Determine which card should be expanded based on scroll progress
  const getActiveCard = () => activeCard;

  return (
    <section 
      ref={sectionRef}
      id="launchbox"
      className="bg-[#fcfcfc] snap-start relative overflow-hidden"
      style={{ height: 'calc(100vh * 3)' }}
      data-snap-section
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-pink-50/50 to-orange-50/50 blur-[150px] rounded-full pointer-events-none" />
      {/* Sticky Container - Stays in place while cards expand/collapse */}
      <div className="sticky w-full flex items-center px-6 relative z-10" style={{ height: 'calc(100vh - 65px)', top: '65px' }}>
        <div className="max-w-7xl mx-auto w-full h-full flex items-center">
          <div className="w-full h-full rounded-3xl overflow-hidden border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col bg-white">
            <ScrollableHighlights onWaitlist={handleWaitlist} onClassInvite={handleClass} activeCard={getActiveCard()} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal component with 3 equal subsections
interface ScrollableHighlightsProps {
  onWaitlist: () => void;
  onClassInvite: () => void;
  activeCard?: number;
}

const ScrollableHighlights: React.FC<ScrollableHighlightsProps> = ({ onWaitlist, onClassInvite, activeCard = 0 }) => {
  const [nlName, setNlName] = React.useState('');
  const [nlEmail, setNlEmail] = React.useState('');
  const [nlPhone, setNlPhone] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [rocketFrame, setRocketFrame] = React.useState<0 | 1>(0);
  // Toggle rocket frame continuously (only between rocket and rocket2, box stays static)
  React.useEffect(() => {
    const id = setInterval(() => setRocketFrame((f) => (f === 0 ? 1 : 0)), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Section 1: Launchbox Waitlist */}
      <div
        className={`${activeCard === 0 ? 'flex-1' : 'h-28'} bg-white overflow-hidden transition-all duration-700 ease-in-out cursor-pointer border-b border-gray-100`}
      >
        <div className={`h-full p-6 lg:p-10 flex items-center ${activeCard !== 0 ? 'justify-between' : ''}`}>
          <div className="w-full max-w-7xl mx-auto">
            {activeCard === 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-serif-elegant text-[#111] mb-4">Join the Launchbox Waitlist</h3>
                  <p className="text-gray-600 mb-6 font-serif-elegant text-lg">Be first to get invites, resources, and early builds.</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); onWaitlist(); }}
                    className="inline-flex items-center gap-2 px-8 py-4 text-white font-serif-elegant text-sm uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    style={{ backgroundColor: '#111' }}
                  >
                    Join the Waitlist
                  </button>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative w-44 h-44 md:w-56 md:h-56">
                    <img
                      src="/box.png"
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain mix-blend-multiply opacity-80"
                    />
                    <img
                      src={rocketFrame === 0 ? '/rocket.png' : '/rocket2.png'}
                      alt="Launchbox"
                      className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(255,138,0,0.15)]"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-serif-elegant text-gray-400">Join the Launchbox Waitlist</h3>
                <span className="text-gray-300">→</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 2: Free AI App Building Class */}
      <div
        className={`${activeCard === 1 ? 'flex-1' : 'h-28'} bg-gray-50/50 overflow-hidden transition-all duration-700 ease-in-out cursor-pointer p-6 lg:p-10 flex items-center border-b border-gray-100`}
      >
        <div className="w-full max-w-7xl mx-auto">
          {activeCard === 1 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: Title + Description */}
              <div>
                <h3 className="text-3xl md:text-5xl font-serif-elegant text-[#111] mb-4">Free AI App Building Class</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-serif-elegant">Live session on shipping your first working AI app. <span className="italic font-medium">Free • 1 hour.</span></p>
              </div>

              {/* Right: Dates */}
              <div className="w-full">
                <p className="text-sm uppercase tracking-widest text-[#111] mb-4 font-serif-elegant font-medium">Upcoming sessions</p>
                <div className="space-y-3">
                  <div onClick={(e) => { e.stopPropagation(); onClassInvite(); }} className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:border-gray-200 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div>
                    <p className="text-[#111] font-serif-elegant font-medium text-lg">Thursday, Nov 13</p>
                    <p className="text-sm text-gray-500 font-serif-elegant tracking-wide">12:00 PM EST</p>
                  </div>
                </div>
                <div onClick={(e) => { e.stopPropagation(); onClassInvite(); }} className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:border-gray-200 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div>
                    <p className="text-[#111] font-serif-elegant font-medium text-lg">Saturday, Nov 15</p>
                    <p className="text-sm text-gray-500 font-serif-elegant tracking-wide">12:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            ) : (
              <div className="flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-serif-elegant text-gray-400">Free AI App Building Class</h3>
                <span className="text-gray-300">→</span>
              </div>
            )}
        </div>
      </div>

      {/* Section 3: Ian's AI Newsletter */}
      <div
        className={`${activeCard === 2 ? 'flex-1 overflow-y-auto' : 'h-28'} bg-white overflow-hidden transition-all duration-700 ease-in-out cursor-pointer p-4 sm:p-6 lg:p-10 flex ${activeCard === 2 ? 'items-start lg:items-center' : 'items-center'} ${activeCard === 2 ? 'min-h-0' : ''}`}
      >
        <div className="w-full max-w-7xl mx-auto">
          {activeCard === 2 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:items-center w-full h-full min-h-0">
              {/* Left: Title + Content */}
              <div className="min-w-0">
                <h3 className="text-3xl md:text-5xl font-serif-elegant text-[#111] mb-4">Ariel's AI Newsletter</h3>
              <p className="text-gray-600 font-serif-elegant text-lg leading-relaxed mb-4">No fluff. Practical tips, small wins, and build-in-public notes—sent occasionally when there's something worth your time.</p>
              <p className="text-sm font-serif-elegant italic text-gray-400">You can unsubscribe anytime.</p>
            </div>

            {/* Right: Form */}
            <div className="w-full min-w-0">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  if (!nlName || !nlEmail) {
                    setSubmitError('Please fill in your name and email.');
                    return;
                  }

                  setIsSubmitting(true);
                  setSubmitError(null);

                  const webhookData = {
                    name: nlName,
                    email: nlEmail,
                    phone: nlPhone || 'N/A',
                    timestamp: new Date().toISOString()
                  };

                  try {
                    console.log('[Launchbox:Newsletter] Form submission started');
                    console.log('[Launchbox:Newsletter] Sending webhook data:', webhookData);
                    
                    const response = await fetch('/api/newsletter-signup', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(webhookData),
                    });
                    
                    console.log('[Launchbox:Newsletter] API response status:', response.status);

                    // Check if response is actually JSON
                    const contentType = response.headers.get('content-type');
                    if (!contentType || !contentType.includes('application/json')) {
                      throw new Error('Server returned an invalid response. Please try again.');
                    }

                    if (!response.ok) {
                      const errorData = await response.json().catch(() => ({ error: 'Failed to subscribe. Please try again.' }));
                      throw new Error(errorData.error || 'Failed to subscribe. Please try again.');
                    }

                    console.log('[Launchbox:Newsletter] Webhook success');
                    
                    // Track newsletter signup from Launchbox card
                    console.log('[Launchbox:Newsletter] Tracking analytics event');
                    trackFormSubmission('newsletter_signup', {
                      page_location: '/',
                      source: 'launchbox_card',
                    });

                    setSubmitSuccess(true);
                    setNlName('');
                    setNlEmail('');
                    setNlPhone('');

                    setTimeout(() => {
                      setSubmitSuccess(false);
                    }, 5000);
                  } catch (error) {
                    setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="rounded-3xl border border-gray-100 bg-gray-50/80 px-4 sm:px-8 py-6 sm:py-8 space-y-4 shadow-sm"
              >
                <div>
                  <label className="block text-xs font-serif-elegant uppercase tracking-widest text-gray-500 mb-2" htmlFor="nl-name">Your name</label>
                  <input
                    id="nl-name"
                    type="text"
                    value={nlName}
                    onChange={(e) => setNlName(e.target.value)}
                    required
                    className="w-full bg-white text-[#111] rounded-xl border border-gray-200 h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#111] focus:border-[#111] transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-serif-elegant uppercase tracking-widest text-gray-500 mb-2" htmlFor="nl-email">Email</label>
                  <input
                    id="nl-email"
                    type="email"
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    required
                    className="w-full bg-white text-[#111] rounded-xl border border-gray-200 h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#111] focus:border-[#111] transition-all"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-serif-elegant uppercase tracking-widest text-gray-500 mb-2" htmlFor="nl-phone">Phone (optional)</label>
                  <input
                    id="nl-phone"
                    type="tel"
                    value={nlPhone}
                    onChange={(e) => setNlPhone(e.target.value)}
                    className="w-full bg-white text-[#111] rounded-xl border border-gray-200 h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#111] focus:border-[#111] transition-all"
                    placeholder="(555) 555-5555"
                  />
                </div>

                {/* Success/Error Messages */}
                {submitSuccess && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                    <p className="text-green-700 font-serif-elegant text-sm font-medium">
                      ✓ Successfully subscribed! Check your email for confirmation.
                    </p>
                  </div>
                )}

                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-red-600 font-serif-elegant text-sm font-medium">
                      {submitError}
                    </p>
                  </div>
                )}

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    onClick={() => {
                      if (!isSubmitting) {
                        trackButtonClick('subscribe_newsletter', 'launchbox_card');
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 sm:px-8 bg-[#111] text-white text-sm uppercase tracking-widest font-serif-elegant rounded-full shadow hover:shadow-lg hover:bg-[#333] transition-all w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                  <p className="text-xs text-gray-400 text-center md:text-left font-serif-elegant mt-4">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-gray-600 hover:text-[#111] underline transition-colors" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          ) : (
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-serif-elegant text-gray-400">Ariel's AI Newsletter</h3>
              <span className="text-gray-300">→</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Launchbox;
