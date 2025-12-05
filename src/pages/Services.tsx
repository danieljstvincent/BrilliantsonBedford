import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Rapid MVP Development',
      description: 'Get your micro-SaaS to market in weeks with our streamlined development process. We focus on core features that deliver value fast.',
      gradient: 'from-purple-900/30 to-pink-900/30',
      border: 'border-purple-500/20 hover:border-purple-500/50'
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web applications built with React, Django, TypeScript, and Python. Modern tech stack for scalable solutions.',
      gradient: 'from-cyan-900/30 to-blue-900/30',
      border: 'border-cyan-500/20 hover:border-cyan-500/50'
    },
    {
      title: 'Backend Architecture',
      description: 'Robust, scalable backend systems designed to grow with your business. From APIs to database design, we handle it all.',
      gradient: 'from-pink-900/30 to-purple-900/30',
      border: 'border-pink-500/20 hover:border-pink-500/50'
    },
    {
      title: 'Cloud Deployment',
      description: 'Seamless deployment to production with cloud infrastructure that scales automatically with your user base.',
      gradient: 'from-purple-900/30 to-cyan-900/30',
      border: 'border-purple-500/20 hover:border-purple-500/50'
    },
    {
      title: 'Performance Optimization',
      description: 'Lightning-fast applications that load instantly and perform flawlessly. We optimize for speed and user experience.',
      gradient: 'from-cyan-900/30 to-pink-900/30',
      border: 'border-cyan-500/20 hover:border-cyan-500/50'
    },
    {
      title: 'Security & Maintenance',
      description: 'Enterprise-grade security and ongoing maintenance to keep your micro-SaaS running smoothly and securely.',
      gradient: 'from-pink-900/30 to-purple-900/30',
      border: 'border-pink-500/20 hover:border-pink-500/50'
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
            Professional web design and e-commerce solutions tailored for jewelry stores and watch retailers
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl border ${service.border} transition-all duration-300 transform hover:scale-105`}
              >
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Packages Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Popular Service Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Full Stack 5 Page Website */}
          <div className="p-8 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Full Stack 5 Page Website
              </h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Perfect for jewelry stores and watch retailers looking to establish a stunning online presence that showcases your collection.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-300">5 Custom Pages (Home, About, Services, Contact, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Mobile Friendly & Fully Responsive Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Optimized Page Speed & Performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">SEO Optimized (Meta tags, Schema markup, Sitemap)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Contact Form Integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Google Analytics Setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Custom UI/UX Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Cross-Browser Compatibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Cloud Hosting & Deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">SSL Certificate (HTTPS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Content Management System</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">30 Days Post-Launch Support</span>
              </li>
            </ul>
          </div>

          {/* Shopify E-Commerce Website */}
          <div className="p-8 bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Shopify E-Commerce Website
              </h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Complete e-commerce solution for jewelry and watch retailers to start selling online with secure payments and inventory management.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Custom Shopify Theme Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Mobile Friendly & Fully Responsive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Optimized Page Speed & Performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">SEO Optimized for E-Commerce</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Product Catalog Setup (Up to 50 products)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Shopping Cart & Checkout Integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Payment Gateway Setup (Stripe, PayPal, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Inventory Management System</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Customer Account Portal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Email Marketing Integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Shipping & Tax Configuration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">SSL Certificate & Security Setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">Google Analytics & Facebook Pixel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-300">30 Days Post-Launch Support & Training</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help grow your jewelry or watch business online
          </p>
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Let's Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

