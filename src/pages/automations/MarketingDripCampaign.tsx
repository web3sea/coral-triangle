
import { Navbar } from "@/components/Navbar";
import { Droplets } from "lucide-react";
import { MarketingDripSection } from "@/components/MarketingDripSection";
import { AutomationTabs } from "@/components/AutomationTabs";

const MarketingDripCampaign = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <AutomationTabs />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <Droplets className="h-9 w-9 text-entreprenology-coral" />
          Marketing Drip Campaign
        </h1>
        
        <div className="mb-8">
          <div className="text-justify">
            <MarketingDripSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingDripCampaign;
