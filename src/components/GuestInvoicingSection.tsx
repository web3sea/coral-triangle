
import React from "react";
import { Card } from "@/components/ui/card";

export const GuestInvoicingSection = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <Card className="p-6 bg-entreprenology-bg border border-entreprenology-turquoise/20 text-gray-300 shadow-lg backdrop-blur-sm">
        <section>
          <div className="bg-entreprenology-turquoise/10 p-6 rounded-lg border border-entreprenology-turquoise/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-entreprenology-turquoise">✏️ Value Proposition</h2>
            <p className="text-lg mb-4">
              Our Guest Invoicing Assistant streamlines the entire billing process for your diving business, 
              from initial estimates to final payments, with AI-powered accuracy and automation.
            </p>
            
            <p className="text-lg mb-4">
              Traditional invoicing systems are error-prone and time-consuming, often requiring manual data entry
              and tedious follow-ups. This leads to delayed payments, administrative headaches, and unhappy guests.
            </p>

            <p className="text-lg mb-4">
              I designed a comprehensive invoicing solution that automates the entire process—from creating
              professional estimates to sending final bills and tracking payments. The system pulls data directly
              from your booking system, applying appropriate taxes, discounts, and package rates automatically.
            </p>

            <p className="text-lg mb-4">
              Every invoice is personalized, professionally branded, and available in multiple languages and currencies.
              Payment processing is seamless with integrated digital payment options, and automatic reminders ensure
              you get paid faster without awkward follow-up calls.
            </p>

            <p className="text-lg mb-4">
              Best of all, the system integrates with major accounting software, eliminating double-entry and 
              simplifying tax season. Your staff saves 5-10 hours weekly on paperwork while guests enjoy a 
              smoother, more professional experience.
            </p>
            
            <p className="text-lg font-medium text-entreprenology-turquoise mt-6">
              The takeaway? Modern diving businesses need modern financial tools.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-entreprenology-turquoise">
            Traditional Invoicing is Inefficient
          </h2>
          <p className="mb-4">Most dive operations struggle with:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">📝</span>
              <span>Manual data entry causing errors and inconsistencies</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⏱️</span>
              <span>Hours spent creating, sending, and tracking invoices</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">💸</span>
              <span>Delayed payments affecting cash flow</span>
            </li>
          </ul>
          <p className="italic">Even with existing software, the process remains fragmented and labor-intensive.</p>
          <hr className="my-8 border-entreprenology-turquoise/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-turquoise">
            Enter the AI Invoicing Assistant
          </h2>
          <p className="mb-4">Our solution transforms the entire billing workflow:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">🤖</span>
              <span>Automatic invoice generation from booking data</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🌐</span>
              <span>Multi-currency support with real-time exchange rates</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎨</span>
              <span>Professional templates with your branding</span>
            </li>
          </ul>
          <hr className="my-8 border-entreprenology-turquoise/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-turquoise">
            Seamless Payment Processing
          </h2>
          <p className="mb-4">Get paid faster with:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">💳</span>
              <span>Integrated payment options (credit cards, PayPal, bank transfers)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🔔</span>
              <span>Automated payment reminders and follow-ups</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📊</span>
              <span>Real-time payment tracking and reporting</span>
            </li>
          </ul>
          <p className="italic">💬 "We've reduced our payment collection time from weeks to days." - Happy Customer</p>
          <hr className="my-8 border-entreprenology-turquoise/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-turquoise">
            Accounting Integration
          </h2>
          <p className="mb-4">Simplify your financial management:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">🔄</span>
              <span>Seamless sync with QuickBooks, Xero, and other platforms</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📑</span>
              <span>Automatic record-keeping and tax categorization</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📈</span>
              <span>Financial reports and business insights</span>
            </li>
          </ul>
          <hr className="my-8 border-entreprenology-turquoise/30" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-entreprenology-turquoise">
            The Bottom Line
          </h2>
          <div className="space-y-2 mb-6">
            <p className="flex items-center">
              <span className="mr-2">⏰</span>
              <span>Save 5-10 hours per week on administrative tasks</span>
            </p>
            <p className="flex items-center">
              <span className="mr-2">💰</span>
              <span>Improve cash flow with faster payments</span>
            </p>
            <p className="flex items-center">
              <span className="mr-2">😊</span>
              <span>Enhance guest experience with professional financial interactions</span>
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-entreprenology-turquoise">
              Modern diving businesses need modern financial tools.
            </p>
          </div>
        </section>
      </Card>
    </div>
  );
};
