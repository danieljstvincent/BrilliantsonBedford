import React, { useState, useEffect } from 'react';
import { Code2, Rocket, Zap, ArrowRight, Sparkles } from 'lucide-react';

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
              Brooklyn's Premier Micro-SaaS Studio
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Brilliants on Bedford
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            We craft lightning-fast micro-SaaS companies that solve real problems. 
            From concept to production in record time.
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
          {['React', 'Django', 'TypeScript', 'Python'].map((tech) => (
            <div 
              key={tech}
              className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="text-center">
                <Code2 className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                <h3 className="font-bold text-lg">{tech}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <Rocket className="w-12 h-12 mb-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">Rapid Development</h3>
            <p className="text-gray-300">
              Launch your micro-SaaS in weeks, not months. We move fast without breaking things.
            </p>
          </div>
          
          <div className="group p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <Zap className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-blue-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">Scalable Architecture</h3>
            <p className="text-gray-300">
              Built to grow with you. Start small, scale infinitely with our robust infrastructure.
            </p>
          </div>
          
          <div className="group p-8 bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
            <Sparkles className="w-12 h-12 mb-4 text-pink-400 group-hover:text-purple-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">Brooklyn Made</h3>
            <p className="text-gray-300">
              Local expertise with global reach. Based in Brooklyn, serving clients worldwide.
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
            Let's turn your idea into a profitable micro-SaaS
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
                placeholder="Tell us about your micro-SaaS idea..."
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

export default Home;

