
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
