
import { motion } from "framer-motion";
import { Briefcase, Activity, Users, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "1:1 Ultra Evaluation",
    description: "Comprehensive evaluation of your whole body"
  },
  {
    icon: Briefcase,
    title: "Clear Game Plans",
    description: "Creating clear strategies to reach your goals"
  },
  {
    icon: Activity,
    title: "Integrated Approach",
    description: "Rehab + fitness plan optimized for recovery"
  },
  {
    icon: Users,
    title: "Digital Support",
    description: "Continuous communication with your coach"
  }
];

export const Features = () => {
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
            Why Choose Me
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Care Approach
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
