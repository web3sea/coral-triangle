
import React from "react";
import { Card } from "@/components/ui/card";

export const MarketingDripSection = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <Card className="p-6 bg-entreprenology-bg border border-entreprenology-coral/20 text-gray-300 shadow-lg backdrop-blur-sm">
        <section>
          <div className="bg-entreprenology-coral/10 p-6 rounded-lg border border-entreprenology-coral/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-entreprenology-coral">✏️ Value Proposition</h2>
            <p className="text-lg mb-4">
              Our Marketing Drip Campaign automation creates personalized, ongoing communication with your 
              diving customers, nurturing relationships and driving repeat bookings with minimal staff effort.
            </p>
            
            <p className="text-lg mb-4">
              Most diving businesses face a feast-or-famine cycle, with long periods between guest interactions.
              The average diver only returns every 8-14 months, and without consistent engagement, they often book
              with whoever is top-of-mind when planning their next trip.
            </p>

            <p className="text-lg mb-4">
              I created a comprehensive marketing automation system that maintains personalized connections with
              guests long after they've dried off from their last dive. Using AI-driven content generation,
              the system creates engaging, relevant communications based on guests' diving preferences, certification
              levels, and past experiences.
            </p>

            <p className="text-lg mb-4">
              The system intelligently segments your audience, delivering different content to beginners versus
              technical divers, warm-water enthusiasts versus cold-water adventurers. Communications can be 
              delivered via email, SMS, or WhatsApp, based on customer preference and engagement data.
            </p>

            <p className="text-lg mb-4">
              Built-in A/B testing continuously optimizes messaging, while seasonal promotions are automatically
              timed based on booking history and regional diving conditions. The result? Up to 40% higher repeat
              booking rates and significantly increased lifetime customer value.
            </p>
            
            <p className="text-lg font-medium text-entreprenology-coral mt-6">
              The takeaway? In diving, out of sight means out of mind—automated drip campaigns keep you visible.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-entreprenology-coral">
            The Challenge of Customer Retention
          </h2>
          <p className="mb-4">Most dive businesses struggle with:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">⏳</span>
              <span>Long intervals between customer bookings</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🧠</span>
              <span>Competing for mental real estate when customers plan trips</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠️</span>
              <span>Generic marketing that doesn't resonate with diverse diver needs</span>
            </li>
          </ul>
          <p className="italic">Without consistent engagement, even satisfied customers book elsewhere.</p>
          <hr className="my-8 border-entreprenology-coral/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-coral">
            AI-Powered Content Generation
          </h2>
          <p className="mb-4">Our system creates engaging, personalized content:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">🤖</span>
              <span>AI-generated messages tailored to individual diver profiles</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎯</span>
              <span>Content based on certification level, interests, and past trips</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🌊</span>
              <span>Educational material that builds diving confidence and enthusiasm</span>
            </li>
          </ul>
          <hr className="my-8 border-entreprenology-coral/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-coral">
            Smart Audience Segmentation
          </h2>
          <p className="mb-4">Deliver relevant messages to the right divers:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">🔍</span>
              <span>Segmentation by experience level and special interests</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📱</span>
              <span>Multi-channel delivery based on customer preferences</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🔄</span>
              <span>Behavior-triggered sequences based on engagement</span>
            </li>
          </ul>
          <p className="italic">💬 "Our repeat bookings increased by 42% in the first six months." - Resort Manager</p>
          <hr className="my-8 border-entreprenology-coral/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-coral">
            Optimized Campaigns
          </h2>
          <p className="mb-4">Continuously improve your marketing:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">🔬</span>
              <span>A/B testing to refine messaging and offers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🗓️</span>
              <span>Seasonal campaigns timed to regional diving conditions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📊</span>
              <span>Detailed analytics on campaign performance</span>
            </li>
          </ul>
          <hr className="my-8 border-entreprenology-coral/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-coral">
            The Bottom Line
          </h2>
          <div className="space-y-2 mb-6">
            <p className="flex items-center">
              <span className="mr-2">🔄</span>
              <span>Increase repeat booking rates by up to 40%</span>
            </p>
            <p className="flex items-center">
              <span className="mr-2">⏰</span>
              <span>Save 15+ hours per week on marketing activities</span>
            </p>
            <p className="flex items-center">
              <span className="mr-2">💰</span>
              <span>Boost lifetime customer value significantly</span>
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-entreprenology-coral">
              In diving, out of sight means out of mind—automated drip campaigns keep you visible.
            </p>
          </div>
        </section>
      </Card>
    </div>
  );
};
