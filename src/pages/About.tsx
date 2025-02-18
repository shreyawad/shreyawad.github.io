import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="pt-32">
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default About; 