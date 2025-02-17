import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Read my thoughts on how strength training can be a game-changer for hypermobility.
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/blog/feeling-the-wobble">
                Read the Blog Post →
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a complimentary discovery call to explore how we can work together to help you move and live with confidence.
            </p>
            <Button asChild size="lg" className="rounded-full mb-12">
              <a href="https://calendar.app.google/N9GAaTqSHfVA61qUA">
                Book a Complimentary Consultation
              </a>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg mx-auto mt-12"
            >
              <img 
                src="/lovable-uploads/a670de57-3f15-40a7-b3a3-9ea21686ed79.png"
                alt="Hypermobility Mastery Program Certificate"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
