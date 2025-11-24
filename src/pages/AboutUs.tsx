import React from 'react';
import { Sparkles, Rocket, Zap } from 'lucide-react';

const AboutUs: React.FC = () => {
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
              About Brilliants on Bedford
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            We are Brooklyn's premier micro-SaaS studio, dedicated to crafting lightning-fast solutions that solve real problems.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Brilliants on Bedford, we believe that great software should be built fast, 
              scale effortlessly, and solve real-world problems. Based in the heart of Brooklyn, 
              we combine local expertise with global reach to deliver micro-SaaS solutions that 
              make a difference.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              From concept to production in record time, we help entrepreneurs and businesses 
              turn their ideas into profitable, scalable products. Our team specializes in rapid 
              development without compromising on quality or scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <Rocket className="w-12 h-12 mb-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">Speed & Efficiency</h3>
            <p className="text-gray-300">
              We move fast without breaking things. Our streamlined processes ensure your 
              micro-SaaS launches in weeks, not months.
            </p>
          </div>
          
          <div className="group p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <Zap className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-blue-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">Innovation First</h3>
            <p className="text-gray-300">
              We stay at the cutting edge of technology, using the latest tools and frameworks 
              to build scalable, modern solutions.
            </p>
          </div>
          
          <div className="group p-8 bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
            <Sparkles className="w-12 h-12 mb-4 text-pink-400 group-hover:text-purple-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">Brooklyn Roots</h3>
            <p className="text-gray-300">
              Proudly based in Brooklyn, we bring local expertise and a global perspective to 
              every project we undertake.
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

export default AboutUs;

