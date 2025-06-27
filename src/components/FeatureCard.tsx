
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="p-6 bg-entreprenology-bg border border-entreprenology-turquoise/20 hover:border-entreprenology-turquoise/40 transition-colors shadow-lg backdrop-blur-sm">
    <div className="mb-4 text-entreprenology-turquoise">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </Card>
);
