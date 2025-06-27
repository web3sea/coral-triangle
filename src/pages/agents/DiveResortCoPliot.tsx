
import { Navbar } from "@/components/Navbar";
import { DiveResortSection } from "@/components/DiveResortSection";
import { Hotel } from "lucide-react";

const DiveResortCoPliot = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <Hotel className="h-9 w-9 text-entreprenology-coral" />
          Dive Resort AI Co-Pilot
        </h1>
        
        <div className="mb-8">
          <DiveResortSection />
        </div>
      </div>
    </div>
  );
};

export default DiveResortCoPliot;
