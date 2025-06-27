import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const FreedivingSchoolSection = () => (
  <section className="mb-16">
    <SectionHeader
      icon={<Users />}
      title="Freediving School AI Co-Pilot"
      color="text-entreprenology-yellow"
      hideHeader={true}
    />
    <Card className="p-6 bg-entreprenology-bg border border-entreprenology-turquoise/20 text-gray-300 shadow-lg backdrop-blur-sm">
      <div className="space-y-12">
        <div className="bg-entreprenology-yellow/10 p-6 rounded-lg border border-entreprenology-yellow/20">
          <h2 className="text-2xl font-bold text-entreprenology-yellow mb-4">✏️ Value Proposition</h2>
          <p className="text-lg">
            The AI-powered <strong>Guest Booking Assistant</strong> automates answers to 90% of common questions, dramatically reducing time spent on inquiries. The assistant engages with leads, learns about their travel plans (optionally adding data to the CRM), checks calendar availability, and guides them toward making a deposit—streamlining the booking process while improving conversion rates.
          </p>
          
          <p className="text-lg font-medium text-entreprenology-yellow mt-8 mb-6">
            <strong>Major Pain Point</strong>: Freediving schools get flooded with Instagram DMs, WhatsApps, and emails asking about prices, class availability, skill requirements, etc.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-yellow flex items-center gap-2">
            🧭 Course & Class Logistics
          </h3>
          <ul className="space-y-4">
            <li><strong>Class Scheduler:</strong> Plan sessions with weather, instructor, and student levels in mind.</li>
            <li><strong>Equipment Monitor:</strong> Track use and cleanliness of all gear.</li>
            <li><strong>Condition Assistant:</strong> Recommend the best sites based on tides and wind.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-yellow flex items-center gap-2">
            📞 Student Communication & Booking
          </h3>
          <ul className="space-y-4">
            <li><strong>AI Student Assistant:</strong> Manage sign-ups, forms, gear, and reminders.</li>
            <li><strong>Progress Tracker:</strong> Update students on skills and next steps.</li>
            <li><strong>Community Builder:</strong> Invite to events, meetups, and student groups.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-yellow flex items-center gap-2">
            🧠 Learning & Safety
          </h3>
          <ul className="space-y-4">
            <li><strong>Theory Bot:</strong> Reinforce theory with quizzes and study prompts.</li>
            <li><strong>Safety Drill Reminder:</strong> Suggest rescue drills and safety routines.</li>
            <li><strong>Digital Logbook:</strong> Track PBs and sync feedback.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-yellow flex items-center gap-2">
            📸 Media & Growth
          </h3>
          <ul className="space-y-4">
            <li><strong>Highlight Reels:</strong> Auto-edit GoPro footage for students.</li>
            <li><strong>Milestone Sharer:</strong> Social posts for achievements.</li>
            <li><strong>Feedback Looper:</strong> Turn reviews into testimonials.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-yellow flex items-center gap-2">
            🌱 Wellness & Eco-Consciousness
          </h3>
          <ul className="space-y-4">
            <li><strong>Breathwork Journal:</strong> Digital space to log practice and recovery.</li>
            <li><strong>Plastic-Free Prompter:</strong> Sustainability and hydration nudges.</li>
            <li><strong>Ocean Advocacy Messenger:</strong> Share events and conservation news.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-yellow flex items-center gap-2">
            🧾 Business Ops
          </h3>
          <ul className="space-y-4">
            <li><strong>Earnings Tracker:</strong> Visualize class income and hours.</li>
            <li><strong>Form Auto-Filler:</strong> Pre-fill waivers and medical forms.</li>
            <li><strong>Instructor Scheduler:</strong> Manage instructor schedules and certs.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-entreprenology-yellow flex items-center gap-2">
            📊 CRM
          </h3>
          
          {/* First CRM Table */}
          <h4 className="text-lg font-medium text-entreprenology-yellow mb-2">Student Information</h4>
          <div className="overflow-x-auto mb-8">
            <Table className="w-full border-collapse">
              <TableHeader className="bg-entreprenology-yellow/20">
                <TableRow>
                  <TableHead className="text-entreprenology-yellow">Created Date</TableHead>
                  <TableHead className="text-entreprenology-yellow">Status</TableHead>
                  <TableHead className="text-entreprenology-yellow">Lead Source</TableHead>
                  <TableHead className="text-entreprenology-yellow">Full Name</TableHead>
                  <TableHead className="text-entreprenology-yellow">Course Dates</TableHead>
                  <TableHead className="text-entreprenology-yellow">Group Size</TableHead>
                  <TableHead className="text-entreprenology-yellow">Current Level</TableHead>
                  <TableHead className="text-entreprenology-yellow">Newsletter Date</TableHead>
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
          <h4 className="text-lg font-medium text-entreprenology-yellow mb-2">Contact & Personal Details</h4>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader className="bg-entreprenology-yellow/20">
                <TableRow>
                  <TableHead className="text-entreprenology-yellow">Email</TableHead>
                  <TableHead className="text-entreprenology-yellow">WhatsApp</TableHead>
                  <TableHead className="text-entreprenology-yellow">Instagram</TableHead>
                  <TableHead className="text-entreprenology-yellow">Emergency Contact</TableHead>
                  <TableHead className="text-entreprenology-yellow">Profile Image</TableHead>
                  <TableHead className="text-entreprenology-yellow">Medical Info</TableHead>
                  <TableHead className="text-entreprenology-yellow">Equipment Size</TableHead>
                  <TableHead className="text-entreprenology-yellow">Country</TableHead>
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
