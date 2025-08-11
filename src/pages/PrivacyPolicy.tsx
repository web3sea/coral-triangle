import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    document.title = "Privacy Policy | Coral Triangle AI";

    const descContent =
      "Privacy Policy for Coral Triangle AI: how we collect, use, and protect your personal data.";
    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = descContent;

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/privacy-policy`;
  }, []);

  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-entreprenology-turquoise">Privacy Policy</h1>
            <p className="text-sm text-gray-300 mt-2">Effective Date: {formattedDate}</p>
            <p className="text-sm text-gray-300">Last Updated: {formattedDate}</p>
          </header>

          <hr className="my-8 border-entreprenology-coral/40" />

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">1. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="text-entreprenology-coral mr-2">•</span>
                <span>
                  <strong>Contact Information</strong> — Name, email address, phone number, and any details you provide when subscribing or contacting us.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-entreprenology-coral mr-2">•</span>
                <span>
                  <strong>Payment Information</strong> — Billing address and payment details (processed securely via Stripe).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-entreprenology-coral mr-2">•</span>
                <span>
                  <strong>Usage Data</strong> — Pages visited, time spent on site, links clicked in emails, email opens, device/browser information, and approximate location (via our email service provider).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-entreprenology-coral mr-2">•</span>
                <span>
                  <strong>Other Data</strong> — Any information you voluntarily provide through forms, surveys, or communications.
                </span>
              </li>
            </ul>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Send newsletters, updates, and promotional offers you have subscribed to.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Personalize and improve our email and website content.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Process and fulfill service orders.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Send confirmations, invoices, and updates.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Respond to inquiries and provide support.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Track and analyze engagement with our marketing campaigns.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Improve our website, services, and customer experience.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Comply with legal and regulatory requirements.</span></li>
            </ul>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">3. Legal Basis for Processing (GDPR)</h2>
            <p>If you are located in the European Economic Area (EEA), we process your personal data based on:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span><strong>Consent</strong> — for sending marketing emails and newsletters.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span><strong>Legitimate Interest</strong> — to communicate with you if you are an existing customer or have shown interest in our services.</span></li>
            </ul>
            <p className="mt-4">You may withdraw consent at any time using the opt-out process below.</p>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">4. Sharing and Disclosure</h2>
            <p><strong>We do not sell your personal information.</strong> However, we may share your information with:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span><strong>Service Providers</strong> — such as payment processors (e.g., Stripe), hosting providers, analytics services, and email marketing platforms, solely to perform services on our behalf.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span><strong>Legal Obligations</strong> — if required by law or to protect our rights, users, or others.</span></li>
            </ul>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">5. International Data Transfers</h2>
            <p>Your personal data may be transferred to and processed in countries outside the EEA, including countries that may not have the same level of data protection as your home country.</p>
            <p className="mt-4">When we transfer data internationally, we ensure appropriate safeguards are in place, such as:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Standard Contractual Clauses (SCCs) approved by the European Commission.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Adequacy Decisions where the European Commission has determined the destination country offers an adequate level of data protection.</span></li>
            </ul>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">6. Security Practices</h2>
            <p>We implement reasonable security measures to protect your data, including:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Secure SSL encryption for data transmission.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Trusted third-party services (e.g., Stripe) for secure payment processing.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Regular review and updates of our security protocols.</span></li>
            </ul>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">7. Data Retention</h2>
            <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span><strong>Contact Information (marketing purposes)</strong> — retained until you unsubscribe, after which it will be deleted within 30 days.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span><strong>Transactional Data (purchases, invoices)</strong> — retained for 7 years to comply with financial and tax regulations.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span><strong>Engagement Data</strong> — retained for up to 24 months to measure and improve marketing performance.</span></li>
            </ul>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">8. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Access, correct, or update your personal information.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Request deletion of your data, where applicable.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Withdraw consent to marketing at any time.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Request a copy of the data we hold about you.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Lodge a complaint with your local Data Protection Authority if you believe your rights have been infringed.</span></li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at <strong>support@coraltriangle.io</strong> or reply with “Unsubscribe” or “Opt Out” to any marketing email.</p>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">9. Opt-Out Process</h2>
            <p>You may unsubscribe from our marketing emails at any time by:</p>
            <ol className="ml-6 list-decimal space-y-2">
              <li>Clicking the “Unsubscribe” link in any marketing email.</li>
              <li>Replying with “Unsubscribe” in the subject line or body of the email.</li>
            </ol>
            <p className="mt-4">We will process your request within 10 business days as required by law. Transactional or service-related messages may still be sent if necessary.</p>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">10. Cookies and Other Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Enable core site functionality.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Remember your preferences and settings.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Analyze site traffic and improve performance.</span></li>
              <li className="flex items-start"><span className="text-entreprenology-coral mr-2">•</span><span>Track marketing campaign engagement (e.g., email link clicks).</span></li>
            </ul>
            <p className="mt-4">You can manage your cookie preferences at any time through our cookie consent banner or by adjusting your browser settings. Please note that disabling certain cookies may affect website functionality.</p>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">11. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted on this page with a revised “Last Updated” date.</p>
          </section>

          <section className="border-t border-entreprenology-coral/40 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-entreprenology-yellow">12. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="bg-entreprenology-coral/10 p-6 rounded-lg border border-entreprenology-coral/40">
              <p className="font-semibold text-entreprenology-turquoise mb-2">Coral Triangle AI</p>
              <p>support@coraltriangle.io</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
