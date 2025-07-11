
import { Mail, MessageSquare, Calendar } from "lucide-react";

const TelegramIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
  >
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ContactForm = () => {
  return (
    <div className="w-full mx-auto">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-entreprenology-turquoise mb-4">
          Let's Connect 👋
        </h2>
        <div className="space-y-6 text-brand-cream/90">
          <p className="text-lg">
            We're excited to hear from you. Our team is ready to explore how we
            can help transform your business with AI automation.
          </p>

          <div className="pt-4 border-t border-entreprenology-turquoise/20 mt-8">
            <p className="text-lg font-medium mb-4">
              Contact us and our AI autoresponder will help answer your questions. Book a discovery call when you're ready to automate.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <a
                href="https://t.me/CoralTriangleBot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 transition-colors duration-300 flex items-center justify-center group"
              >
                <TelegramIcon />
              </a>
              <span className="mt-3 text-sm text-brand-cream/80">Telegram</span>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://wa.me/18133300617"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 transition-colors duration-300 flex items-center justify-center group"
              >
                <MessageSquare className="h-8 w-8 text-white stroke-1" />
              </a>
              <span className="mt-3 text-sm text-brand-cream/80">WhatsApp</span>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="mailto:hello@coraltriangle.io?subject=Inquiry%20from%20Website&body=Hi%20Coral%20Triangle%20AI%20team,%0D%0A%0D%0AI'm%20interested%20in%20learning%20more%20about%20your%20AI%20automation%20services.%0D%0A%0D%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0D%0A%0D%0AThank%20you!"
                className="w-20 h-20 rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 transition-colors duration-300 flex items-center justify-center group"
                onClick={(e) => {
                  console.log('Email link clicked');
                  // Fallback: copy email to clipboard if mailto fails
                  const email = 'hello@coraltriangle.io';
                  try {
                    navigator.clipboard.writeText(email).then(() => {
                      console.log('Email copied to clipboard as fallback');
                    });
                  } catch (err) {
                    console.log('Could not copy email to clipboard');
                  }
                }}
              >
                <Mail className="h-8 w-8 text-white stroke-1" />
              </a>
              <span className="mt-3 text-sm text-brand-cream/80">Email</span>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://cal.com/coraltriangle-uat/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 transition-colors duration-300 flex items-center justify-center group"
              >
                <Calendar className="h-8 w-8 text-white stroke-1" />
              </a>
              <span className="mt-3 text-sm text-brand-cream/80">Book a Call</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
