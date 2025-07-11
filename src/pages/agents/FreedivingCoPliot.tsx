
import { Navbar } from "@/components/Navbar";
import { FreedivingSchoolSection } from "@/components/FreedivingSchoolSection";
import { Users } from "lucide-react";
import { AgentTabs } from "@/components/AgentTabs";

const FreedivingCoPliot = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <AgentTabs />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <Users className="h-9 w-9 text-entreprenology-yellow" />
          Freediving School AI Co-Pilot
        </h1>
        
        <div className="mb-8">
          <FreedivingSchoolSection />
        </div>
      </div>
    </div>
  );
};

export default FreedivingCoPliot;
