import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const newsletterSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase()
});

export const NewsletterSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = newsletterSchema.safeParse({ name, email });
    
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "name") fieldErrors.name = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    const validatedData = result.data;

    try {
      const { error } = await supabase
        .from('ct_newsletter_subscribers')
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
          }
        ]);

      if (error) throw error;

      // Send to webhook
      await fetch('https://hook.us2.make.com/uuiq1jh0ydvoymm9ojp247dsso41mxb4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: validatedData.name,
          email: validatedData.email,
        }),
      });
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      
      setName("");
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="bg-entreprenology-turquoise hover:bg-entreprenology-turquoise/90 text-white font-semibold"
        >
          Subscribe to Our Coral Triangle Newsletter
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-entreprenology-bg border-entreprenology-turquoise/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-entreprenology-turquoise">
            Subscribe to Our Coral Triangle Newsletter
          </DialogTitle>
          <p className="text-gray-300 mt-2">
            Get updates on reef health, conservation strategies, and emerging research from across the Coral Triangle!
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`bg-entreprenology-bg/50 border-entreprenology-turquoise/30 text-white ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-entreprenology-bg/50 border-entreprenology-turquoise/30 text-white ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-entreprenology-turquoise hover:bg-entreprenology-turquoise/90 text-white font-semibold"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
