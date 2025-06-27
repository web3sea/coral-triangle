import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-entreprenology-bg text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Link to="/" className="mb-4">
          <div className="flex items-center justify-center w-full">
            <img
              src="/opengraph-image.png"
              alt="Entreprenology Logo"
              className={`${
                isMobile ? "w-full" : "h-12 w-auto"
              } object-contain`}
            />
          </div>
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <Link
            to="/privacy-policy"
            className="text-sm text-gray-300 hover:text-entreprenology-turquoise transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-sm text-gray-300 hover:text-entreprenology-turquoise transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        {!isMobile && (
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Entreprenology. All rights reserved.
          </p>
        )}
      </div>
    </footer>
  );
};
