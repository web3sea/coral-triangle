
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-entreprenology-turquoise">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-300 mb-8">
            Last Updated: June 10, 2025
          </p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg leading-relaxed">
              Coral Triangle AI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website coraltriangle.io, make a purchase, or otherwise interact with us.
            </p>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                1. Information We Collect
              </h2>
              <p className="mb-4 leading-relaxed">
                We may collect the following types of personal information:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span><strong>Contact Information:</strong> Name, email address, phone number</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span><strong>Payment Information:</strong> Billing address and payment details (processed securely via Stripe)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span><strong>Usage Data:</strong> Pages visited, time spent on site, and device/browser information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span><strong>Other Data:</strong> Any information you provide voluntarily through forms or communications</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                2. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">
                We use your information to:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Process and fulfill service orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Send confirmations, invoices, and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Respond to inquiries and provide support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Improve our website and services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Comply with legal and regulatory requirements</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                3. Sharing and Disclosure
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>We do not sell your personal information.</strong> However, we may share your information with:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span><strong>Service Providers:</strong> Such as payment processors (e.g., Stripe), hosting providers, and communication tools, solely to perform services on our behalf</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span><strong>Legal Obligations:</strong> If required by law or to protect our rights, users, or others</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                4. Security Practices
              </h2>
              <p className="mb-4 leading-relaxed">
                We implement reasonable security measures to protect your data, including:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Secure SSL encryption for data transmission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Trusted third-party services (e.g., Stripe) for payment processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Regular review and updates of our security protocols</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                5. Your Rights and Choices
              </h2>
              <p className="mb-4 leading-relaxed">
                You have the right to:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Access or update your personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Request deletion of your data, where applicable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-entreprenology-coral mr-2">•</span>
                  <span>Opt out of marketing communications</span>
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                To exercise these rights, contact us at <strong>support@coraltriangle.io</strong> or reply "Opt out" to an email from us.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                6. Updates to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted on this page with a revised "Last Updated" date.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                8. Contact Us
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-entreprenology-coral/10 p-6 rounded-lg border border-entreprenology-coral/40">
                <p className="font-semibold text-entreprenology-turquoise mb-2">Coral Triangle AI</p>
                <p>support@coraltriangle.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
