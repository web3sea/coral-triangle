import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const newsletterSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate inputs
      const validatedData = newsletterSchema.parse({ name, email });

      const { error } = await supabase
        .from("ct_newsletter_subscribers")
        .insert([{ name: validatedData.name, email: validatedData.email }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });

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
        toast({
          title: "Error",
          description: error.message || "Failed to subscribe. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white text-entreprenology-darkgreen max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-entreprenology-darkgreen">
            Subscribe to Our Coral Reef Newsletter
          </DialogTitle>
          <DialogDescription className="text-entreprenology-darkgreen/80 pt-2">
            Get updates on reef health, conservation strategies, and emerging research from across the Coral Triangle!
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-entreprenology-darkgreen">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-entreprenology-darkgreen/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-entreprenology-darkgreen">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-entreprenology-darkgreen/20"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-entreprenology-turquoise hover:bg-entreprenology-turquoise/90 text-white"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
