import React, { useState, useEffect } from 'react';
import { Rocket, Zap, ArrowRight, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xovkykno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });
      if (response.ok) {
        alert("Thanks! We'll be in touch soon 🚀");
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        alert('Sorry, there was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('Sorry, there was a problem submitting your form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, animationDelay: '2s' }}
        />
        <div 
          className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Web Design Agency & SaaS Development Studio
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Brilliants on Bedford
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Specializing in stunning websites and e-commerce solutions for jewelry stores, watch retailers, and luxury brands.
            Transform your business with a professional online presence.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">Built with cutting-edge technologies</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* React */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2" fill="url(#react-gradient)"/>
                <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#react-gradient)" strokeWidth="1" fill="none"/>
                <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#react-gradient)" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#react-gradient)" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
                <defs>
                  <linearGradient id="react-gradient" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0%" stopColor="#a855f7"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="font-bold text-lg">React</h3>
            </div>
          </div>

          {/* Django */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3h4v18H7c-1.5 0-2.5-1-2.5-2.5V5.5C4.5 4 5.5 3 7 3z" fill="url(#django-gradient)"/>
                <rect x="8" y="5" width="2" height="8" rx="1" fill="white"/>
                <circle cx="9" cy="16" r="1.5" fill="white"/>
                <path d="M13 3h4c1.5 0 2.5 1 2.5 2.5v13c0 1.5-1 2.5-2.5 2.5h-4V3z" fill="url(#django-gradient)"/>
                <path d="M15 5c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-1.1.9-2 2-2z" fill="white"/>
                <circle cx="15" cy="16" r="1.5" fill="white"/>
                <defs>
                  <linearGradient id="django-gradient" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="font-bold text-lg">Django</h3>
            </div>
          </div>

          {/* TypeScript */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="2" fill="url(#typescript-gradient)"/>
                <path d="M11 8H9v8h2v-3h2c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-2zm0 3v-1h2v1h-2zM17 8h-2v1h2v1h-2v1h2v1h-2v4h2c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" fill="white"/>
                <defs>
                  <linearGradient id="typescript-gradient" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0%" stopColor="#06b6d4"/>
                    <stop offset="100%" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="font-bold text-lg">TypeScript</h3>
            </div>
          </div>

          {/* Python */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.5 2 8 2.3 8 4v2h4v.5H6.5C4.5 6.5 3 7.8 3 10v4c0 2.2 1.5 3.5 3.5 3.5H8v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.7 0 3-.8 3-2.5V4c0-1.7-1.3-2-4-2h-3.5zm-1.5 1.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="url(#python-gradient-1)"/>
                <path d="M12 22c3.5 0 4-.3 4-2v-2h-4v-.5h5.5c2 0 3.5-1.3 3.5-3.5v-4c0-2.2-1.5-3.5-3.5-3.5H16v2.5c0 2-1.5 3.5-3.5 3.5h-5c-1.7 0-3 .8-3 2.5v6c0 1.7 1.3 2 4 2h3.5zm1.5-1.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="url(#python-gradient-2)"/>
                <defs>
                  <linearGradient id="python-gradient-1" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0%" stopColor="#a855f7"/>
                    <stop offset="100%" stopColor="#ec4899"/>
                  </linearGradient>
                  <linearGradient id="python-gradient-2" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="font-bold text-lg">Python</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <Sparkles className="w-12 h-12 mb-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">Luxury Design</h3>
            <p className="text-gray-300">
              Elegant, sophisticated websites that showcase your jewelry and watches like works of art.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <Rocket className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-blue-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">E-Commerce Ready</h3>
            <p className="text-gray-300">
              Start selling online with secure payments, inventory management, and seamless checkout.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
            <Zap className="w-12 h-12 mb-4 text-pink-400 group-hover:text-purple-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">Fast & Affordable</h3>
            <p className="text-gray-300">
              Get your professional website or online store launched in weeks, not months.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Ready to Build Something Brilliant?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to attract more customers and grow your jewelry or watch business online?
          </p>
          <button 
            onClick={scrollToContact}
            className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            Get Started Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="relative container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500 resize-none"
                placeholder="Tell us about your jewelry/watch store and what you need..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

