
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Database, MessageSquare, Mail, Users, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Custom Website Development",
      description: "Built a responsive, modern website optimized for dive retreat bookings"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Lead Management System",
      description: "Connected database to capture and organize potential customer leads"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "AI Content Generation",
      description: "Created automated content agent for social media storytelling"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Automation",
      description: "Implemented welcome email triggers for new form submissions"
    }
  ];

  const results = [
    { metric: "Lead Capture", value: "100%", description: "Automated lead collection" },
    { metric: "Content Creation", value: "24/7", description: "AI-powered social stories" },
    { metric: "Response Time", value: "Instant", description: "Welcome email delivery" },
    { metric: "Client Satisfaction", value: "Outstanding", description: "Exceeded expectations" }
  ];

  const technologies = [
    "React", "TypeScript", "Supabase", "AI Content Generation", 
    "Email Automation", "Responsive Design", "Database Integration"
  ];

  return (
    <div className="min-h-screen bg-entreprenology-bg text-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex-grow">
        <SectionHeader 
          title="Case Study: SeaTheWorld"
          description="Complete digital transformation for a dive retreat operator in the Coral Triangle region"
          color="text-entreprenology-turquoise"
        />
        
        {/* Hero Section */}
        <div className="mb-16">
          <Card className="bg-entreprenology-bg border-entreprenology-turquoise/20 hover:border-entreprenology-turquoise/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-entreprenology-turquoise/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-entreprenology-turquoise" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">SeaTheWorld Dive Retreats</CardTitle>
                  <CardDescription className="text-gray-300">Coral Triangle • Indonesia</CardDescription>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                SeaTheWorld needed a complete digital overhaul to streamline their dive retreat operations. 
                I delivered a comprehensive automation solution that transformed how they capture leads, 
                create content, and engage with potential customers.
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* Services Delivered */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-entreprenology-turquoise mb-8">Services Delivered</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-entreprenology-bg border-entreprenology-turquoise/20 hover:border-entreprenology-turquoise/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-entreprenology-turquoise">{service.icon}</div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-entreprenology-turquoise mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="bg-entreprenology-bg border-entreprenology-turquoise/20 text-center">
                <CardContent className="pt-6">
                  <div className="mb-2">
                    <TrendingUp className="h-8 w-8 text-entreprenology-turquoise mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{result.value}</div>
                    <div className="text-sm text-entreprenology-turquoise font-medium">{result.metric}</div>
                  </div>
                  <p className="text-gray-300 text-sm">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-entreprenology-turquoise mb-8">Technical Implementation</h2>
          <Card className="bg-entreprenology-bg border-entreprenology-turquoise/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-entreprenology-turquoise" />
                      <span className="text-gray-300">Responsive website design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-entreprenology-turquoise" />
                      <span className="text-gray-300">Automated lead capture forms</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-entreprenology-turquoise" />
                      <span className="text-gray-300">AI-powered content creation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-entreprenology-turquoise" />
                      <span className="text-gray-300">Welcome email automation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-entreprenology-turquoise" />
                      <span className="text-gray-300">Database integration</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-entreprenology-turquoise/40 text-entreprenology-turquoise">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-entreprenology-turquoise/10 to-entreprenology-coral/10 border-entreprenology-turquoise/30">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4" style={{color: '#D36A42'}}>Ready to Transform Your Business?</h2>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help automate and optimize your dive business operations 
                in the Coral Triangle region.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-entreprenology-turquoise text-white font-semibold rounded-lg hover:bg-entreprenology-turquoise/90 transition-colors"
              >
                Start Your Project
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
