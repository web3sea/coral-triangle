
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-entreprenology-turquoise">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-300 mb-8">
            Last Updated: June 10, 2025
          </p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg leading-relaxed">
              Welcome to Coral Triangle AI. By accessing or using our website coraltriangle.io and any related services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                1. Use of Our Services
              </h2>
              <p className="leading-relaxed">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You may not use our services in any way that violates applicable laws or infringes on the rights of others.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                2. Account and Purchases
              </h2>
              <p className="mb-4 leading-relaxed">
                In order to hire us for a service, you will be required to provide personal information for billing. You agree that all information you provide is accurate and current.
              </p>
              <p className="leading-relaxed">
                All payments are securely processed through Stripe. By making a purchase, you authorize us (or Stripe on our behalf) to charge your payment method for the total amount.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                3. Refunds and Cancellations
              </h2>
              <p className="leading-relaxed">
                Services are provided according to the signed contractual agreement between parties.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                4. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on our website — including text, graphics, logos, and software — is the property of Coral Triangle AI and is protected by intellectual property laws. You may not reproduce, distribute, or modify our content without written permission.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Coral Triangle AI is not liable for any indirect, incidental, or consequential damages arising from your use of our services or website.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                6. Disclaimer
              </h2>
              <p className="leading-relaxed">
                Services are provided according to the signed contractual agreement between parties.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                7. Termination
              </h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate access to our services at any time for violations of these Terms or for any other reason at our sole discretion.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                8. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of the United States without regard to conflict of law principles.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                9. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We may update these Terms from time to time. Continued use of our services after changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div className="border-t border-entreprenology-coral/40 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">
                10. Contact Us
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about these Terms, please contact us:
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

export default TermsOfService;
