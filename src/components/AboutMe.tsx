import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Dr. Shreya</h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="mb-6">
              As the CEO and founder of Encore Performance, I've dedicated my career to helping people 
              with chronic pain navigate their hypermobility and reclaim their health. My practice 
              combines evidence-based physical therapy with a deep understanding of hypermobility conditions.
            </p>

            <h3 className="text-xl font-semibold mb-4">Education & Expertise</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Doctor of Physical Therapy (DPT) from University of St. Augustine for Health Sciences (2021)</li>
              <li>Bachelor of Science in Psychology with a Minor in Public Health from Santa Clara University (2017)</li>
              <li>Specialized training in hypermobility conditions and chronic pain management</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
            <p className="mb-4">
              My diverse experience includes working with leading healthcare organizations:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Founded Encore Performance (2023-Present) to provide specialized care for hypermobility patients</li>
              <li>Physical Therapist at Luna Physical Therapy, delivering personalized home-based care</li>
              <li>Staff Physical Therapist at Ivy Rehab Physical Therapy in Manhattan</li>
              <li>Physical Therapist at Apple Wellness Center in Cupertino</li>
            </ul>

            <p className="mb-6">
              Through these experiences, I've developed a unique approach that combines traditional 
              physical therapy with innovative techniques specifically designed for hypermobile individuals.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">My Mission</h3>
              <p>
                I believe in empowering patients with the knowledge and tools they need to manage their 
                hypermobility effectively. My goal is to bridge the gap between rehabilitation, health, 
                and fitness, creating sustainable solutions for long-term wellbeing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 