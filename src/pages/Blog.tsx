import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest Posts
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <a href="/blog/feeling-the-wobble" className="block">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Feeling the Wobble?</h2>
                <p className="text-gray-600 mb-4">Discover how weight training can be your secret weapon against hypermobility and joint instability.</p>
                <p className="text-primary">Read more →</p>
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog; 