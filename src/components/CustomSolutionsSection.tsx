import { Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";

export const CustomSolutionsSection = () => (
  <section className="mb-16">
    <SectionHeader
      icon={<Wrench />}
      title="Custom AI Solutions"
      color="text-entreprenology-yellow"
    />
    <Card className="p-6 bg-entreprenology-bg border border-entreprenology-turquoise/20 shadow-lg backdrop-blur-sm">
      <p className="text-lg text-gray-300 mb-6">
        For dive operations with unique requirements, our Custom AI Solutions provide tailored automation and intelligence. We work closely with your team to identify specific challenges and develop AI co-pilots that address your particular needs.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        Whether you're focused on marine conservation, specialized dive training, or underwater photography tours, our custom solutions integrate with your existing processes while introducing advanced AI capabilities to enhance your services.
      </p>
      <p className="text-lg text-gray-300">
        Each custom solution begins with a comprehensive assessment of your operations, followed by iterative development and implementation, ensuring that the final product aligns perfectly with your business objectives.
      </p>
    </Card>
  </section>
);
