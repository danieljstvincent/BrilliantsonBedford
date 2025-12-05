import React from 'react';
import { Link } from 'react-router-dom';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, target audience, and business goals. Through detailed discussions, we create a comprehensive project plan and roadmap.',
      gradient: 'from-purple-900/30 to-pink-900/30',
      border: 'border-purple-500/20 hover:border-purple-500/50',
      iconColor: 'text-purple-400 group-hover:text-pink-400'
    },
    {
      title: 'Design & Prototyping',
      description: 'Our design process focuses on user experience and modern aesthetics. We create wireframes, mockups, and interactive prototypes to ensure the design meets your expectations.',
      gradient: 'from-cyan-900/30 to-blue-900/30',
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      iconColor: 'text-cyan-400 group-hover:text-blue-400'
    },
    {
      title: 'Development',
      description: 'Using agile methodologies, we build your micro-SaaS with clean, scalable code. We maintain regular communication and provide updates throughout the development process.',
      gradient: 'from-pink-900/30 to-purple-900/30',
      border: 'border-pink-500/20 hover:border-pink-500/50',
      iconColor: 'text-pink-400 group-hover:text-purple-400'
    },
    {
      title: 'Testing & Launch',
      description: 'We conduct thorough testing to ensure everything works perfectly. Once approved, we handle deployment, domain setup, and launch your micro-SaaS to the world.',
      gradient: 'from-purple-900/30 to-cyan-900/30',
      border: 'border-purple-500/20 hover:border-purple-500/50',
      iconColor: 'text-purple-400 group-hover:text-cyan-400'
    },
    {
      title: 'Support & Maintenance',
      description: 'After launch, we provide ongoing support, monitoring, and maintenance. We\'re here to help with updates, new features, and any issues that arise.',
      gradient: 'from-cyan-900/30 to-pink-900/30',
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      iconColor: 'text-cyan-400 group-hover:text-pink-400'
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-8 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Our Process
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fadeIn">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              How We Work
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
            A transparent, collaborative process designed to bring your micro-SaaS idea to life
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className={`group p-8 bg-gradient-to-br ${step.gradient} backdrop-blur-sm rounded-2xl border ${step.border} transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden`}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%]"></div>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="mt-4 text-3xl font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden group">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent text-center relative z-10">
              Typical Timeline
            </h2>
            <div className="space-y-6 mt-8 relative z-10">
              <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-cyan-400 mt-2 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-cyan-400/50 transition-all duration-300"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 group-hover/item:text-cyan-300 transition-colors duration-300">Starter Plan: 2 weeks</h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">Perfect for MVPs and proof of concepts</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-purple-400 mt-2 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-purple-400/50 transition-all duration-300"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 group-hover/item:text-purple-300 transition-colors duration-300">Professional Plan: 4 weeks</h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">Ideal for full-featured micro-SaaS applications</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-pink-400 mt-2 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-pink-400/50 transition-all duration-300"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 group-hover/item:text-pink-300 transition-colors duration-300">Enterprise Plan: Custom</h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">Tailored timeline based on your specific requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden group">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent relative z-10">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
            Let's discuss your micro-SaaS idea and see how we can bring it to life together.
          </p>
          <Link
            to="/contact-us"
            className="group/btn relative z-10 inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:from-purple-500 hover:to-cyan-500 overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;

