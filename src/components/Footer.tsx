import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  return (
    <footer className="backdrop-blur-md border-t border-white/10" style={{ backgroundColor: '#181736' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <AnimatedLogo />
            <p className="text-gray-400 text-sm mt-4 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
              Web design agency specializing in building SaaS products and custom digital solutions in New York City.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/how-we-work"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:212-920-1761" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  212-920-1761
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:daniel@brilliantsonbedford.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  daniel@brilliantsonbedford.com
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">
                  New York City
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-semibold">Monday - Friday</p>
                  <p className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-semibold">9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left side - Legal Links */}
            <div className="flex items-center gap-2 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Terms of Use
              </Link>
            </div>

            {/* Right side - Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Brilliants on Bedford. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
