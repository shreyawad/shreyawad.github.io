import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";

// ... other imports

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <AboutMe />
      {/* ... other components */}
      <Footer />
    </div>
  );
};

export default Home; 