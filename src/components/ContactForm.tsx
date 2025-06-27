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
              className="w-full sm:w-auto bg-entreprenology-coral hover:bg-entreprenology-coral/90 text-white"
              asChild
            >
              <a
                href="https://wa.me/18133300617"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Connect on WhatsApp
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto border-entreprenology-turquoise text-entreprenology-turquoise hover:bg-entreprenology-turquoise/10"
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
              className="w-full sm:w-auto bg-entreprenology-yellow hover:bg-entreprenology-yellow/90 text-entreprenology-bg"
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
