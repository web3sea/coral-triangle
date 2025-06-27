
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { User, UserRound } from "lucide-react";

const Agents = () => {
  return (
    <div className="min-h-screen flex flex-col bg-entreprenology-bg text-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Agents"
            description="Meet our intelligent AI agents designed to enhance your business operations"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-entreprenology-bg border border-entreprenology-coral/40">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="bg-entreprenology-coral/20 p-4 rounded-full mb-4">
                    <User className="h-12 w-12 text-entreprenology-turquoise" />
                  </div>
                  <h3 className="text-xl font-semibold text-entreprenology-turquoise mb-2">Booking Assistant</h3>
                  <p className="text-center text-gray-300">
                    Streamlines your booking process, handles inquiries, and manages reservations automatically.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-entreprenology-bg border border-entreprenology-coral/40">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="bg-entreprenology-coral/20 p-4 rounded-full mb-4">
                    <UserRound className="h-12 w-12 text-entreprenology-turquoise" />
                  </div>
                  <h3 className="text-xl font-semibold text-entreprenology-turquoise mb-2">Customer Support</h3>
                  <p className="text-center text-gray-300">
                    Available 24/7 to answer customer questions, troubleshoot issues, and provide assistance.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-entreprenology-bg border border-entreprenology-coral/40">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="bg-entreprenology-coral/20 p-4 rounded-full mb-4">
                    <User className="h-12 w-12 text-entreprenology-turquoise" />
                  </div>
                  <h3 className="text-xl font-semibold text-entreprenology-turquoise mb-2">Operations Manager</h3>
                  <p className="text-center text-gray-300">
                    Monitors business processes, identifies optimization opportunities, and manages resources efficiently.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Our AI agents work together seamlessly to automate your business operations, 
              providing you with more time to focus on growth and customer experiences.
            </p>
            
            <div className="flex justify-center">
              <a href="/contact" className="bg-entreprenology-coral hover:bg-entreprenology-coral/80 text-white px-8 py-3 rounded-md transition-colors">
                Learn How Agents Can Help Your Business
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agents;
