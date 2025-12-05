import React, { useState, useEffect } from 'react';
import { FileText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <FileText className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Legal Agreement
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fadeIn">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Terms of Use
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-gray-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                1. Agreement to Terms
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  By accessing or using the Brilliants on Bedford website and services (collectively, the "Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our Services.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Your continued use of the Services following any changes constitutes acceptance of those changes. It is your responsibility to review these Terms periodically.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                2. Description of Services
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Brilliants on Bedford is a web design agency specializing in building SaaS products and custom digital solutions. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web design and development</li>
                  <li>SaaS product development</li>
                  <li>Custom web applications</li>
                  <li>API development and integration</li>
                  <li>UI/UX design services</li>
                  <li>Consultation and technical advisory</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                3. Use of Services
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the Services in any way that violates any applicable law or regulation</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use of the Services</li>
                  <li>Impersonate or attempt to impersonate Brilliants on Bedford or any employee, representative, or other user</li>
                  <li>Use any automated system to access the Services in a manner that sends more requests than a human can reasonably produce</li>
                  <li>Introduce any viruses, trojans, worms, or other malicious code</li>
                  <li>Attempt to gain unauthorized access to any portion of the Services</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                4. Service Terms and Estimates
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  All service estimates are provided in good faith and are subject to change based on the actual condition of your timepiece upon inspection. We will notify you of any significant changes to the estimate before proceeding with work.
                </p>
                <p>
                  Service timelines are estimates and may vary depending on the complexity of the repair, parts availability, and current workload. We will make reasonable efforts to complete work within the estimated timeframe.
                </p>
                <p>
                  A deposit may be required for certain services. Payment in full is due upon completion of services unless other arrangements have been made in writing.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                5. Warranty and Liability
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We warrant our workmanship for a period of one (1) year from the date of service completion. This warranty covers defects in our work but does not cover:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Normal wear and tear</li>
                  <li>Damage caused by misuse, accident, or unauthorized repair</li>
                  <li>Water damage (unless specifically tested and warranted for water resistance)</li>
                  <li>Batteries and straps</li>
                  <li>Cosmetic issues not directly related to our service</li>
                </ul>
                <p className="mt-4">
                  To the maximum extent permitted by law, Brilliants on Bedford shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to our services. Our total liability shall not exceed the amount you paid for the specific service in question.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                6. Customer Responsibilities
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>As a customer, you are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing accurate information about your timepiece and any known issues</li>
                  <li>Removing any valuable items or sentimental bands before service (we are not responsible for items left attached)</li>
                  <li>Picking up your timepiece within 60 days of notification that service is complete</li>
                  <li>Notifying us immediately of any issues with completed service</li>
                  <li>Maintaining your timepiece according to manufacturer recommendations after service</li>
                </ul>
                <p className="mt-4">
                  Timepieces not picked up within 60 days may be subject to storage fees. Timepieces not claimed within 180 days may be disposed of or sold to recover costs.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                7. Intellectual Property Rights
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  The Services and all content, features, and functionality (including but not limited to information, software, text, displays, images, and design) are owned by Brilliants on Bedford and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit any material from our Services without prior written consent.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                8. Third-Party Links and Content
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Our Services may contain links to third-party websites or services that are not owned or controlled by Brilliants on Bedford. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p>
                  You acknowledge and agree that we shall not be liable for any damage or loss caused by or in connection with the use of any third-party content, goods, or services.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                9. Dispute Resolution
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Any disputes arising from these Terms or your use of our Services shall first be addressed through good-faith negotiation. If a resolution cannot be reached within 30 days, the dispute shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <p>
                  The arbitration shall take place in New York, New York, and shall be conducted in English. The arbitrator's decision shall be final and binding, and judgment may be entered in any court of competent jurisdiction.
                </p>
                <p>
                  You agree to waive any right to a jury trial or to participate in a class action lawsuit.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                10. Indemnification
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  You agree to defend, indemnify, and hold harmless Brilliants on Bedford and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                11. Governing Law
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. You consent to the exclusive jurisdiction of the state and federal courts located in New York County, New York.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                12. Severability
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect. The failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
                </p>
              </div>
            </div>

            {/* Section 13 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                13. Entire Agreement
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Brilliants on Bedford regarding the use of our Services and supersede all prior agreements and understandings, whether written or oral.
                </p>
              </div>
            </div>

            {/* Section 14 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                14. Contact Information
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-4">
                  <p className="font-semibold text-white mb-2">Brilliants on Bedford</p>
                  <p>Email: <a href="mailto:daniel@brilliantsonbedford.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">daniel@brilliantsonbedford.com</a></p>
                  <p>Phone: <a href="tel:212-920-1761" className="text-cyan-400 hover:text-cyan-300 transition-colors">212-920-1761</a></p>
                  <p>Location: New York City</p>
                  <p className="text-sm text-gray-400 mt-2">Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent relative z-10">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
            We&apos;re here to help clarify any concerns you may have.
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

export default Terms;
