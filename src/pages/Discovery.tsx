
import { useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export default function Discovery() {
  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
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
          <SectionHeader
            title="Discovery"
            description="Tell us about your business needs so we can create the perfect automation solution for you."
            color="text-entreprenology-turquoise"
            className="text-center mb-8"
          />
          
          <div className="bg-entreprenology-bg/80 border border-entreprenology-turquoise/20 rounded-lg p-4 md:p-8 shadow-lg backdrop-blur-sm">
            <div 
              data-tf-live="01JXMXGMP3305PFKRFXH135DD8"
              className="min-h-[600px] w-full"
            ></div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
