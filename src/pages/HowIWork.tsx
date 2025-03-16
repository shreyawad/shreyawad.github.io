import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProcessCarousel } from "@/components/ProcessCarousel";
import { useEffect } from "react";

const HowIWork = () => {
  useEffect(() => {
    // Set document title
    document.title = "My Approach | Physical Therapy Treatment Process | Dr. Shreya PT";
    
    // Add meta tags programmatically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Dr. Shreya\'s unique 4-step physical therapy approach: discovery call, in-depth consultation, personalized 12-week program, and progress evaluation.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about Dr. Shreya\'s unique 4-step physical therapy approach: discovery call, in-depth consultation, personalized 12-week program, and progress evaluation.';
      document.head.appendChild(meta);
    }
    
    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'physical therapy process, PT treatment approach, personalized physical therapy, hypermobility treatment program, San Carlos PT');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'physical therapy process, PT treatment approach, personalized physical therapy, hypermobility treatment program, San Carlos PT';
      document.head.appendChild(meta);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://encoreperf.com/how-i-work';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My Approach
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How I Partner With You on Your Healing Journey
            </h1>
            <p className="text-xl text-gray-600">
              A personalized and collaborative approach to physical therapy that focuses on long-term results and empowerment.
            </p>
          </header>
          
          <ProcessCarousel />
          
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-gray-600 mb-8">
              The first step is a simple, no-obligation conversation to understand your unique situation.
            </p>
            <a 
              href="https://calendar.app.google/N9GAaTqSHfVA61qUA" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-full bg-primary hover:bg-primary/90 focus:shadow-outline focus:outline-none"
            >
              Schedule Your Free Discovery Call
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowIWork; 