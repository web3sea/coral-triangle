
import { LifeBuoy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/card";

export const HomestaySection = () => (
  <section className="mb-16">
    <SectionHeader
      icon={<LifeBuoy />}
      title="Homestay AI Co-Pilot"
      color="text-entreprenology-turquoise"
      hideHeader={true}
    />
    <Card className="p-6 bg-entreprenology-bg border border-entreprenology-turquoise/20 text-gray-300 shadow-lg backdrop-blur-sm">
      <div className="space-y-8">
        <div className="bg-entreprenology-turquoise/10 p-6 rounded-lg border border-entreprenology-turquoise/20">
          <h2 className="text-2xl font-bold text-entreprenology-turquoise mb-4">✏️ Value Proposition</h2>
          <p className="text-lg">
            The AI-powered <strong>Guest Booking Assistant</strong> automates answers to 90% of common questions, dramatically reducing time spent on inquiries. The assistant engages with leads, learns about their travel plans (optionally adding data to the CRM), checks calendar availability, and guides them toward making a deposit—streamlining the booking process while improving conversion rates.
          </p>
          
          <p className="text-lg font-medium text-entreprenology-yellow mt-8 mb-6">
            <strong>Major Pain Point</strong>: Homestay operations get flooded with Instagram DMs, WhatsApps, and emails asking about prices, room availability, local activities, etc.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-turquoise flex items-center gap-2">
            🧭 Operations & Logistics
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Smart Booking Manager:</strong> Sync room availability with dive trip schedules, update multiple booking platforms in real time (Airbnb, Booking.com, etc).
            </div>
            <div>
              <strong>Housekeeping Coordination:</strong> Auto-schedule cleaning and turnover based on guest check-ins/outs and dive trip timing.
            </div>
            <div>
              <strong>Local Vendor Assistant:</strong> Automate grocery/restock orders for breakfast, coffee, or guest amenities from local suppliers.
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-turquoise flex items-center gap-2">
            📞 Guest Communication & Support
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Multilingual Concierge:</strong> Handle inquiries, check-ins, and custom requests via WhatsApp, email, or your website.
            </div>
            <div>
              <strong>Itinerary Builder:</strong> Suggest personalized activity plans combining dives, cultural tours, and food based on guest profiles.
            </div>
            <div>
              <strong>Upsell Assistant:</strong> Recommend add-ons like massages, gear rentals, or extra night stays via AI-generated messages.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-turquoise flex items-center gap-2">
            🧠 Training & Staff Management
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Shift Scheduler:</strong> Coordinate local staff rosters based on occupancy and dive center needs.
            </div>
            <div>
              <strong>Feedback Trainer:</strong> Summarize guest reviews and suggest actionable staff training tips automatically.
            </div>
            <div>
              <strong>Guest Profile Tracker:</strong> Keep a soft CRM of guest preferences for return visits and personalized experiences.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-turquoise flex items-center gap-2">
            📸 Media & Marketing
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Social Content Assistant:</strong> Generate captions, reels, and blog posts featuring your property, location, and guest stories.
            </div>
            <div>
              <strong>Album Builder:</strong> Sort guest media into folders based on stay dates and activities, and send with thank-you notes.
            </div>
            <div>
              <strong>Review Collector:</strong> Automate polite review requests with personalized wording based on stay experience.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-turquoise flex items-center gap-2">
            🌱 Eco + Community Impact
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Local Product Tracker:</strong> Track purchases from local producers or eco-partners for impact reporting.
            </div>
            <div>
              <strong>Green Guest Nudges:</strong> Send automated reminders to refill water bottles, conserve energy, or participate in beach cleanups.
            </div>
            <div>
              <strong>Homestay Impact Storyteller:</strong> Turn your sustainability efforts into guest-facing stories or donation prompts.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-turquoise flex items-center gap-2">
            🧾 Admin & Compliance
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Auto-Invoicing:</strong> Send branded invoices or receipts with tax info and guest data synced from booking platforms.
            </div>
            <div>
              <strong>Compliance Tracker:</strong> Remind hosts about business permits, waste handling rules, and village contribution policies.
            </div>
            <div>
              <strong>Pricing Optimizer:</strong> Suggest nightly rates based on demand, season, dive calendar, and competitor trends.
            </div>
          </div>
        </div>
      </div>
    </Card>
  </section>
);
