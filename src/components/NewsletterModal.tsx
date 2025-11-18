import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
      // Save to database
      const { data, error } = await supabase
        .from('ct_newsletter_subscribers')
        .insert([{ name, email }])
        .select()
        .single();

      if (error) throw error;

      // Send to webhook
      await fetch('https://hook.us2.make.com/uuiq1jh0ydvoymm9ojp247dsso41mxb4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });

      // Reset form
      setName("");
      setEmail("");
      onOpenChange(false);
    } catch (error: any) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Error",
        description: error.message?.includes("unique") 
          ? "This email is already subscribed." 
          : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Subscribe to Our Coral Triangle Newsletter
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Get updates on reef health, conservation strategies, and emerging research from across the Coral Triangle!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white border-gray-300"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-brand-turquoise hover:bg-brand-turquoise/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
