// This is a placeholder for Google Analytics integration
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics measurement ID when available

// Initialize Google Analytics
export const initializeAnalytics = () => {
  // Check if window and document are available (for SSR compatibility)
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Add Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Add TypeScript interface for window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
