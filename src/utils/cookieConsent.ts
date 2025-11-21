export type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

const COOKIE_CONSENT_KEY = 'cookie-consent-preferences';

export const getStoredPreferences = (): CookiePreferences | null => {
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export const savePreferences = (preferences: CookiePreferences): void => {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
  applyPreferences(preferences);
};

export const applyPreferences = (preferences: CookiePreferences): void => {
  // Analytics cookies (Google Analytics, Mixpanel)
  if (!preferences.analytics) {
    // Disable Google Analytics
    window['ga-disable-G-MEASUREMENT_ID'] = true;
    // Clear analytics cookies
    document.cookie.split(";").forEach((c) => {
      const cookie = c.trim();
      if (cookie.startsWith('_ga') || cookie.startsWith('mp_')) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
    });
  }

  // Marketing cookies (Meta Pixel, HubSpot)
  if (!preferences.marketing) {
    // Clear marketing cookies
    document.cookie.split(";").forEach((c) => {
      const cookie = c.trim();
      if (cookie.startsWith('_fbp') || cookie.startsWith('hubspotutk')) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
    });
  }
};

export const hasConsented = (): boolean => {
  return getStoredPreferences() !== null;
};
