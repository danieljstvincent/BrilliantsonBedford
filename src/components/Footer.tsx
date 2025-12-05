import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/how-we-work', label: 'How We Work' },
    { path: '/faq', label: 'FAQ' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact-us', label: 'Contact Us' }
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-white mb-4">Quick links</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
