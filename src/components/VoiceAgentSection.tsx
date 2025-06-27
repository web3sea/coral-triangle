
import React from "react";
import { Card } from "@/components/ui/card";

export const VoiceAgentSection = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <Card className="p-6 bg-entreprenology-bg border border-entreprenology-yellow/20 text-gray-300 shadow-lg backdrop-blur-sm">
        <section>
          <div className="bg-entreprenology-yellow/10 p-6 rounded-lg border border-entreprenology-yellow/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-entreprenology-yellow">✏️ Value Proposition</h2>
            <p className="text-lg mb-4">
              Our Voice Agent Qualifier transforms how dive businesses handle initial customer inquiries,
              using cutting-edge voice AI to qualify leads, answer common questions, and schedule bookings
              without human intervention.
            </p>
            
            <p className="text-lg mb-4">
              Most diving businesses lose potential bookings due to missed calls, slow responses, or staff being
              occupied with current guests. Each missed inquiry is lost revenue, and many international customers 
              are calling outside your business hours.
            </p>

            <p className="text-lg mb-4">
              I developed a natural-sounding voice AI system specifically trained on diving terminology and guest 
              inquiries. This virtual receptionist answers calls 24/7, handles routine questions about pricing, 
              availability, and qualifications, and can even complete simple bookings.
            </p>

            <p className="text-lg mb-4">
              The system qualifies leads by gathering key information—certification levels, specific interests, 
              group size, and budget—then routes serious prospects to your team or schedules callbacks. Less 
              promising inquiries receive helpful information without consuming staff time.
            </p>

            <p className="text-lg mb-4">
              With multilingual capabilities, your diving business becomes accessible to the global market, 
              capturing inquiries that would otherwise be lost due to language barriers or time zone differences.
            </p>
            
            <p className="text-lg font-medium text-entreprenology-yellow mt-6">
              The takeaway? Never miss another booking opportunity, even when your team is underwater.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-entreprenology-yellow">
            The Challenge of Customer Communications
          </h2>
          <p className="mb-4">Dive businesses face unique obstacles:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">📞</span>
              <span>Missed calls when staff are with guests or underwater</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🕒</span>
              <span>International customers calling outside business hours</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🌐</span>
              <span>Language barriers limiting your customer base</span>
            </li>
          </ul>
          <p className="italic">Every missed call is potentially thousands in lost revenue.</p>
          <hr className="my-8 border-entreprenology-yellow/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-yellow">
            The AI Voice Solution
          </h2>
          <p className="mb-4">Our voice agent provides:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">🤖</span>
              <span>Natural-sounding voice AI with diving expertise</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⏰</span>
              <span>24/7 availability for global time zone coverage</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🔄</span>
              <span>Seamless handoff to human staff for complex inquiries</span>
            </li>
          </ul>
          <hr className="my-8 border-entreprenology-yellow/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-yellow">
            Lead Qualification
          </h2>
          <p className="mb-4">Focus your time on promising prospects:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">🎯</span>
              <span>Automatically gather certification levels and experience</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">👥</span>
              <span>Determine group sizes and special requirements</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">💰</span>
              <span>Assess budget expectations and booking timeline</span>
            </li>
          </ul>
          <p className="italic">💬 "Our conversion rates increased by 35% after implementing voice qualification." - Dive Center Owner</p>
          <hr className="my-8 border-entreprenology-yellow/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-yellow">
            Global Accessibility
          </h2>
          <p className="mb-4">Expand your market reach:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">🌍</span>
              <span>Multilingual support for international customers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📅</span>
              <span>Booking capabilities across all time zones</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📊</span>
              <span>Valuable insights on international market interest</span>
            </li>
          </ul>
          <hr className="my-8 border-entreprenology-yellow/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-yellow">
            The Bottom Line
          </h2>
          <div className="space-y-2 mb-6">
            <p className="flex items-center">
              <span className="mr-2">📈</span>
              <span>Never miss another inquiry, even during peak periods</span>
            </p>
            <p className="flex items-center">
              <span className="mr-2">⚡</span>
              <span>Increase booking conversion rates by 35%</span>
            </p>
            <p className="flex items-center">
              <span className="mr-2">🌐</span>
              <span>Expand your customer base globally</span>
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-entreprenology-yellow">
              Never miss another booking opportunity, even when your team is underwater.
            </p>
          </div>
        </section>
      </Card>
    </div>
  );
};
