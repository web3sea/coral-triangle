
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  const isAutomationActive = () => location.pathname.includes("/automations/");
  const isAgentsActive = () => location.pathname.includes("/agents/");
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border border-entreprenology-coral/40 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cdb7213a-f7d2-4f38-bf6d-ea2a572528b6.png" 
              alt="Entreprenology Logo" 
              className="h-8 w-auto" 
            />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-entreprenology-turquoise"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-entreprenology-turquoise ${
                isActive("/") ? "text-entreprenology-turquoise" : "text-white"
              }`}
            >
              Home
            </Link>
            
            {/* Case Studies Link */}
            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-entreprenology-turquoise ${
                isActive("/case-studies") ? "text-entreprenology-turquoise" : "text-white"
              }`}
            >
              Case Studies
            </Link>
            
            {/* Automations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors hover:text-entreprenology-turquoise ${
                isAutomationActive() ? "text-entreprenology-turquoise" : "text-white"
              }`}>
                Automations <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-entreprenology-bg border border-entreprenology-coral/40 text-white min-w-[160px]">
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/automations/guest-booking-assistant"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Guest Booking Assistant
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/automations/sales-admin"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sales Administration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/automations/guest-invoicing"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Guest Invoicing Assistant
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/automations/voice-agent-qualifier"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Voice Agent Qualifier
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/automations/marketing-drip"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Marketing Drip Campaign
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Agents Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors hover:text-entreprenology-turquoise ${
                isAgentsActive() || isActive("/agents") ? "text-entreprenology-turquoise" : "text-white"
              }`}>
                Agents <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-entreprenology-bg border border-entreprenology-coral/40 text-white min-w-[160px]">
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/agents/homestay"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Homestay
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/agents/liveaboard"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Liveaboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/agents/freediving"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Freediving
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/agents/dive-shop"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dive Shop
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-entreprenology-coral/20 focus:bg-entreprenology-coral/20">
                  <Link
                    to="/agents/dive-resort"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dive Resort
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact">
              <Button variant="default" className="bg-entreprenology-coral text-white hover:bg-entreprenology-coral/80">
                Get In Touch
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-entreprenology-bg/95 backdrop-blur-sm border-t border-entreprenology-coral/40">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              to="/"
              className={`block text-base font-medium ${
                isActive("/") ? "text-entreprenology-turquoise" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Case Studies Link in Mobile Menu */}
            <Link
              to="/case-studies"
              className={`block text-base font-medium ${
                isActive("/case-studies") ? "text-entreprenology-turquoise" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </Link>
            
            {/* Mobile Automations Section */}
            <div className="space-y-2">
              <p className="text-base font-medium text-entreprenology-turquoise">Automations</p>
              
              <div className="pl-4 space-y-2">
                <Link
                  to="/automations/guest-booking-assistant"
                  className={`block text-base font-medium ${
                    isActive("/automations/guest-booking-assistant") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Guest Booking Assistant
                </Link>
                
                <Link
                  to="/automations/sales-admin"
                  className={`block text-base font-medium ${
                    isActive("/automations/sales-admin") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Sales Administration
                </Link>
                
                <Link
                  to="/automations/guest-invoicing"
                  className={`block text-base font-medium ${
                    isActive("/automations/guest-invoicing") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Guest Invoicing Assistant
                </Link>
                
                <Link
                  to="/automations/voice-agent-qualifier"
                  className={`block text-base font-medium ${
                    isActive("/automations/voice-agent-qualifier") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Voice Agent Qualifier
                </Link>
                
                <Link
                  to="/automations/marketing-drip"
                  className={`block text-base font-medium ${
                    isActive("/automations/marketing-drip") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Marketing Drip Campaign
                </Link>
              </div>
            </div>
            
            {/* Mobile Agents Section */}
            <div className="space-y-2">
              <p className="text-base font-medium text-entreprenology-turquoise">Agents</p>
              
              <div className="pl-4 space-y-2">
                <Link
                  to="/agents/homestay"
                  className={`block text-base font-medium ${
                    isActive("/agents/homestay") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Homestay
                </Link>
                
                <Link
                  to="/agents/liveaboard"
                  className={`block text-base font-medium ${
                    isActive("/agents/liveaboard") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Liveaboard
                </Link>
                
                <Link
                  to="/agents/freediving"
                  className={`block text-base font-medium ${
                    isActive("/agents/freediving") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Freediving
                </Link>

                <Link
                  to="/agents/dive-shop"
                  className={`block text-base font-medium ${
                    isActive("/agents/dive-shop") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Dive Shop
                </Link>

                <Link
                  to="/agents/dive-resort"
                  className={`block text-base font-medium ${
                    isActive("/agents/dive-resort") ? "text-entreprenology-turquoise" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Dive Resort
                </Link>
              </div>
            </div>
            
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <Button variant="default" className="bg-entreprenology-coral text-white hover:bg-entreprenology-coral/80 w-full">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
