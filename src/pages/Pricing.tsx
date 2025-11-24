import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$5,000',
      description: 'Perfect for MVPs and proof of concepts',
      features: [
        'Basic MVP development',
        'Up to 3 core features',
        'Responsive design',
        'Basic deployment',
        '2 weeks delivery',
        'Email support'
      ],
      gradient: 'from-purple-900/30 to-pink-900/30',
      border: 'border-purple-500/20 hover:border-purple-500/50',
      buttonGradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Professional',
      price: '$15,000',
      description: 'Ideal for growing micro-SaaS businesses',
      features: [
        'Full-stack development',
        'Up to 8 core features',
        'Advanced UI/UX design',
        'Cloud deployment',
        'Database architecture',
        'API integration',
        '4 weeks delivery',
        'Priority support'
      ],
      gradient: 'from-cyan-900/30 to-blue-900/30',
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      buttonGradient: 'from-cyan-600 to-blue-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for complex requirements',
      features: [
        'Custom architecture',
        'Unlimited features',
        'Premium design system',
        'Scalable infrastructure',
        'Advanced security',
        'Performance optimization',
        'Custom timeline',
        'Dedicated support team'
      ],
      gradient: 'from-pink-900/30 to-purple-900/30',
      border: 'border-pink-500/20 hover:border-pink-500/50',
      buttonGradient: 'from-pink-600 to-purple-600'
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
              Pricing Plans
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Transparent pricing for micro-SaaS development. Choose the plan that fits your needs.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-gradient-to-br ${plan.gradient} backdrop-blur-sm rounded-2xl border ${plan.border} transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-cyan-500/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact-us"
                className={`group w-full block text-center px-8 py-4 bg-gradient-to-r ${plan.buttonGradient} rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            All plans can be customized to fit your specific requirements. 
            Contact us to discuss your project and get a tailored quote.
          </p>
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
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

export default Pricing;

