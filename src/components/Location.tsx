import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Location = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Visit Me</h2>
          <p className="text-gray-600">Conveniently located in San Carlos, CA</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">1700 Industrial Rd STE C</p>
                  <p className="text-gray-600">San Carlos, CA 94070</p>
                  <a 
                    href="https://maps.app.goo.gl/mqso7EYhyyvvzQY68"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:4082035593" className="text-gray-600 hover:text-primary">
                    (408) 203-5593
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:encoreperf@gmail.com" className="text-gray-600 hover:text-primary">
                    encoreperf@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.5731843080087!2d-122.24483168429277!3d37.49799518131371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x698cb6244c1aa945%3A0x3a740648dbc7b452!2sEncore%20Performance%20Company%20LLC!5e0!3m2!1sen!2sus!4v1647904824576!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Encore Performance Physical Therapy Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 