type MetaEvent = 
  | 'PageView'
  | 'Lead'
  | 'Contact'
  | 'Schedule'
  | 'ViewContent'
  | 'CompleteRegistration';

declare global {
  interface Window {
    fbq: (
      type: string,
      eventName: MetaEvent,
      params?: { [key: string]: string | number | boolean }
    ) => void;
  }
}

export const trackMetaEvent = (
  eventName: MetaEvent,
  eventParams?: {
    [key: string]: string | number | boolean;
  }
) => {
  try {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', eventName, eventParams);
    }
  } catch (error) {
    console.error('Meta Pixel tracking error:', error);
  }
}; 