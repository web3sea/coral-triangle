
import { Navbar } from "@/components/Navbar";
import { HomestaySection } from "@/components/HomestaySection";
import { LifeBuoy } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HomestayCoPliot = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
              <LifeBuoy className="h-9 w-9 text-entreprenology-turquoise" />
              Homestay AI Co-Pilot
            </h1>
            <HomestaySection />
          </div>
          <div className="md:w-1/3 shrink-0">
            <div className="sticky top-24">
              <AspectRatio ratio={3/2} className="rounded-lg overflow-hidden bg-entreprenology-turquoise/10">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Homestay Management System"
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

export default HomestayCoPliot;
