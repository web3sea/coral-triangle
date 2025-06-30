
import { Navbar } from "@/components/Navbar";
import { DiveShopSection } from "@/components/DiveShopSection";
import { Store } from "lucide-react";
import { AutomationTabs } from "@/components/AutomationTabs";

const GuestBookingAssistant = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <AutomationTabs />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <Store className="h-9 w-9 text-entreprenology-coral" />
          Guest Booking Assistant
        </h1>
        
        <div className="mb-8">
          <div className="text-justify">
            <DiveShopSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestBookingAssistant;
