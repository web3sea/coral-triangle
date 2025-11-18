import { useState } from "react";
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

export const NewsletterSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your newsletter signup logic here
      console.log("Newsletter signup:", { name, email });
      
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
              required
              className="bg-entreprenology-bg/50 border-entreprenology-turquoise/30 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-entreprenology-bg/50 border-entreprenology-turquoise/30 text-white"
            />
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
