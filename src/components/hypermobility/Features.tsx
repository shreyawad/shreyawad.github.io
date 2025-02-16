
import { motion } from "framer-motion";
import { Check, Activity, Brain, Heart } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-600 mb-8">
            Living with hypermobility can feel like a journey with no clear destination. I'm Dr. Shreya, and I'm here to be your guide – your PT in your pocket. As a Doctor of Physical Therapy, dancer, and fellow traveler on the hypermobility journey, I understand the physical, emotional, and practical realities of living with hypermobility.
          </p>
          <div className="space-y-6 mb-16">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Pain Management</h3>
                <p className="text-gray-600">Reduce pain and improve your quality of life through targeted exercises and strategies.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Joint Stability</h3>
                <p className="text-gray-600">Strengthen supporting muscles and improve proprioception to enhance joint stability.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Movement Confidence</h3>
                <p className="text-gray-600">Reclaim your movement potential and move with confidence, free from fear.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Personalized Support</h3>
                <p className="text-gray-600">Receive individualized guidance and support every step of the way.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
