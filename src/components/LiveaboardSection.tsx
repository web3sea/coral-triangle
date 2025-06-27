import { Ship } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const LiveaboardSection = () => (
  <section className="mb-16">
    <SectionHeader
      icon={<Ship />}
      title="Liveaboard AI Co-Pilot"
      color="text-entreprenology-brickred"
      hideHeader={true}
    />
    <Card className="p-6 bg-entreprenology-bg border border-entreprenology-turquoise/20 text-gray-300 shadow-lg backdrop-blur-sm">
      <div className="space-y-12">
        <div className="bg-entreprenology-brickred/10 p-6 rounded-lg border border-entreprenology-brickred/20">
          <h2 className="text-2xl font-bold text-entreprenology-brickred mb-4">✏️ Value Proposition</h2>
          <p className="text-lg">
            The AI-powered <strong>Guest Booking Assistant</strong> automates answers to 90% of common questions, dramatically reducing time spent on inquiries. The assistant engages with leads, learns about their travel plans (optionally adding data to the CRM), checks calendar availability, and guides them toward making a deposit—streamlining the booking process while improving conversion rates.
          </p>
          
          <p className="text-lg font-medium text-entreprenology-yellow mt-8 mb-6">
            <strong>Major Pain Point</strong>: Liveaboard operations get flooded with Instagram DMs, WhatsApps, and emails asking about prices, trip availability, certification requirements, etc.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-brickred flex items-center gap-2">
            🧭 Trip Planning & Operations
          </h3>
          <ul className="space-y-4">
            <li><strong>Route Optimizer:</strong> Suggest itineraries based on conditions.</li>
            <li><strong>Inventory Assistant:</strong> Track food, gear, and safety equipment.</li>
            <li><strong>Crew Roster Bot:</strong> Handle shifts, visas, and sleep schedules.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-brickred flex items-center gap-2">
            📞 Guest Communication & Onboarding
          </h3>
          <ul className="space-y-4">
            <li><strong>Pre-Trip Assistant:</strong> Send checklists and dietary forms.</li>
            <li><strong>Check-In Chatbot:</strong> Manage arrivals and cabin assignments.</li>
            <li><strong>Guest Profile System:</strong> Store guest data for crew briefings.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-brickred flex items-center gap-2">
            🧠 Dive Briefings & Safety
          </h3>
          <ul className="space-y-4">
            <li><strong>Auto Briefing Generator:</strong> Create briefings with visuals and safety notes.</li>
            <li><strong>Incident Log Tracker:</strong> Maintain logs of incidents.</li>
            <li><strong>Crew Knowledge Assistant:</strong> Offer safety refresher drills.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-brickred flex items-center gap-2">
            📸 Guest Media & Experience
          </h3>
          <ul className="space-y-4">
            <li><strong>Trip Album Generator:</strong> Organize photos by name and activity.</li>
            <li><strong>Highlight Video Editor:</strong> Create end-of-trip highlight videos.</li>
            <li><strong>Review Collector:</strong> Prompt for guest reviews.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-brickred flex items-center gap-2">
            🌱 Sustainability & Impact
          </h3>
          <ul className="space-y-4">
            <li><strong>Eco Trip Summary:</strong> Generate sustainability and sightings reports.</li>
            <li><strong>Carbon Offset Messenger:</strong> Offer offset options post-trip.</li>
            <li><strong>Guest Conservation Log:</strong> Collect marine life sightings from guests.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-brickred flex items-center gap-2">
            🧾 Admin & Compliance
          </h3>
          <ul className="space-y-4">
            <li><strong>Expense Tracker:</strong> Categorize expenses and crew pay.</li>
            <li><strong>Manifest Generator:</strong> Auto-fill manifests and rosters.</li>
            <li><strong>Regulation Reminder:</strong> Alert of expiring permits and certs.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-brickred flex items-center gap-2">
            📊 CRM
          </h3>
          
          {/* First CRM Table */}
          <h4 className="text-lg font-medium text-entreprenology-yellow mb-2">Guest Information</h4>
          <div className="overflow-x-auto mb-8">
            <Table className="w-full border-collapse">
              <TableHeader className="bg-entreprenology-brickred/20">
                <TableRow>
                  <TableHead className="text-entreprenology-brickred">Created Date</TableHead>
                  <TableHead className="text-entreprenology-brickred">Status</TableHead>
                  <TableHead className="text-entreprenology-brickred">Lead Source</TableHead>
                  <TableHead className="text-entreprenology-brickred">Full Name</TableHead>
                  <TableHead className="text-entreprenology-brickred">Guest Dates</TableHead>
                  <TableHead className="text-entreprenology-brickred">Party Size</TableHead>
                  <TableHead className="text-entreprenology-brickred">Dive Cert</TableHead>
                  <TableHead className="text-entreprenology-brickred">Newsletter Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-t border-entreprenology-turquoise/20">
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Second CRM Table */}
          <h4 className="text-lg font-medium text-entreprenology-yellow mb-2">Contact & Professional Details</h4>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader className="bg-entreprenology-brickred/20">
                <TableRow>
                  <TableHead className="text-entreprenology-brickred">Email</TableHead>
                  <TableHead className="text-entreprenology-brickred">WhatsApp</TableHead>
                  <TableHead className="text-entreprenology-brickred">Instagram</TableHead>
                  <TableHead className="text-entreprenology-brickred">LinkedIn</TableHead>
                  <TableHead className="text-entreprenology-brickred">Profile Image</TableHead>
                  <TableHead className="text-entreprenology-brickred">Job Title</TableHead>
                  <TableHead className="text-entreprenology-brickred">Career Years</TableHead>
                  <TableHead className="text-entreprenology-brickred">Country</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-t border-entreprenology-turquoise/20">
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                  <TableCell className="text-gray-300"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Card>
  </section>
);
