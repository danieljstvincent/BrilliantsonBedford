import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: 'How long does it take to build a micro-SaaS?',
      answer: 'The timeline depends on the complexity of your project. Our Starter plan typically takes 2 weeks, Professional plans take 4 weeks, and Enterprise solutions are customized based on your specific requirements. We focus on rapid development without compromising quality.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We primarily work with React, Django, TypeScript, and Python for full-stack development. We also use modern tools and frameworks like Tailwind CSS, PostgreSQL, and cloud deployment platforms. Our tech stack is chosen based on scalability and performance requirements.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer ongoing support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature additions. We can discuss a maintenance plan that fits your needs during the project consultation.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We\'re experienced in collaborating with in-house teams, other agencies, and stakeholders. We can integrate seamlessly into your workflow and communicate through your preferred channels.'
    },
    {
      question: 'What if I need changes after the project is complete?',
      answer: 'We offer post-launch support and can make changes or additions to your micro-SaaS. Changes are billed based on scope and complexity. We also offer retainer packages for ongoing development work.'
    },
    {
      question: 'Do you handle hosting and deployment?',
      answer: 'Yes, we handle the complete deployment process including cloud infrastructure setup, domain configuration, and initial deployment. We can also set up CI/CD pipelines for automated deployments. Hosting costs are separate and depend on your traffic and requirements.'
    },
    {
      question: 'What makes your approach different?',
      answer: 'We specialize in rapid micro-SaaS development with a focus on getting your product to market quickly. Our Brooklyn-based team combines local expertise with modern development practices. We prioritize clean code, scalability, and user experience from day one.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply reach out through our contact form or schedule a consultation. We\'ll discuss your project, requirements, timeline, and budget. After that, we\'ll provide a detailed proposal and get started on bringing your micro-SaaS idea to life!'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, credit cards, and payment plans for larger projects. Typically, we request a deposit to begin work, with milestone payments throughout the project and a final payment upon completion. We\'re flexible and can work out a payment schedule that fits your budget.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Absolutely! We take confidentiality very seriously. We\'re happy to sign NDAs before discussing your project in detail. Your ideas and business information are safe with us, and we can discuss the specifics of any confidentiality agreement you need.'
    },
    {
      question: 'Can you help with marketing and SEO?',
      answer: 'While our primary focus is on development, we can provide guidance on SEO best practices, performance optimization, and basic marketing strategies. For comprehensive marketing services, we can connect you with trusted partners or recommend strategies that align with your micro-SaaS goals.'
    },
    {
      question: 'What happens if the project scope changes?',
      answer: 'We understand that project requirements can evolve. If the scope changes significantly, we\'ll discuss the impact on timeline and budget before proceeding. We maintain transparent communication throughout the project and handle scope changes through change orders that clearly outline any additional time or cost.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! While we\'re based in Brooklyn, NY, we work with clients worldwide. We\'re experienced in remote collaboration and can accommodate different time zones. Most of our communication happens through video calls, email, and project management tools, making location irrelevant.'
    },
    {
      question: 'What kind of testing and quality assurance do you provide?',
      answer: 'Quality is paramount to us. We perform comprehensive testing including unit tests, integration tests, and user acceptance testing. We also conduct thorough QA reviews for functionality, performance, security, and cross-browser compatibility before launch. We ensure your micro-SaaS is robust and ready for production.'
    },
    {
      question: 'Can you integrate third-party services?',
      answer: 'Absolutely! We regularly integrate with various third-party services including payment processors (Stripe, PayPal), authentication providers, email services, analytics tools, and more. We have experience with a wide range of APIs and can integrate whatever services your micro-SaaS needs to function effectively.'
    },
    {
      question: 'Do you provide training or documentation?',
      answer: 'Yes! We provide comprehensive documentation for your codebase, APIs, and deployment processes. We can also provide training sessions for your team on how to maintain and extend the application. We want you to feel confident managing your micro-SaaS after launch.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'Customer satisfaction is our top priority. We work closely with you throughout the project with regular check-ins and demos to ensure we\'re aligned. If there are any issues, we\'ll work together to resolve them. Our goal is to deliver exactly what you envision, and we\'re committed to making that happen.'
    },
    {
      question: 'Do you build mobile apps?',
      answer: 'While we primarily focus on web-based micro-SaaS solutions, we can build responsive web applications that work beautifully on mobile devices. For native mobile apps, we can discuss the requirements and either develop them or connect you with specialists. Many of our web applications are mobile-optimized and function like native apps.'
    },
    {
      question: 'How do you handle data security and privacy?',
      answer: 'Security is built into everything we do. We follow best practices for data encryption, secure authentication, and comply with relevant privacy regulations like GDPR and CCPA. We can implement security measures appropriate for your data sensitivity level and help you understand compliance requirements for your specific use case.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-8 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fadeIn">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              FAQ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Everything you need to know about working with Brilliants on Bedford
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-500 ${
                  openIndex === index 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20 scale-[1.02]' 
                    : 'border-white/10 hover:border-purple-500/30 hover:shadow-md hover:shadow-purple-500/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group relative overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <h3 className={`text-xl font-semibold relative z-10 pr-8 transition-all duration-300 ${
                    openIndex === index 
                      ? 'text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text' 
                      : 'text-white group-hover:text-cyan-400'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 relative z-10">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-cyan-400 transform transition-all duration-300 rotate-180" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110" />
                    )}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index 
                      ? 'max-h-[1000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 pt-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4"></div>
                    <p className="text-gray-300 leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden group">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent relative z-10">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
            We&apos;re here to help! Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            to="/contact-us"
            className="group/btn relative z-10 inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:from-purple-500 hover:to-cyan-500 overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
