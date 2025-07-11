
import { Navbar } from "@/components/Navbar";
import { LiveaboardSection } from "@/components/LiveaboardSection";
import { Ship } from "lucide-react";
import { AgentTabs } from "@/components/AgentTabs";

const LiveaboardCoPliot = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <AgentTabs />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <Ship className="h-9 w-9 text-entreprenology-brickred" />
          Liveaboard AI Co-Pilot
        </h1>
        
        <div className="mb-8">
          <LiveaboardSection />
        </div>
      </div>
    </div>
  );
};

export default LiveaboardCoPliot;
