
import React from "react";

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  color?: string;
  hideHeader?: boolean;
  className?: string;
}

export const SectionHeader = ({ 
  icon, 
  title, 
  description, 
  color = "text-entreprenology-turquoise", 
  hideHeader = false,
  className = "" 
}: SectionHeaderProps) => (
  <div className={className}>
    {!hideHeader && (
      <div className="flex items-center gap-3 mb-6">
        {icon && <div className={`h-8 w-8 ${color}`}>{icon}</div>}
        <h2 className={`text-3xl font-semibold ${color}`}>
          {title}
        </h2>
      </div>
    )}
    {description && (
      <p className="text-gray-300 text-lg mb-8 max-w-3xl">
        {description}
      </p>
    )}
  </div>
);
