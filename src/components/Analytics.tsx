import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '@/utils/analytics';
import { trackMetaEvent } from '@/utils/metaPixel';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: { [key: string]: any }
    ) => void;
  }
}

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      // Google Analytics pageview
      window.gtag('config', 'G-GR07L1M5E2', {
        page_path: location.pathname + location.search
      });

      // Meta Pixel pageview
      trackMetaEvent('PageView', {
        path: location.pathname,
        search: location.search
      });

      // Start timing when page loads
      const startTime = new Date().getTime();

      // Track time spent when user leaves page
      const trackTimeSpent = () => {
        const endTime = new Date().getTime();
        const timeSpent = Math.round((endTime - startTime) / 1000);

        trackEvent('time_spent', {
          page: location.pathname,
          seconds: timeSpent,
          minutes: Math.round(timeSpent / 60)
        });
      };

      // Add event listeners for when user leaves page
      window.addEventListener('beforeunload', trackTimeSpent);
      return () => {
        trackTimeSpent();
        window.removeEventListener('beforeunload', trackTimeSpent);
      };
    }
  }, [location]);

  return null;
}; 