
import { useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Intake() {
  useEffect(() => {
    // Load the ClickUp embed script
    const script = document.createElement('script');
    script.src = 'https://app-cdn.clickup.com/assets/js/forms-embed/v1.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector('script[src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-entreprenology-bg text-white flex flex-col">
      <Navbar />
      
      <section className="container mx-auto flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">          
          <div className="bg-entreprenology-bg/80 border border-entreprenology-turquoise/20 rounded-lg p-4 md:p-8 shadow-lg backdrop-blur-sm">
            <iframe 
              className="clickup-embed clickup-dynamic-height" 
              src="https://forms.clickup.com/90181369213/f/2kzkmzbx-858/Q2JD9NSKA71MFLNUGP" 
              width="100%" 
              height="100%" 
              style={{
                background: 'transparent', 
                border: '1px solid #ccc',
                minHeight: '600px'
              }}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
