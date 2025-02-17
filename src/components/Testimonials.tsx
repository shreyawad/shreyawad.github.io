import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    content: "Shreya has been an amazing PT! She's extremely knowledgeable, attentive, and really works around your  schedule, needs and really thinks through how to best help you and will be with you every step of the way to really teach you all the exercises and ensure you are doing it properly and right. She really helped me through my back pain with sciatica and helped me work through the flare ups and I couldn't be more grateful! Highly recommend Shreya!",
    author: "Arjun A",
    location: "New York City, NY"
  },
  {
    content: "I had a fantastic experience with Dr. Shreya. Before having my first in person appointment, she took the time to schedule a phone appointment to listen to my concerns and thoroughly assess my needs. What I appreciated most was the personalized treatment plan that she developed specifically for me and my goals. I felt supported and motivated throughout the process, and am grateful for the time we had working together. If you're looking for a dedicated and attentive physical therapist, I highly recommend Dr. Shreya.",
    author: "Chad J",
    location: "San Jose, CA"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mb-4">What Clients are Saying</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            I've helped over 100 clients feel better with my personalized, tailored approach to physical therapy and movement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary/80 backdrop-blur-lg rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-tertiary text-tertiary" />
                ))}
              </div>
              <p className="text-gray-800 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-700">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button 
            asChild
            className="bg-white text-primary hover:bg-white/90 transition-colors"
          >
            <a 
              href="https://maps.app.goo.gl/mqso7EYhyyvvzQY68"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More Reviews on Google
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
