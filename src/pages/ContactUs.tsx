import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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
        />
        <div 
          className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: '2s' }}
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
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Contact US
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
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
                placeholder="Tell us about your micro-SaaS idea..."
              />
            </div>

            <button
              type="submit"
              className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Location
            </h3>
            <p className="text-gray-300 text-lg">
              Brooklyn, NY
            </p>
            <p className="text-gray-400 mt-2">
              Based in the heart of Brooklyn, serving clients worldwide
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Response Time
            </h3>
            <p className="text-gray-300 text-lg">
              Within 24 Hours
            </p>
            <p className="text-gray-400 mt-2">
              We typically respond to all inquiries within one business day
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative container mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Brilliants on Bedford, LLC
          </p>
          <p>Brooklyn, NY • Creating Micro-SaaS Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

