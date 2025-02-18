import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p>
                  At Encore Performance, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Appointment scheduling information</li>
                  <li>Health and medical information you choose to share</li>
                </ul>
                <p>We automatically collect certain information when you visit our website:</p>
                <ul className="list-disc pl-6">
                  <li>Usage details (IP address, browser type)</li>
                  <li>Traffic data through Google Analytics</li>
                  <li>Cookie data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about appointments</li>
                  <li>Send you relevant updates and information</li>
                  <li>Analyze and improve our website performance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                <p>
                  We use cookies to analyze website traffic and optimize your experience. 
                  You can choose to accept or decline cookies. Most web browsers automatically 
                  accept cookies, but you can modify your browser settings to decline cookies if you prefer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. 
                  However, no method of transmission over the internet is 100% secure, and we cannot 
                  guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to our use of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p>
                  If you have questions about this privacy policy, please contact us at:{' '}
                  <a href="mailto:encoreperf@gmail.com" className="text-primary hover:underline">
                    encoreperf@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 