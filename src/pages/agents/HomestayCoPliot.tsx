
import { Navbar } from "@/components/Navbar";
import { HomestaySection } from "@/components/HomestaySection";
import { LifeBuoy } from "lucide-react";
import { AgentTabs } from "@/components/AgentTabs";

const HomestayCoPliot = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <AgentTabs />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <LifeBuoy className="h-9 w-9 text-entreprenology-turquoise" />
          Homestay AI Co-Pilot
        </h1>
        
        <div className="mb-8">
          <HomestaySection />
        </div>
      </div>
    </div>
  );
};

export default HomestayCoPliot;
