import * as React from "react";
import { Anchor, Code2, Gauge, Users, Ship, Store, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { HomestaySection } from "@/components/HomestaySection";
import { FreedivingSchoolSection } from "@/components/FreedivingSchoolSection";
import { LiveaboardSection } from "@/components/LiveaboardSection";
import { CustomSolutionsSection } from "@/components/CustomSolutionsSection";
import { ProgressiveContent } from "@/components/ProgressiveContent";
import { useIsMobile } from "@/hooks/use-mobile";
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const ServiceCard = ({
  icon,
  title,
  description,
  to,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
}) => (
  <Link to={to} onClick={() => window.scrollTo(0, 0)}>
    <Card className="p-6 bg-entreprenology-bg border border-entreprenology-turquoise/20 hover:border-entreprenology-turquoise/40 hover:bg-entreprenology-turquoise/10 transition-colors shadow-md backdrop-blur-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-entreprenology-turquoise text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </Card>
  </Link>
);

const Index = () => {
  const isMobile = useIsMobile();

  React.useEffect(() => {
    createChat({
      webhookUrl: 'https://coraltriangle.app.n8n.cloud/webhook/0d471725-6805-476d-920d-644f1a8d1298/chat'
    });
  }, []);

  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            AI Co-Pilot for
            <span className="text-entreprenology-turquoise">
              {" "}
              Dive Operators
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            We help dive operators automate their workflows and enhance guest
            experiences. Spend less time on admin, and more time underwater.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-entreprenology-bg/90">
        <div className="container mx-auto">
          <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/lovable-uploads/fdd60cea-8784-43c0-b786-e0598236a0a6.png"
              alt="Coral Triangle Diving Map"
              className="w-full h-auto object-cover"
            />
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-t from-entreprenology-bg to-transparent opacity-30"></div>
            )}
            {!isMobile && (
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
                <div className="inline-block bg-entreprenology-bg/80 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-2xl md:text-3xl font-bold text-entreprenology-turquoise mb-2">
                    The Coral Triangle
                  </h3>
                  <p className="text-white text-lg">
                    Home to the world's richest marine biodiversity
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-b from-entreprenology-bg to-entreprenology-bg/95"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              to="/automations/dive-shop"
              icon={<Store className="h-12 w-12 text-entreprenology-coral" />}
              title="Dive Shop Co-Pilot"
              description="No more missing potential bookings or responding to repetitive inquiries across multiple business platforms. Providing instant, professional responses guarantees an increase in conversion from inquiry to booking."
            />
            <ServiceCard
              to="/automations/homestay"
              icon={
                <Gauge className="h-12 w-12 text-entreprenology-turquoise" />
              }
              title="Homestay Co-Pilot"
              description="Automate bookings, guest communications, media, and eco-reporting for boutique stays and homestays."
            />
            <ServiceCard
              to="/automations/freediving"
              icon={<Users className="h-12 w-12 text-entreprenology-yellow" />}
              title="Freediving School Co-Pilot"
              description="Run your freediving academy smoothly with AI class scheduling, student management, media, and safety."
            />
            <ServiceCard
              to="/automations/liveaboard"
              icon={<Ship className="h-12 w-12 text-entreprenology-brickred" />}
              title="Liveaboard Co-Pilot"
              description="End-to-end AI automations for liveaboard dive operators: scheduling, guest care, trip media, and compliance."
            />
          </div>
        </div>
      </section>

      {/* Custom AI Solutions Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <CustomSolutionsSection />
        </div>
      </section>

      {/* Progressive Content Section */}
      <ProgressiveContent />

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/lovable-uploads/fdd60cea-8784-43c0-b786-e0598236a0a6.png"
            alt="Ocean Background"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-entreprenology-bg/60 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-entreprenology-turquoise">
              About Entreprenology
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              With a background in marine policy, a career in tech, and a
              lifelong passion for underwater photography, we bring a unique
              perspective to the diving industry — one that blends operational
              insight, environmental stewardship, and technical innovation.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We understand the challenges dive operators face because we've
              lived them — not just as professionals, but as divers, travelers,
              and advocates for the ocean. Our goal is simple: to make it
              effortless for dive businesses to run efficiently, delight their
              customers, and contribute meaningfully to marine conservation.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              That's why we build smart, affordable, and automated systems
              designed specifically for the diving industry. From streamlined
              bookings and real-time communication to eco-conscious trip
              reporting and conservation integrations, our turnkey solutions
              help operators do more with less — all while creating
              unforgettable guest experiences and promoting sustainable
              practices with ease.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              By equipping dive operators with the right tools, we're not just
              improving workflows — we're helping shape a future for ocean
              stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-t from-entreprenology-bg to-entreprenology-bg/95"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Dive In?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us on whatsApp for a no-obligations, 15min conversation to
            discover which of our AI agents could join your team.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-entreprenology-turquoise hover:bg-entreprenology-turquoise/90 text-entreprenology-bg font-semibold"
            >
              Book A Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
