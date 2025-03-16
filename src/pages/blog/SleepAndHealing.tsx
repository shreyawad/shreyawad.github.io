import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackEvent } from '@/utils/analytics';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/utils/metaPixel';

const SleepAndHealing = () => {
  useEffect(() => {
    // Update document title
    document.title = "The Unsung Hero of Healing: Sleep and Physical Therapy | Encore Performance";
    
    // Track page view
    trackEvent('read_blog', {
      title: 'The Unsung Hero of Healing: Sleep and Physical Therapy',
      category: 'recovery'
    });
    trackMetaEvent('ViewContent', {
      content_name: 'The Unsung Hero of Healing: Sleep and Physical Therapy',
      content_type: 'blog_post',
      content_category: 'recovery'
    });
    
    // Add meta tags programmatically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover why sleep is crucial for physical therapy success. Learn how proper sleep enhances healing, reduces pain, and improves rehabilitation outcomes.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover why sleep is crucial for physical therapy success. Learn how proper sleep enhances healing, reduces pain, and improves rehabilitation outcomes.';
      document.head.appendChild(meta);
    }
    
    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'sleep and healing, physical therapy recovery, sleep for rehabilitation, pain management sleep, sleep for tissue repair, sleep and exercise recovery');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'sleep and healing, physical therapy recovery, sleep for rehabilitation, pain management sleep, sleep for tissue repair, sleep and exercise recovery';
      document.head.appendChild(meta);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link') as HTMLLinkElement;
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://encoreperf.com/blog/sleep-and-healing';
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
                Recovery & Rehabilitation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                The Unsung Hero of Healing: Why Sleep is Your Secret Weapon in Physical Therapy
              </h1>
              <div className="flex items-center text-gray-500 text-sm mt-5">
                <span>By Dr. Shreya Wadhawan, DPT</span>
                <span className="mx-2">•</span>
                <time dateTime="2025-03-15">March, 2025</time>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>

            <article className="prose prose-lg max-w-none">
              <p className="lead">
                You're dedicated to your physical therapy, diligently completing exercises and attending every session. But are you seeing the progress you hoped for? If not, it might be time to look inward—specifically, at your sleep habits.
              </p>
              
              <p>
                Sleep isn't just downtime; it's a critical period for recovery. Your body actively repairs and regenerates during sleep, making it an indispensable part of your rehabilitation journey.
              </p>

              <h2>Why Sleep Matters for Physical Therapy Outcomes</h2>
              
              <h3>Tissue Healing and Immune Function</h3>
              <ul>
                <li>During sleep, your immune system engages in adaptive responses, and stress systems are downregulated, creating an optimal environment for tissue repair.</li>
                <li>Sleep deprivation disrupts these processes, hindering your body's ability to heal effectively.</li>
              </ul>
              
              <h3>Pain Modulation</h3>
              <ul>
                <li>Poor sleep increases pain sensitivity.</li>
                <li>Conversely, improving sleep can mitigate pain-related outcomes.</li>
                <li>Studies have shown causal relationships where poor sleep can drive pain.</li>
              </ul>
              
              <h3>Cognitive Function</h3>
              <ul>
                <li>Sleep is vital for learning and memory, essential for understanding and adhering to your physical therapy exercises.</li>
              </ul>
              
              <h2>Practical Tips for Prioritizing Sleep</h2>
              
              <h3>Establish a Regular Sleep Schedule</h3>
              <p>Go to bed and wake up at the same time daily, even on weekends. Consistency reinforces your body's sleep-wake cycle and helps promote better sleep quality.</p>
              
              <h3>Create a Relaxing Bedtime Routine</h3>
              <p>Wind down with calming activities like reading or a warm bath. This signals to your body that it's time to slow down and prepare for sleep.</p>
              
              <h3>Optimize Your Sleep Environment</h3>
              <p>Ensure your bedroom is dark, quiet, and cool. Consider blackout curtains, white noise machines, or earplugs if needed. The ideal sleeping temperature is around 65 degrees Fahrenheit (18.3 degrees Celsius).</p>
              
              <h3>Limit Screen Time Before Bed</h3>
              <p>Avoid electronic devices an hour before sleep. The blue light emitted can interfere with your body's production of melatonin, the sleep hormone.</p>
              
              <h3>Be Mindful of Caffeine and Alcohol</h3>
              <p>Avoid these substances close to bedtime. Caffeine can disrupt sleep up to 12 hours after consumption, while alcohol might help you fall asleep initially but disrupts the quality of sleep later in the night.</p>
              
              <h2>The Role of Your Physical Therapist</h2>
              
              <p>
                Your physical therapist recognizes the importance of sleep. Don't hesitate to discuss your sleep habits with them. They can offer support and guidance to help you optimize your sleep for better recovery.
              </p>
              
              <p>
                Prioritizing sleep is not a passive act; it's an active ingredient in your healing process. Make it a priority, and watch your recovery progress soar.
              </p>
              
              <div className="my-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Need personalized guidance?</h3>
                <p className="mb-5">
                  If you're struggling with sleep issues that are affecting your recovery, or if you'd like to discuss how to optimize your healing journey, I'm here to help.
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
                  href={`https://twitter.com/intent/tweet?text=The Unsung Hero of Healing: Why Sleep is Your Secret Weapon in Physical Therapy&url=https://encoreperf.com/blog/sleep-and-healing`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://encoreperf.com/blog/sleep-and-healing`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/></svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://encoreperf.com/blog/sleep-and-healing`} 
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

export default SleepAndHealing; 