
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Discovery Call",
    description: "I dig into your pain points and fitness story. This will uncover your goal challenges & needs. I will assess if we're a good fit -- no strings attached!",
    image: "/lovable-uploads/91379344-b834-4739-8699-aa99ac05909c.png"
  },
  {
    title: "Ultra Evaluation",
    description: "I assess your movement, from head to toe, and find your strengths & where we need to focus.",
    image: "/lovable-uploads/7be8a8ac-337d-41a0-aec3-898540482b71.png"
  },
  {
    title: "Customized Plan",
    description: "No generic templates here; I'll execute your personalized plan, adapting it to your lifestyle & time constraints.",
    image: "/lovable-uploads/7e8e40d5-27ba-45d5-a7a0-7485d59a285e.png"
  },
  {
    title: "Unparalleled Support",
    description: "24/7 access to me means you get answered ASAP, no more waiting for appointments.",
    image: "/lovable-uploads/20e8342c-3397-4cbf-bca9-1745b926e749.png"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Personalized Service</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I call this unique approach Hybrid Health: Personalized care, delivered your way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 flex-1">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
