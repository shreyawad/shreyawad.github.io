import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Location } from "@/components/Location";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Encore Performance | Physical Therapy & Hypermobility Specialist in San Carlos',
  description: 'Expert physical therapy services specializing in hypermobility, chronic pain, and rehabilitation in San Carlos, CA. 75-minute personalized sessions with Dr. Shreya, DPT. Virtual and in-person options available.',
  keywords: 'physical therapy, hypermobility, EDS, HSD, rehabilitation, chronic pain, San Carlos, Bay Area, virtual PT, Dr. Shreya',
  openGraph: {
    title: 'Encore Performance | Physical Therapy & Hypermobility Specialist',
    description: 'Specialized physical therapy for hypermobility and chronic pain. Book your free consultation with Dr. Shreya in San Carlos, CA.',
    url: 'https://encoreperf.com',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://encoreperf.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Encore Performance PT | Dr. Shreya',
    description: 'Specialized physical therapy for hypermobility and chronic pain in San Carlos, CA.',
    images: ['https://encoreperf.com/og-image.jpg'],
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
