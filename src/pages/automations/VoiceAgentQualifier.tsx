
import { Navbar } from "@/components/Navbar";
import { Mic } from "lucide-react";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { AutomationTabs } from "@/components/AutomationTabs";

const VoiceAgentQualifier = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <AutomationTabs />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <Mic className="h-9 w-9 text-entreprenology-yellow" />
          Voice Agent Qualifier
        </h1>
        
        <div className="mb-8">
          <div className="text-justify">
            <VoiceAgentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgentQualifier;
