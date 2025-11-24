import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo02 from '../images/logo02.png';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo02} 
              alt="Brilliants on Bedford" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Menu Items */}
          <div className="flex items-center gap-8">
            <Link
              to="/about-us"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/about-us')
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About us
            </Link>
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

