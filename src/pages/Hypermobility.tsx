import { Nav } from "@/components/Nav";
import { HypermobilityHero } from "@/components/hypermobility/HypermobilityHero";
import { Features } from "@/components/hypermobility/Features";
import { CTASection } from "@/components/hypermobility/CTASection";
import { trackEvent } from '@/utils/analytics';
import { useEffect } from 'react';

const Hypermobility = () => {
  useEffect(() => {
    trackEvent('view_hypermobility', {
      source: document.referrer
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <HypermobilityHero />
      <Features />
      <CTASection />
    </div>
  );
};

export default Hypermobility;
