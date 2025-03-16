import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackEvent } from '@/utils/analytics';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/utils/metaPixel';

const StressAndRecovery = () => {
  useEffect(() => {
    // Update document title
    document.title = "Managing Stress for Optimal Recovery in Physical Therapy | Encore Performance";
    
    // Track page view
    trackEvent('read_blog', {
      title: 'Managing Stress for Optimal Recovery in Physical Therapy',
      category: 'mental_health'
    });
    trackMetaEvent('ViewContent', {
      content_name: 'Managing Stress for Optimal Recovery in Physical Therapy',
      content_type: 'blog_post',
      content_category: 'mental_health'
    });
    
    // Add meta tags programmatically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn how stress affects physical therapy outcomes and discover practical stress management techniques to enhance your recovery and healing process.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn how stress affects physical therapy outcomes and discover practical stress management techniques to enhance your recovery and healing process.';
      document.head.appendChild(meta);
    }
    
    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'stress management, physical therapy recovery, stress and inflammation, mindfulness for healing, stress reduction techniques, mental health and physical therapy');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'stress management, physical therapy recovery, stress and inflammation, mindfulness for healing, stress reduction techniques, mental health and physical therapy';
      document.head.appendChild(meta);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link') as HTMLLinkElement;
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://encoreperf.com/blog/stress-and-recovery';
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
            <div className="mb-10">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Mental Health & Recovery
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Managing Stress for Optimal Recovery in Physical Therapy
              </h1>
              <div className="flex items-center text-gray-500 text-sm mt-5">
                <span>By Dr. Shreya Wadhawan, DPT</span>
                <span className="mx-2">•</span>
                <time dateTime="2025-03-25">March, 2025</time>
                <span className="mx-2">•</span>
                <span>4 min read</span>
              </div>
            </div>
            
            <article className="prose prose-lg max-w-none">
              <p>
                Physical therapy is a journey, and like any journey, it can be stressful. But did you know that chronic stress can hinder your recovery? Let's explore how stress management can enhance your physical therapy outcomes.
              </p>
              
              <h2>The Impact of Stress on Recovery</h2>
              
              <h3>Increased Inflammation</h3>
              <p>
                When you're stressed, your body releases hormones like cortisol that can increase inflammation. While inflammation is a natural part of the healing process, chronic inflammation can impede recovery and exacerbate pain.
              </p>
              
              <h3>Muscle Tension and Pain</h3>
              <p>
                Stress often manifests physically as muscle tension, particularly in the neck, shoulders, and back. This tension can exacerbate existing pain conditions and create new ones, making your physical therapy exercises more challenging.
              </p>
              
              <h3>Heightened Pain Perception</h3>
              <p>
                Research shows that stress can increase your sensitivity to pain. This means that the same stimulus might feel more painful when you're stressed compared to when you're relaxed, potentially making your physical therapy journey more difficult.
              </p>
              
              <h2>Practical Stress Management Techniques</h2>
              
              <h3>Incorporate Mindful Movement</h3>
              <p>
                Activities like yoga, Tai Chi, or gentle walking can help reduce stress while also supporting your physical therapy goals. These practices combine movement with mindfulness, creating a dual benefit for both body and mind.
              </p>
              
              <h3>Practice Relaxation Techniques</h3>
              <p>
                Dedicate time each day for deep breathing, progressive muscle relaxation, meditation, or guided imagery. Even just 5-10 minutes can make a significant difference in your stress levels and, consequently, your recovery.
              </p>
              
              <h3>Engage in Enjoyable Hobbies</h3>
              <p>
                Make time for activities you find relaxing and enjoyable. Whether it's reading, gardening, listening to music, or crafting, these activities can provide a mental break and reduce stress hormones in your body.
              </p>
              
              <h3>Build a Strong Social Support Network</h3>
              <p>
                Connect with friends, family, or support groups. Sharing your experiences and feelings can provide emotional relief and perspective. Don't hesitate to ask for help when needed—it's a sign of strength, not weakness.
              </p>
              
              <h2>Creating a Conducive Environment for Healing</h2>
              
              <p>
                By managing stress, you create a more conducive environment for healing. Incorporating stress management techniques into your daily routine can mitigate the negative effects of stress and enhance the benefits of your physical therapy.
              </p>
              
              <p>
                Remember, your mental well-being is just as important as your physical well-being. Prioritize stress management, and watch your recovery progress.
              </p>
              
              <div className="my-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Need help managing stress during recovery?</h3>
                <p className="mb-5">
                  If you're finding it challenging to manage stress while recovering, I'm here to help. We can discuss strategies that work specifically for your situation and integrate them into your physical therapy plan.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <a href="https://calendar.app.google/N9GAaTqSHfVA61qUA">
                    Schedule a Consultation
                  </a>
                </Button>
              </div>
            </article>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=Managing Stress for Optimal Recovery in Physical Therapy&url=https://encoreperf.com/blog/stress-and-recovery`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://encoreperf.com/blog/stress-and-recovery`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/></svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://encoreperf.com/blog/stress-and-recovery`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StressAndRecovery; 