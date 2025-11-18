import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { X } from "lucide-react";

const newsletterSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase()
});

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewsletterModal = ({ open, onOpenChange }: NewsletterModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onOpenChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate inputs
      const validatedData = newsletterSchema.parse({ name, email });
      
      // Save to database with validated data
      const { data, error } = await supabase
        .from('ct_newsletter_subscribers')
        .insert([{ name: validatedData.name, email: validatedData.email }])
        .select()
        .maybeSingle();

      if (error) {
        // Check for duplicate email
        if (error.code === '23505' || error.message?.includes('duplicate') || error.message?.includes('unique')) {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive",
          });
          return;
        }
        throw error;
      }

      // Send validated data to webhook
      if (data) {
        await fetch('https://hook.us2.make.com/uuiq1jh0ydvoymm9ojp247dsso41mxb4', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      }

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });

      // Reset form
      setName("");
      setEmail("");
      onOpenChange(false);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error('Newsletter subscription error:', error);
        toast({
          title: "Subscription Error",
          description: error.message || "Unable to complete subscription.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-50 bg-black/80 animate-in fade-in-0"
        onClick={() => onOpenChange(false)}
      />
      
      {/* Modal Content */}
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]">
        <div className="relative bg-white rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-6 w-6 text-gray-900" />
            <span className="sr-only">Close</span>
          </button>

          {/* Header */}
          <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Subscribe to Our Coral Triangle Newsletter
            </h2>
            <p className="text-gray-600">
              Get updates on reef health, conservation strategies, and emerging research from across the Coral Triangle!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 pb-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-900">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#79B8B0] hover:bg-[#79B8B0]/90 text-white font-semibold h-11 px-6 z-10 relative"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
