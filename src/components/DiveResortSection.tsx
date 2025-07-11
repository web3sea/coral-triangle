
import { Hotel } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const DiveResortSection = () => (
  <section className="mb-16">
    <SectionHeader
      icon={<Hotel />}
      title="Dive Resort AI Co-Pilot"
      color="text-entreprenology-coral"
      hideHeader={true}
    />
    <Card className="p-6 bg-entreprenology-bg border border-entreprenology-coral/20 text-gray-300 shadow-lg backdrop-blur-sm">
      <div className="space-y-8">
        <div className="bg-entreprenology-coral/10 p-6 rounded-lg border border-entreprenology-coral/20">
          <h2 className="text-2xl font-bold text-entreprenology-coral mb-4">✏️ Value Proposition</h2>
          <p className="text-lg">
            The AI-powered <strong>Guest Booking Assistant</strong> automates answers to 90% of common questions, dramatically reducing time spent on inquiries. The assistant engages with leads, learns about their travel plans (optionally adding data to the CRM), checks room and dive availability, and guides them toward making a deposit—streamlining the booking process while improving conversion rates.
          </p>
          
          <p className="text-lg font-medium text-entreprenology-yellow mt-8 mb-6">
            <strong>Major Pain Point</strong>: Dive resorts get flooded with Instagram DMs, WhatsApps, and emails asking about rooms, dive packages, transfers, and special requests.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-coral flex items-center gap-2">
            🧭 Operations & Logistics
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Smart Booking Manager:</strong> Synchronize room and dive trip availability across multiple platforms and handle last-minute changes.
            </div>
            <div>
              <strong>Transfer Coordinator:</strong> Arrange airport pickups, boat transfers, and local transportation based on guest arrivals.
            </div>
            <div>
              <strong>Resort Maintenance Tracker:</strong> Schedule preventative maintenance, manage room turnover, and coordinate repair tasks.
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-coral flex items-center gap-2">
            📞 Guest Communication & Experience
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Pre-Arrival Guide:</strong> Send personalized itineraries, packing suggestions, and local information before guest arrival.
            </div>
            <div>
              <strong>Onsite Concierge:</strong> Handle special requests, restaurant recommendations, and activity scheduling during stays.
            </div>
            <div>
              <strong>Multilingual Helper:</strong> Communicate with international guests in their preferred language across all channels.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-coral flex items-center gap-2">
            🧠 Staff & Dive Operations
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Dive Schedule Optimizer:</strong> Plan daily boat departures based on diver experience, site conditions, and group sizes.
            </div>
            <div>
              <strong>Staff Scheduler:</strong> Coordinate dive guides, instructors, boat crew, and resort staff based on occupancy.
            </div>
            <div>
              <strong>Equipment Manager:</strong> Track rental equipment, tank fills, and maintenance schedules across the resort operation.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-coral flex items-center gap-2">
            📸 Media & Marketing
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Guest Photographer:</strong> Organize underwater photos, create daily highlights, and manage guest image distribution.
            </div>
            <div>
              <strong>Social Media Manager:</strong> Create and schedule posts featuring recent sightings, guest experiences, and resort highlights.
            </div>
            <div>
              <strong>Review Collector:</strong> Automatically request, respond to, and showcase guest testimonials across platforms.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-coral flex items-center gap-2">
            🌱 Sustainability & Community
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Conservation Tracker:</strong> Document resort sustainability initiatives, plastic reduction, and energy savings.
            </div>
            <div>
              <strong>Local Experience Curator:</strong> Connect guests with authentic community experiences, local artisans, and cultural events.
            </div>
            <div>
              <strong>Environmental Educator:</strong> Share marine conservation information, local ecosystem facts, and participation opportunities.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-coral flex items-center gap-2">
            🧾 Business Operations
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Revenue Manager:</strong> Optimize room rates and package pricing based on seasons, occupancy, and competitor analysis.
            </div>
            <div>
              <strong>Expense Tracker:</strong> Monitor operational costs, supplier relationships, and budget adherence across departments.
            </div>
            <div>
              <strong>Compliance Assistant:</strong> Keep track of licenses, permits, safety certifications, and local regulatory requirements.
            </div>
          </div>
        </div>

      </div>
    </Card>
  </section>
);
