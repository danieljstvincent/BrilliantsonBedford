import React, { useState, useEffect } from 'react';
import { Code, Smartphone, ShoppingBag, Globe, Search, Share2, Mail, DollarSign } from 'lucide-react';

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
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Web Design Agency & SaaS Development Studio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <div className="block mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                Get More
              </span>
            </div>
            <div className="relative inline-block min-h-[1.2em]">
              <span className="word-rotate bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                <span>Customers</span>
                <span>Sales</span>
                <span>Revenue</span>
              </span>
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Turn online browsers into in-store customers. Get more people walking through your jewelry or watch store with a website that showcases your pieces beautifully and drives real business growth.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive digital solutions for your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Website Design & Development */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Website Design & Development</h3>
              <p className="text-gray-400 text-sm">Custom websites built from scratch with modern technologies</p>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile App Development</h3>
              <p className="text-gray-400 text-sm">Native and cross-platform mobile applications</p>
            </div>
          </div>

          {/* Shopify Development */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Shopify Development</h3>
              <p className="text-gray-400 text-sm">Complete e-commerce solutions with Shopify</p>
            </div>
          </div>

          {/* WordPress Development */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">WordPress Development</h3>
              <p className="text-gray-400 text-sm">Custom WordPress themes and plugin development</p>
            </div>
          </div>

          {/* Search Engine Optimization */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Search Engine Optimization</h3>
              <p className="text-gray-400 text-sm">Boost your online visibility and organic traffic</p>
            </div>
          </div>

          {/* Social Media Marketing */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Social Media Marketing</h3>
              <p className="text-gray-400 text-sm">Engage your audience across social platforms</p>
            </div>
          </div>

          {/* Email Marketing */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Marketing</h3>
              <p className="text-gray-400 text-sm">Targeted campaigns that convert subscribers</p>
            </div>
          </div>

          {/* Paid Advertisement (PPC) */}
          <div className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Paid Advertisement (PPC)</h3>
              <p className="text-gray-400 text-sm">Strategic ad campaigns for maximum ROI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-3">Luxury Design</h3>
            <p className="text-gray-300">
              Elegant, sophisticated websites that showcase your jewelry and watches like works of art.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-3">E-Commerce Ready</h3>
            <p className="text-gray-300">
              Start selling online with secure payments, inventory management, and seamless checkout.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
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

