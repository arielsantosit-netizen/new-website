'use client';

import React, { useState } from 'react';
import Navigation from './Navigation';
import { trackFormSubmission, trackButtonClick } from '@/lib/analytics';

const LaunchboxWaitlist: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      setSubmitError('Please fill in your name and email.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const webhookData = {
      name,
      email,
      phone: phone || 'N/A',
      subscribeNewsletter: subscribeNewsletter,
      timestamp: new Date().toISOString()
    };

    try {
      console.log('[LaunchboxWaitlist] Form submission started');
      console.log('[LaunchboxWaitlist] Sending webhook data:', webhookData);
      
      const response = await fetch('/api/waitlist-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      
      console.log('[LaunchboxWaitlist] API response status:', response.status);

      // Check if response is actually JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned an invalid response. Please try again.');
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to join waitlist. Please try again.' }));
        throw new Error(errorData.error || 'Failed to join waitlist. Please try again.');
      }

      console.log('[LaunchboxWaitlist] Webhook success');
      
      // Track waitlist signup
      console.log('[LaunchboxWaitlist] Tracking analytics event');
      trackFormSubmission('waitlist_signup', {
        with_newsletter: subscribeNewsletter,
        page_location: '/waitlist',
      });

      // If newsletter checkbox is checked, also submit to newsletter webhook
      if (subscribeNewsletter) {
        console.log('[LaunchboxWaitlist] Also sending to newsletter webhook');
        try {
          const newsletterResponse = await fetch('/api/newsletter-signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookData),
          });
          console.log('[LaunchboxWaitlist] Newsletter webhook response:', newsletterResponse.status);
          // Note: We don't fail the whole submission if newsletter signup fails
        } catch (newsletterError) {
          console.error('[LaunchboxWaitlist] Newsletter signup error:', newsletterError);
          // Continue anyway - waitlist signup was successful
        }
      }

      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setSubscribeNewsletter(false);

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <section className="min-h-screen pt-[65px] px-6 py-12 lg:py-20 bg-[#fdfdfd] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink-50/60 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-orange-50/60 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif-elegant text-[#111] mb-6">
              Join the <span className="text-gradient-elegant italic">Waitlist</span>
            </h1>
            <p className="text-xl text-gray-600 font-serif-elegant max-w-2xl mx-auto leading-relaxed">
              Be first to get invites, resources, and early builds.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif-elegant text-[#111] mb-2">Your Details</h2>
                
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest font-serif-elegant text-gray-500 mb-2">
                    Name <span className="text-pink-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-gray-50/50 text-[#111] rounded-xl border border-gray-200 h-14 px-5 focus:outline-none focus:ring-1 focus:ring-[#111] focus:border-[#111] transition-all font-serif-elegant"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest font-serif-elegant text-gray-500 mb-2">
                    Email <span className="text-pink-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-50/50 text-[#111] rounded-xl border border-gray-200 h-14 px-5 focus:outline-none focus:ring-1 focus:ring-[#111] focus:border-[#111] transition-all font-serif-elegant"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-serif-elegant text-gray-500 mb-2">
                    Phone <span className="text-gray-400 text-[10px] ml-1">(OPTIONAL)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50/50 text-[#111] rounded-xl border border-gray-200 h-14 px-5 focus:outline-none focus:ring-1 focus:ring-[#111] focus:border-[#111] transition-all font-serif-elegant"
                    placeholder="(555) 555-5555"
                  />
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="newsletter-waitlist"
                    checked={subscribeNewsletter}
                    onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                    className="mt-1 w-5 h-5 text-[#111] bg-white border-gray-300 rounded focus:ring-2 focus:ring-[#111] cursor-pointer"
                  />
                  <label htmlFor="newsletter-waitlist" className="text-gray-600 cursor-pointer font-serif-elegant text-sm tracking-wide">
                    I&apos;d also like to sign up for the newsletter
                  </label>
                </div>
              </div>

              {/* Success/Error Messages */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <p className="text-green-700 font-serif-elegant text-sm font-medium">
                    ✓ Successfully joined the waitlist! You&apos;ll receive updates about Launchbox launches and early access.
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

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {
                    if (!isSubmitting) {
                      trackButtonClick('join_waitlist', 'waitlist_page');
                    }
                  }}
                  className="w-full h-14 bg-[#111] text-white uppercase tracking-widest text-sm font-serif-elegant rounded-full shadow-md hover:shadow-lg hover:bg-[#333] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining Waitlist...' : 'Join the Waitlist'}
                </button>
                <p className="text-xs text-gray-500 font-serif-elegant text-center mt-6">
                  By joining, you&apos;ll be notified when Launchbox launches and get early access to resources.
                  <br />
                  You agree to our{' '}
                  <a href="/privacy" className="text-gray-800 hover:text-[#111] underline transition-colors" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                  {' '}and consent to being contacted.
                </p>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center text-gray-500 font-serif-elegant">
            <p className="mb-2 uppercase tracking-widest text-xs">Questions? Email me at</p>
            <a 
              href="mailto:contact@arielsantos.space" 
              className="text-[#111] hover:text-orange-500 underline transition-colors text-lg"
            >
              contact@arielsantos.space
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaunchboxWaitlist;;

