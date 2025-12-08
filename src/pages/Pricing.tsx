import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Lump Sum',
      price: '$3,500',
      priceNote: '+$25/mo Hosting',
      description: 'One-time payment for complete website',
      features: [
        { text: 'Custom Design & Development', included: true },
        { text: '$25/month Website Hosting', included: true },
        { text: '$100 Fee Per Additional Page After 5', included: true },
        { text: 'Optional Unlimited Edits Add-On (+$50/mo)', included: true },
        { text: 'Optional Blog Integration (+$250)', included: true },
        { text: '24/7 Customer Support', included: false },
        { text: 'Lifetime Updates & Maintenance', included: false }
      ],
      gradient: 'from-purple-900/30 to-pink-900/30',
      border: 'border-purple-500/20 hover:border-purple-500/50',
      buttonGradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Monthly',
      price: '$150',
      priceNote: 'Per Month',
      description: 'Monthly subscription with ongoing support',
      features: [
        { text: 'Custom Design & Development', included: true },
        { text: 'Website Hosting Included', included: true },
        { text: '$100 Fee Per Additional Page After 5', included: true },
        { text: 'Optional Blog Integration (+$250)', included: true },
        { text: 'Unlimited Content Edits', included: true },
        { text: '24/7 Customer Support', included: true },
        { text: 'Lifetime Updates & Maintenance', included: true }
      ],
      gradient: 'from-cyan-900/30 to-blue-900/30',
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      buttonGradient: 'from-cyan-600 to-blue-600',
      popular: true
    },
    {
      name: 'Ecommerce',
      price: '$7K',
      priceNote: 'Starting',
      description: 'Complete Shopify e-commerce solution',
      features: [
        { text: 'Custom Shopify Store Design', included: true },
        { text: 'Configure Apps & Extensions', included: true },
        { text: 'Integrated Shipping', included: true },
        { text: 'Shopify CMS Training & Tutorial', included: true },
        { text: 'Fully Editable In Shopify CMS', included: true },
        { text: 'Optional Unlimited Edits Add-On (+$50/mo)', included: false },
        { text: '24/7 Customer Support', included: false }
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
      <div className="relative container mx-auto px-6 pt-20 pb-12">
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
            Transparent pricing for jewelry and watch store websites. Choose the plan that fits your business.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative container mx-auto px-6 py-12">
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
                {plan.priceNote && (
                  <p className="text-cyan-400 text-sm font-semibold mb-2">{plan.priceNote}</p>
                )}
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.included ? 'text-cyan-400' : 'text-gray-600'}`} />
                    <span className={`${feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}>{feature.text}</span>
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
            All plans can be customized for your jewelry or watch store.
            Contact us to discuss your business and get a tailored quote.
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
    </div>
  );
};

export default Pricing;

