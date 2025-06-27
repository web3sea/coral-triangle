
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

type ContentSection = {
  title: string;
  description: string;
};

const contentSections: ContentSection[] = [
  {
    title: "Dive Operations Planning",
    description: "After a brief introduction I'll demo one of the Co-Pilots while asking questions about your business so that I can personalize your workflow."
  },
  {
    title: "Guest Experience Management",
    description: "When we're ready to move forward we'll have a kickoff call to setup your platforms together. We'll cover timelines, how best to stay in touch, and what you can expect at every step of the process. If you have any questions before we begin we'll cover those too."
  },
  {
    title: "Media & Content Creation",
    description: "Automate trip photography, social media content creation, and guest photo albums to showcase your incredible marine environments."
  },
  {
    title: "Conservation & Compliance",
    description: "Simplify marine park reports, eco-certifications, and conservation initiatives while demonstrating your commitment to ocean stewardship."
  }
];

export const ProgressiveContent = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);
  
  // Define the progress values for each section
  const progressSteps = [0, 33, 66, 100];

  const handleSliderChange = (value: number[]) => {
    setShowContent(false);
    const newValue = value[0];
    setProgressValue(newValue);
    
    // Determine active index based on progress value
    if (newValue < 15) {
      setActiveIndex(0);
    } else if (newValue < 50) {
      setActiveIndex(1);
    } else if (newValue < 83) {
      setActiveIndex(2);
    } else {
      setActiveIndex(3);
    }
    
    // Show content with a slight delay for animation
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  const goToSection = (index: number) => {
    setProgressValue(progressSteps[index]);
    handleSliderChange([progressSteps[index]]);
  };

  return (
    <div className="w-full py-16 px-4 bg-entreprenology-bg/90">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How We Work
        </h2>
        
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-entreprenology-coral">Discovery</span>
            <span className="text-entreprenology-coral text-center">Kick Off</span>
            <span className="text-entreprenology-coral text-center">Feedback</span>
            <span className="text-entreprenology-coral">Automate</span>
          </div>
          
          <Slider
            value={[progressValue]}
            onValueChange={handleSliderChange}
            max={100}
            step={1}
            className="mb-6"
          />
        </div>
        
        <div className={`transition-all duration-300 transform ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="bg-gradient-to-br from-entreprenology-bg to-entreprenology-turquoise/10 border border-entreprenology-turquoise/20 rounded-lg p-6 md:p-8 w-full shadow-lg backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-entreprenology-yellow">
                  {contentSections[activeIndex].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {contentSections[activeIndex].description}
                </p>
              </div>
              
              <div>
                <ul className="text-gray-300 text-lg space-y-2">
                  <li>• Reduce administrative workload by up to 70%</li>
                  <li>• Increase customer satisfaction and reviews</li>
                  <li>• Streamline operations for remote locations</li>
                  <li>• Focus on what matters - the diving experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
