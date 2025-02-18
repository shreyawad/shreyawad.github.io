import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackEvent } from '@/utils/analytics';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/utils/metaPixel';

const FeelingTheWobble = () => {
  useEffect(() => {
    trackEvent('read_blog', {
      title: 'Feeling the Wobble',
      category: 'hypermobility'
    });
    trackMetaEvent('ViewContent', {
      content_name: 'Feeling the Wobble',
      content_type: 'blog_post',
      content_category: 'hypermobility'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Hypermobility & Exercise
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Feeling the Wobble? How Weight Training Can Be Your Secret Weapon Against Hypermobility
              </h1>
              <p className="text-gray-600">
                February 2025 • 8 min read
              </p>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                Do you ever feel like your joints are a little too flexible? Maybe you've been told you're "double-jointed," or perhaps you experience frequent aches, pains, or even dislocations. If this sounds familiar, you might be dealing with hypermobility, sometimes referred to as joint hypermobility syndrome (JHS) or hypermobility spectrum disorder (HSD).
              </p>

              <p className="text-lg text-gray-700 mb-8">
                While flexibility is often praised, when joints are too mobile, it can actually lead to a host of frustrating symptoms. These can include:
              </p>

              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li><strong>Chronic pain:</strong> Especially in joints like knees, hips, back, and shoulders.</li>
                <li><strong>Joint instability:</strong> Feeling like your joints might give way or pop out of place.</li>
                <li><strong>Fatigue:</strong> Muscles working harder to compensate for lax ligaments can lead to exhaustion.</li>
                <li><strong>Frequent sprains and strains:</strong> Increased risk of injury due to less joint support.</li>
                <li><strong>Digestive issues and skin sensitivities:</strong> Sometimes linked to hypermobility, though less directly joint-related.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                The Power of Weight Training
              </h2>

              <p className="text-lg text-gray-700 mb-8">
                Many people with hypermobility are told to avoid strenuous activity, fearing it will worsen their symptoms. However, this is often the opposite of what's truly helpful! Enter: Weight Training.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Building Your Body's Natural Braces
              </h3>

              <p className="text-lg text-gray-700 mb-8">
                Think of your muscles as the natural braces for your joints. In hypermobility, the ligaments and connective tissues that normally stabilize your joints are looser than they should be. Weight training strategically strengthens the muscles around those joints.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Benefits of Weight Training for Hypermobility:
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Increased Stability:</strong> Muscles act as dynamic stabilizers, actively controlling joint movement.</li>
                  <li><strong>Improved Joint Support:</strong> Stronger muscles take load off ligaments and tendons.</li>
                  <li><strong>Enhanced Proprioception:</strong> Better body awareness and control.</li>
                  <li><strong>Pain Reduction:</strong> Through improved stability and support.</li>
                  <li><strong>Increased Functional Strength:</strong> Making everyday activities easier.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Working with a Physical Therapist is Crucial
              </h3>

              <p className="text-lg text-gray-700 mb-8">
                As physical therapists specializing in musculoskeletal conditions and pain management, we understand the nuances of hypermobility. We can help you:
              </p>

              <ul className="list-disc pl-6 mb-12 space-y-2 text-gray-700">
                <li><strong>Assess Your Specific Needs:</strong> Evaluate your joint mobility, muscle strength, and pain points.</li>
                <li><strong>Learn Proper Form:</strong> Master safe and effective exercise techniques.</li>
                <li><strong>Progress Appropriately:</strong> Start gradually and build up safely.</li>
                <li><strong>Address Muscle Imbalances:</strong> Identify and correct compensatory patterns.</li>
                <li><strong>Listen to Your Body:</strong> Learn to recognize and respond to your body's signals.</li>
              </ul>

              <div className="bg-primary/5 p-8 rounded-xl text-center mb-12">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Take Control?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Don't let hypermobility hold you back any longer. Book your free consultation and learn how a personalized weight training program can help you build stronger, more stable joints.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <a href="https://calendar.app.google/N9GAaTqSHfVA61qUA">
                    Book a Free Consultation
                  </a>
                </Button>
              </div>

              <div className="text-center mt-16">
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href="/blog">
                    ← Back to Blog
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeelingTheWobble; 