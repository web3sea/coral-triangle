
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Calendar } from "lucide-react";

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
                <img 
                  src="https://jsvtrbfvpaqdpvzzngci.supabase.co/storage/v1/object/public/images/telegram-icon.svg" 
                  alt="Telegram"
                  className="h-8 w-8"
                />
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
                <img 
                  src="https://jsvtrbfvpaqdpvzzngci.supabase.co/storage/v1/object/public/images/whatsapp-icon.svg" 
                  alt="WhatsApp"
                  className="h-8 w-8"
                />
              </a>
              <span className="mt-3 text-sm text-brand-cream/80">WhatsApp</span>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="mailto:hello@coraltriangle.io"
                className="w-20 h-20 rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 transition-colors duration-300 flex items-center justify-center group"
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
