
import { Store } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const DiveShopSection = () => (
  <section className="mb-16">
    <SectionHeader
      icon={<Store />}
      title="Dive Shop AI Co-Pilot"
      color="text-entreprenology-brickred"
      hideHeader={true}
    />
    <Card className="p-6 bg-entreprenology-bg border border-entreprenology-brickred/20 text-gray-300 shadow-lg backdrop-blur-sm">
      <div className="space-y-8">
        <div className="bg-entreprenology-brickred/10 p-6 rounded-lg border border-entreprenology-brickred/20">
          <h2 className="text-2xl font-bold text-entreprenology-brickred mb-4">✏️ Value Proposition</h2>
          <p className="text-lg">
            The AI-powered <strong>Guest Booking Assistant</strong> automates answers to 90% of common questions, dramatically reducing time spent on inquiries. The assistant engages with leads, learns about their dive plans (optionally adding data to the CRM), checks gear availability, and guides them toward making a deposit—streamlining the booking process while improving conversion rates.
          </p>
          
          <p className="text-lg font-medium text-entreprenology-yellow mt-8 mb-6">
            <strong>Major Pain Point</strong>: Dive shops get flooded with Instagram DMs, WhatsApps, and emails asking about prices, gear availability, dive sites, etc.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-brickred flex items-center gap-2">
            🧭 Operations & Logistics
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Equipment Tracker:</strong> Monitor gear usage, maintenance schedules, and rental availability in real-time.
            </div>
            <div>
              <strong>Inventory Management:</strong> Auto-track stock levels, send reorder alerts, and manage supplier relationships.
            </div>
            <div>
              <strong>Dive Trip Scheduler:</strong> Coordinate boats, guides, and equipment based on bookings and weather conditions.
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-brickred flex items-center gap-2">
            📞 Customer Communication & Support
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Dive Chat Assistant:</strong> Answer customer queries about gear specs, dive sites, and pricing 24/7.
            </div>
            <div>
              <strong>Booking Manager:</strong> Handle reservations, confirm availability, and process payments via messaging apps.
            </div>
            <div>
              <strong>Trip Planner:</strong> Help customers build personalized dive itineraries based on experience level and interests.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-brickred flex items-center gap-2">
            🧠 Training & Staff Management
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Instructor Scheduler:</strong> Optimize instructor allocation based on certifications, languages, and customer needs.
            </div>
            <div>
              <strong>Certification Tracker:</strong> Monitor staff qualifications, renewal dates, and continuing education requirements.
            </div>
            <div>
              <strong>Knowledge Base:</strong> Provide instant access to equipment manuals, repair guides, and dive procedures.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-brickred flex items-center gap-2">
            📸 Media & Marketing
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Content Creator:</strong> Generate social posts, newsletters, and special offers based on inventory and dive conditions.
            </div>
            <div>
              <strong>Photo Manager:</strong> Organize dive trip photos, create customer albums, and recommend share-worthy shots.
            </div>
            <div>
              <strong>Testimonial Collector:</strong> Automatically request, organize, and display customer reviews after dive experiences.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-brickred flex items-center gap-2">
            🌱 Conservation & Community
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Eco-Initiative Tracker:</strong> Document shop conservation efforts, plastic reduction, and community impact.
            </div>
            <div>
              <strong>Marine Life Reporter:</strong> Collect and share recent sightings, conditions, and conservation news.
            </div>
            <div>
              <strong>Event Organizer:</strong> Coordinate and promote beach cleanups, conservation talks, and community dive days.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-entreprenology-brickred flex items-center gap-2">
            🧾 Admin & Compliance
          </h3>
          <div className="space-y-2">
            <div>
              <strong>Financial Dashboard:</strong> Track revenue streams, rental usage, and lesson profitability in real-time.
            </div>
            <div>
              <strong>Safety Monitor:</strong> Ensure proper logging of equipment checks, tank fills, and maintenance schedules.
            </div>
            <div>
              <strong>Customer History:</strong> Maintain comprehensive records of certifications, experience, and equipment preferences.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-brickred flex items-center gap-2">
            📊 CRM
          </h3>
          
          {/* First CRM Table */}
          <h4 className="text-lg font-medium text-entreprenology-yellow mb-2">Customer Information</h4>
          <div className="overflow-x-auto mb-8">
            <Table className="w-full border-collapse">
              <TableHeader className="bg-entreprenology-brickred/20">
                <TableRow>
                  <TableHead className="text-entreprenology-brickred">Created Date</TableHead>
                  <TableHead className="text-entreprenology-brickred">Status</TableHead>
                  <TableHead className="text-entreprenology-brickred">Lead Source</TableHead>
                  <TableHead className="text-entreprenology-brickred">Full Name</TableHead>
                  <TableHead className="text-entreprenology-brickred">Dive Dates</TableHead>
                  <TableHead className="text-entreprenology-brickred">Group Size</TableHead>
                  <TableHead className="text-entreprenology-brickred">Certification</TableHead>
                  <TableHead className="text-entreprenology-brickred">Newsletter Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-t border-entreprenology-brickred/20">
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
          <h4 className="text-lg font-medium text-entreprenology-yellow mb-2">Contact & Equipment Preferences</h4>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader className="bg-entreprenology-brickred/20">
                <TableRow>
                  <TableHead className="text-entreprenology-brickred">Email</TableHead>
                  <TableHead className="text-entreprenology-brickred">WhatsApp</TableHead>
                  <TableHead className="text-entreprenology-brickred">Instagram</TableHead>
                  <TableHead className="text-entreprenology-brickred">Equipment Size</TableHead>
                  <TableHead className="text-entreprenology-brickred">Profile Image</TableHead>
                  <TableHead className="text-entreprenology-brickred">Dive Sites</TableHead>
                  <TableHead className="text-entreprenology-brickred">Return Customer</TableHead>
                  <TableHead className="text-entreprenology-brickred">Country</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-t border-entreprenology-brickred/20">
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
