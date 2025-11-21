import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cookie } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  getStoredPreferences,
  savePreferences,
  type CookiePreferences,
} from "@/utils/cookieConsent";

const CookieSettings = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: true,
    functional: true,
  });

  useEffect(() => {
    const stored = getStoredPreferences();
    if (stored) {
      setPreferences(stored);
    }
  }, []);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    savePreferences(preferences);
    toast({
      title: "Preferences Saved",
      description: "Your cookie preferences have been updated successfully.",
    });
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
    toast({
      title: "All Cookies Accepted",
      description: "You have accepted all cookie categories.",
    });
  };

  const handleRejectAll = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(essentialOnly);
    savePreferences(essentialOnly);
    toast({
      title: "Non-Essential Cookies Rejected",
      description: "Only essential cookies will be used.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Cookie className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Cookie Settings</h1>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Manage Your Cookie Preferences</CardTitle>
            <CardDescription>
              Control how we use cookies to enhance your experience. You can change these settings at any time.
              Learn more in our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start justify-between gap-4 pb-6 border-b">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Required for the website to function properly. These cookies enable core functionality
                  such as security, network management, and accessibility. Cannot be disabled.
                </p>
              </div>
              <Switch checked={true} disabled />
            </div>

            <div className="flex items-start justify-between gap-4 pb-6 border-b">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Help us understand how visitors interact with our website by collecting and reporting
                  information anonymously. This includes Google Analytics and similar services.
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={() => handleToggle("analytics")}
              />
            </div>

            <div className="flex items-start justify-between gap-4 pb-6 border-b">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Used to deliver personalized advertisements and track the effectiveness of marketing
                  campaigns. These cookies may be set by third-party advertising partners.
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={() => handleToggle("marketing")}
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Enable enhanced functionality and personalization, such as remembering your preferences
                  and settings. These cookies improve your user experience.
                </p>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={() => handleToggle("functional")}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3">
          <Button onClick={handleSave} size="lg">
            Save Preferences
          </Button>
          <Button onClick={handleAcceptAll} variant="secondary" size="lg">
            Accept All
          </Button>
          <Button onClick={handleRejectAll} variant="outline" size="lg">
            Reject Non-Essential
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookieSettings;
