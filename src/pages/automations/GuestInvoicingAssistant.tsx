
import { Navbar } from "@/components/Navbar";
import { Receipt } from "lucide-react";
import { GuestInvoicingSection } from "@/components/GuestInvoicingSection";
import { AutomationTabs } from "@/components/AutomationTabs";

const GuestInvoicingAssistant = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <AutomationTabs />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <Receipt className="h-9 w-9 text-entreprenology-turquoise" />
          Guest Invoicing Assistant
        </h1>
        
        <div className="mb-8">
          <div className="text-justify">
            <GuestInvoicingSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestInvoicingAssistant;
