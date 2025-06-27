
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-entreprenology-bg text-white flex flex-col">
      <Navbar />
      
      <section className="container mx-auto flex-grow flex items-center justify-center px-4 py-12 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-entreprenology-bg/60"></div>
        </div>
        
        <div className="max-w-3xl w-full py-24 relative z-10">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-entreprenology-turquoise">Get in Touch</span>
          </h1>
          
          <div className="mt-8 md:mt-12 bg-entreprenology-bg/80 border border-entreprenology-turquoise/20 rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
