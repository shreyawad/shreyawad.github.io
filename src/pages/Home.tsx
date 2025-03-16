import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Analytics } from "@/components/Analytics";

// ... other imports

const Home = () => {
  // Track page view on component mount
  useEffect(() => {
    document.title = "Encore Performance | Physical Therapy & Hypermobility Specialist in San Carlos";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Encore Performance | Physical Therapy & Hypermobility Specialist in San Carlos</title>
        <meta name="description" content="Expert physical therapy services for hypermobility, joint pain, and chronic pain in San Carlos and Redwood City. 75-minute sessions with Dr. Shreya, DPT." />
        <meta name="keywords" content="San Carlos Physical Therapy, Redwood City Physical Therapy, hypermobility specialist, joint pain treatment, tingling pain relief, sports injury rehabilitation, physical therapist Bay Area" />
        <link rel="canonical" href="https://encoreperf.com" />
      </Helmet>
      
      <Nav />
      
      {/* Hero has the one and only H1 tag for this page */}
      <Hero />
      
      {/* The remaining components should use H2-H6 tags */}
      <AboutMe />
      <Services />
      <Testimonials />
      <Location />
      
      <Footer />
      <Analytics />
    </div>
  );
};

export default Home; 