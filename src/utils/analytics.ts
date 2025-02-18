type EventNames = 
  | 'book_consultation'
  | 'view_hypermobility'
  | 'read_blog'
  | 'contact_click'
  | 'get_directions'
  | 'social_click'
  | 'time_spent';

export const trackEvent = (
  eventName: EventNames,
  eventParams?: {
    [key: string]: string | number | boolean;
  }
) => {
  try {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventParams);
    }
  } catch (error) {
    console.error('Google Analytics tracking error:', error);
  }
}; 