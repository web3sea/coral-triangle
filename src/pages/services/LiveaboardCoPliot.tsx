
import { Navbar } from "@/components/Navbar";
import { LiveaboardSection } from "@/components/LiveaboardSection";
import { Ship } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LiveaboardCoPliot = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
              <Ship className="h-9 w-9 text-entreprenology-brickred" />
              Liveaboard AI Co-Pilot
            </h1>
            <LiveaboardSection />
          </div>
          <div className="md:w-1/3 shrink-0">
            <div className="sticky top-24">
              <AspectRatio ratio={3/2} className="rounded-lg overflow-hidden bg-entreprenology-brickred/10">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Liveaboard Management System"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveaboardCoPliot;
