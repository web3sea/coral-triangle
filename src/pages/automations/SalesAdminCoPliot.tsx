
import { Navbar } from "@/components/Navbar";
import { SalesAdminSection } from "@/components/SalesAdminSection";
import { ShoppingCart } from "lucide-react";
import { AutomationTabs } from "@/components/AutomationTabs";

const SalesAdminCoPliot = () => {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <AutomationTabs />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <ShoppingCart className="h-9 w-9 text-entreprenology-yellow" />
          Sales Administration
        </h1>
        
        <div className="mb-8">
          <div className="text-justify">
            <SalesAdminSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAdminCoPliot;
