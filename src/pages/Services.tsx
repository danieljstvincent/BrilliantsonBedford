import React from 'react';
import { Code2, Rocket, Zap, Sparkles, Database, Cloud, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Rocket,
      title: 'Rapid MVP Development',
      description: 'Get your micro-SaaS to market in weeks with our streamlined development process. We focus on core features that deliver value fast.',
      gradient: 'from-purple-900/30 to-pink-900/30',
      border: 'border-purple-500/20 hover:border-purple-500/50',
      iconColor: 'text-purple-400 group-hover:text-pink-400'
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Complete web applications built with React, Django, TypeScript, and Python. Modern tech stack for scalable solutions.',
      gradient: 'from-cyan-900/30 to-blue-900/30',
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      iconColor: 'text-cyan-400 group-hover:text-blue-400'
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Robust, scalable backend systems designed to grow with your business. From APIs to database design, we handle it all.',
      gradient: 'from-pink-900/30 to-purple-900/30',
      border: 'border-pink-500/20 hover:border-pink-500/50',
      iconColor: 'text-pink-400 group-hover:text-purple-400'
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment',
      description: 'Seamless deployment to production with cloud infrastructure that scales automatically with your user base.',
      gradient: 'from-purple-900/30 to-cyan-900/30',
      border: 'border-purple-500/20 hover:border-purple-500/50',
      iconColor: 'text-purple-400 group-hover:text-cyan-400'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications that load instantly and perform flawlessly. We optimize for speed and user experience.',
      gradient: 'from-cyan-900/30 to-pink-900/30',
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      iconColor: 'text-cyan-400 group-hover:text-pink-400'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Enterprise-grade security and ongoing maintenance to keep your micro-SaaS running smoothly and securely.',
      gradient: 'from-pink-900/30 to-purple-900/30',
      border: 'border-pink-500/20 hover:border-pink-500/50',
      iconColor: 'text-pink-400 group-hover:text-purple-400'
    }
  ];

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
              Our Services
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Comprehensive micro-SaaS development services from concept to production
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl border ${service.border} transition-all duration-300 transform hover:scale-105`}
              >
                <IconComponent className={`w-12 h-12 mb-4 ${service.iconColor} transition-colors`} />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your micro-SaaS idea to life
          </p>
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Let's Get Started
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
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

export default Services;

