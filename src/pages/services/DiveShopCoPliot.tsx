
import { Navbar } from "@/components/Navbar";
import { DiveShopSection } from "@/components/DiveShopSection";
import { Store } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const DiveShopCoPliot = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
              <Store className="h-9 w-9 text-entreprenology-coral" />
              Dive Shop AI Co-Pilot
            </h1>
            <DiveShopSection />
          </div>
          <div className="md:w-1/3 shrink-0">
            <div className="sticky top-24">
              <AspectRatio ratio={3/2} className="rounded-lg overflow-hidden bg-entreprenology-coral/10">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Dive Shop Management System"
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

export default DiveShopCoPliot;
