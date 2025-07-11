
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Discovery from "./pages/Discovery";
import Intake from "./pages/Intake";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Import automations pages
import HomestayCoPliot from "./pages/agents/HomestayCoPliot";
import LiveaboardCoPliot from "./pages/agents/LiveaboardCoPliot";
import FreedivingCoPliot from "./pages/agents/FreedivingCoPliot";
import DiveShopCoPliot from "./pages/agents/DiveShopCoPliot";
import DiveResortCoPliot from "./pages/agents/DiveResortCoPliot";
import GuestBookingAssistant from "./pages/automations/GuestBookingAssistant";
import SalesAdminCoPliot from "./pages/automations/SalesAdminCoPliot";
import GuestInvoicingAssistant from "./pages/automations/GuestInvoicingAssistant";
import VoiceAgentQualifier from "./pages/automations/VoiceAgentQualifier";
import MarketingDripCampaign from "./pages/automations/MarketingDripCampaign";
import { AppN8NChatBot } from "./components/features/app-n8n-chat-bot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/automations/guest-booking-assistant" element={<GuestBookingAssistant />} />
              <Route path="/automations/sales-admin" element={<SalesAdminCoPliot />} />
              <Route path="/automations/guest-invoicing" element={<GuestInvoicingAssistant />} />
              <Route path="/automations/voice-agent-qualifier" element={<VoiceAgentQualifier />} />
              <Route path="/automations/marketing-drip" element={<MarketingDripCampaign />} />
              <Route path="/agents/homestay" element={<HomestayCoPliot />} />
              <Route path="/agents/liveaboard" element={<LiveaboardCoPliot />} />
              <Route path="/agents/freediving" element={<FreedivingCoPliot />} />
              <Route path="/agents/dive-shop" element={<DiveShopCoPliot />} />
              <Route path="/agents/dive-resort" element={<DiveResortCoPliot />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/intake" element={<Intake />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
