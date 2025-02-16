import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HypermobilityHero = () => {
  return (
    <div className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Hypermobility Specialist
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Move Freely. Live Freely.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thrive with Hypermobility - Expert care for HSD/EDS
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
                src="/lovable-uploads/720c5ce8-e076-4571-94db-7f9644c4f03b.png"
                alt="Professional demonstrating proper exercise form"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
