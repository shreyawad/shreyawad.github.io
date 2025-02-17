import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section aria-label="Hero Section" className="relative min-h-screen flex items-center pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <header className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
            role="presentation"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Performance and Rehab Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tired of pain holding you back?
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I'm Dr. Shreya, a Doctor of Physical Therapy, and my goal is to bridge the gap of rehab, health, and fitness.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <a href="https://calendar.app.google/N9GAaTqSHfVA61qUA">
                Book a Complimentary Consultation
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/eeddfc2e-daa2-4e2e-af91-d2b16f77c16e.png"
                alt="Dr. Shreya demonstrating physical therapy techniques at Encore Performance clinic in San Carlos"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </header>
      </div>
    </section>
  );
};
