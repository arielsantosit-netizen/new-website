import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-[#FF9800] py-12">
      {/* Orange divider line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#FF9800] to-transparent mb-8"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand with Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img src="/ariel-santos-logo.jpg" alt="Ariel Santos" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-white uppercase" style={{ fontFamily: 'var(--font-poppins)' }}>
                Ariel Santos
              </span>
            </div>
            <p className="text-gray-400 text-sm font-semibold uppercase">
              TechMentor | IT Consulting & Technology Strategy
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Unlocking your business potential with customized IT strategies
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-bold uppercase text-sm mb-4 border-b border-[#FF9800] pb-2 inline-block">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2 text-gray-400 text-sm">
              <a href="#hero" className="hover:text-[#FF9800] transition-colors uppercase font-semibold">
                Home
              </a>
              <a href="#who-this-is-for" className="hover:text-[#FF9800] transition-colors uppercase font-semibold">
                About
              </a>
              <a href="#work" className="hover:text-[#FF9800] transition-colors uppercase font-semibold">
                Services
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold uppercase text-sm mb-4 border-b border-[#FF9800] pb-2 inline-block">
              Contact
            </h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>
                <a href="mailto:info@arielsantos.space" className="hover:text-[#FF9800] transition-colors">
                  info@arielsantos.space
                </a>
              </p>
              <p>
                <a href="https://arielsantos.space" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9800] transition-colors">
                  arielsantos.space
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs uppercase font-semibold">
            © {currentYear} Ariel Santos TechMentor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
