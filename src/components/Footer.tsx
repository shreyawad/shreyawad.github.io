
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Encore Performance</h3>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/drshreya.dpt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com/in/shreyawad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <a href="tel:4082035593" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} />
                (408) 203-5593
              </a>
              <a href="mailto:encoreperf@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} />
                encoreperf@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={18} />
                1700 Industrial Rd STE C, San Carlos, CA 94070
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="/" className="block hover:text-white transition-colors">Home</a>
              <a href="/hypermobility" className="block hover:text-white transition-colors">Hypermobility</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Encore Performance Physical Therapy Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
