import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Calendar } from "lucide-react";

// Telegram SVG Icon component
const Telegram = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.13-.02.2z" />
  </svg>
);

// WhatsApp SVG Icon component
const WhatsApp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
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
              Book a 15-minute discovery call to discuss:
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li className="flex items-start">
                <span className="text-entreprenology-coral mr-2">•</span>
                <span>
                  Which AI co-pilot is the right fit for your operations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-entreprenology-coral mr-2">•</span>
                <span>
                  How our solutions can address your specific challenges
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-entreprenology-coral mr-2">•</span>
                <span>Pricing and implementation timelines</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              className="w-full sm:w-auto bg-[#4DCC5B] hover:bg-[#4DCC5B]/90 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a
                href="https://wa.me/18133300617"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <WhatsApp className="h-4 w-4" />
                Connect on WhatsApp
              </a>
            </Button>

            <Button
              variant="default"
              className="w-full sm:w-auto bg-[#30A3E6] hover:bg-[#30A3E6]/90 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a
                href="https://t.me/CoralTriangleBot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Telegram className="h-4 w-4" />
                Connect on Telegram
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto border-entreprenology-turquoise text-entreprenology-turquoise transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a
                href="mailto:hello@coraltriangle.io"
                className="inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
            </Button>

            <Button
              variant="default"
              className="w-full sm:w-auto bg-entreprenology-yellow hover:bg-entreprenology-yellow/90 text-entreprenology-bg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a
                href="https://cal.com/coraltriangle-uat/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
