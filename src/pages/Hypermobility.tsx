
import { Nav } from "@/components/Nav";
import { HypermobilityHero } from "@/components/hypermobility/HypermobilityHero";
import { Features } from "@/components/hypermobility/Features";
import { CTASection } from "@/components/hypermobility/CTASection";

const Hypermobility = () => {
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
