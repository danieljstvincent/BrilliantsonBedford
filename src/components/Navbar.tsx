import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isAboutSectionActive = () => {
    return isActive('/about-us') || isActive('/faq') || isActive('/how-we-work');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <AnimatedLogo />
          </Link>

          {/* Menu Items */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link
                to="/about-us"
                className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                  isAboutSectionActive()
                    ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                About Us
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isAboutDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {/* Dropdown Menu */}
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden">
                  <Link
                    to="/about-us"
                    className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                      isActive('/about-us')
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                    }`}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/how-we-work"
                    className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                      isActive('/how-we-work')
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                    }`}
                  >
                    How We Work
                  </Link>
                  <Link
                    to="/faq"
                    className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                      isActive('/faq')
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                    }`}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/services')
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/pricing')
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact-us"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/contact-us')
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
