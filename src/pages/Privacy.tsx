import React, { useState, useEffect } from 'react';
import { Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
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
            <Shield className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Your Privacy Matters
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fadeIn">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Privacy Policy
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
            We are committed to protecting your privacy and personal information
          </p>
          <p className="text-sm text-gray-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                1. Information We Collect
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  When you visit our website or use our services, we may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and mailing address when you contact us or request our services.</li>
                  <li><strong className="text-white">Business Information:</strong> Company name, project details, and other information you provide during consultations.</li>
                  <li><strong className="text-white">Technical Information:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
                  <li><strong className="text-white">Communication Records:</strong> Records of correspondence with us, including emails, phone calls, and messages.</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                2. How We Use Your Information
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and improve our watch repair and restoration services</li>
                  <li>To communicate with you about your service requests and inquiries</li>
                  <li>To send you updates, newsletters, and promotional materials (with your consent)</li>
                  <li>To process payments and manage billing</li>
                  <li>To analyze website usage and improve our online experience</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                3. Information Sharing and Disclosure
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We respect your privacy and do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., payment processors, email services).</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our legal rights and safety.</li>
                  <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                  <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share your information.</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                4. Data Security
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encrypted data transmission using SSL/TLS protocols</li>
                  <li>Secure storage systems with access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                5. Cookies and Tracking Technologies
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve website functionality and performance</li>
                  <li>Deliver personalized content and advertising</li>
                </ul>
                <p className="mt-4">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect your ability to use certain features of our website.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                6. Your Rights and Choices
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you.</li>
                  <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                  <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                  <li><strong className="text-white">Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <a href="mailto:daniel@brilliantsonbedford.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">daniel@brilliantsonbedford.com</a>.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                7. Data Retention
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                8. Children's Privacy
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can delete it.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                9. Third-Party Links
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                10. Changes to This Privacy Policy
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                11. Contact Us
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
            Questions About Our Privacy Policy?
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

export default Privacy;
