import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";
import {
  getStoredPreferences,
  savePreferences,
  hasConsented,
  type CookiePreferences,
} from "@/utils/cookieConsent";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: true,
    functional: true,
  });

  useEffect(() => {
    const hasUserConsented = hasConsented();
    if (!hasUserConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(essentialOnly);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setIsVisible(false);
  };

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex items-start gap-4">
          <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Cookie Preferences
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your browsing experience, serve personalized
              content, and analyze our traffic. By clicking "Accept All", you consent
              to our use of cookies.{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Read our Privacy Policy
              </a>
            </p>

            {showDetails && (
              <div className="space-y-4 mb-4 bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={() => handleToggle("analytics")}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver personalized advertisements and track campaigns.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={() => handleToggle("marketing")}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Functional Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Enable enhanced functionality and personalization.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.functional}
                    onCheckedChange={() => handleToggle("functional")}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAcceptAll} size="sm">
                Accept All
              </Button>
              <Button onClick={handleRejectAll} variant="outline" size="sm">
                Reject Non-Essential
              </Button>
              {showDetails && (
                <Button onClick={handleSavePreferences} variant="secondary" size="sm">
                  Save Preferences
                </Button>
              )}
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="ghost"
                size="sm"
              >
                {showDetails ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Hide Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    Customize
                  </>
                )}
              </Button>
            </div>
          </div>
          <button
            onClick={handleRejectAll}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close and reject non-essential cookies"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
