import React from 'react';
import { Sparkles, Rocket, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import danielImage from '../images/daniel_stvincent_3D_image.png';

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
      <div className="relative container mx-auto px-6 pt-20 pb-12">
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
            We are Brooklyn's premier web design agency and micro-SaaS studio, dedicated to crafting lightning-fast solutions that solve real problems.
          </p>
        </div>
      </div>

      {/* About Daniel Section */}
      <div className="relative container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30">
            <div className="flex-shrink-0">
              <img 
                src={danielImage} 
                alt="Daniel St. Vincent" 
                className="w-64 h-64 rounded-full object-cover border-4 border-purple-400/50 shadow-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                About Daniel
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  Hello, my name is Daniel St. Vincent, and I'm a Full-Stack Software Engineer with over five years of hands-on experience building clean, reliable, and user-friendly digital solutions. I earned my Bachelor's Degree in Computer Science and Emerging Technologies through the CUNY BA Program, studying at both Medgar Evers College and Lehman College. I love creating things that not only work — but work beautifully.
                </p>
                <p>
                  Most recently, I worked on the Conversational AI Team at American Express here in New York City, where I helped design and improve chatbot experiences that guided card members to quick, helpful solutions. Our workflows helped reduce call volume, improve customer satisfaction, and make support feel a little more human.
                </p>
                <p>
                  Today, I'm focused on helping businesses get found on Google, build trust with the people searching for them, and turn clicks into paying customers. From clean website design to SEO fundamentals, performance optimization, and clear messaging, I bring both the technical skills and strategic thinking needed to help businesses stand out. Think of me as your friendly neighborhood engineer who loves turning great ideas into results.
                </p>
              </div>
            </div>
          </div>
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

      {/* CTA Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's turn your micro-SaaS idea into a reality. Get in touch and let's build something brilliant together.
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
    </div>
  );
};

export default AboutUs;

