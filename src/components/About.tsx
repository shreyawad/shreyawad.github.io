
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/lovable-uploads/7a59f221-f8d1-4bba-9e74-661fc5dcae41.png"
              alt="Professional portrait"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-secondary/20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              My Approach
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Feeling lost? There's a better way
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Introducing Hybrid Health: My unique approach combines the expertise of health, rehab, and pain recovery with supportive guidance – both virtually and in-person.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-secondary/5 p-4 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">I prioritize personal, in-depth 1:1 evaluations to ensure you have the time and attention you deserve.</p>
              </div>
              <div className="flex items-start gap-4 bg-tertiary/5 p-4 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">My programs strike the perfect balance between challenge and support, ensuring you're making steady progress.</p>
              </div>
              <div className="flex items-start gap-4 bg-secondary/5 p-4 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">My approach goes beyond simply healing your injury. I'll help you build a stronger foundation for lasting health and well-being.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
