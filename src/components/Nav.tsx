import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Linkedin, MapPin, Menu, X } from "lucide-react";
import { trackEvent } from "@/utils/analytics";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="bg-gray-900 py-2 px-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:4082035593" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm">
              <Phone size={14} />
              (408) 203-5593
            </a>
            <a href="mailto:encoreperf@gmail.com" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm">
              <Mail size={14} />
              encoreperf@gmail.com
            </a>
            <a 
              href="https://www.google.com/maps/place/Encore+Performance+Company+LLC/@37.4979952,-122.2448317,17z/data=!3m2!4b1!5s0x808fa24098586fd7:0xaa6e4b5ae8372eeb!4m6!3m5!1s0x698cb6244c1aa945:0x3a740648dbc7b452!8m2!3d37.497991!4d-122.2422568!16s%2Fg%2F11lcl409qv?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"
            >
              <MapPin size={14} />
              Find us on Google Maps
            </a>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/drshreya.dpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center"
              onClick={() => trackEvent('social_click', { 
                platform: 'instagram',
                location: 'nav'
              })}
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://linkedin.com/in/shreyawad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center"
              onClick={() => trackEvent('social_click', { 
                platform: 'linkedin',
                location: 'nav'
              })}
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <nav className={`w-full transition-all ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Encore Performance
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/hypermobility" className="text-gray-600 hover:text-gray-900">
                Hypermobility
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <div className="hidden md:block">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <a href="https://calendar.app.google/N9GAaTqSHfVA61qUA">
                    Book a Consultation
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-gray-600">
                  Home
                </Link>
                <Link to="/hypermobility" className="block px-3 py-2 text-gray-600">
                  Hypermobility
                </Link>
                <Link to="/blog" className="block px-3 py-2 text-gray-600">
                  Blog
                </Link>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white w-full mt-2">
                  <a href="https://calendar.app.google/N9GAaTqSHfVA61qUA">
                    Book a Consultation
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
