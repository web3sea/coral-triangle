
// Security utility functions
export const enforceHTTPS = () => {
  // Only redirect to HTTPS in production and if not already on HTTPS
  if (typeof window !== 'undefined' && 
      window.location.protocol === 'http:' && 
      window.location.hostname !== 'localhost' &&
      !window.location.hostname.includes('127.0.0.1')) {
    window.location.href = window.location.href.replace('http:', 'https:');
  }
};

// Initialize security measures
export const initSecurity = () => {
  enforceHTTPS();
  
  // Disable right-click context menu in production (optional)
  if (import.meta.env.PROD) {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
  
  // Disable text selection in production (optional)
  if (import.meta.env.PROD) {
    document.addEventListener('selectstart', (e) => {
      e.preventDefault();
    });
  }
};
