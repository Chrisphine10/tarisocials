import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#017F02] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-red-600/30 rounded-xl blur-lg"></div>
              <img 
                src="https://i.postimg.cc/C1hyGwrS/boardroom.png" 
                alt="Tari Socials Team" 
                className="rounded-xl shadow-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{" "}
              <span className="text-red-600 [text-shadow:0_2px_4px_black]">
                Tari Socials
              </span>
            </h2>
            
            <p className="text-white/80 mb-6">
              Tari Socials is a premier social media marketing agency based in Nairobi, Kenya. We are passionate about helping businesses harness the power of social media to connect with their audience, build brand awareness, and drive measurable results.
            </p>
            
            <p className="text-white/80 mb-8">
              With over 5 years of experience working with businesses across East Africa, our team of creative strategists, content creators, and data analysts deliver tailored social media solutions that align with your business goals and resonate with your target audience.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-red-600 [text-shadow:0_2px_4px_black]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-white/70">Ramco Courts, Mombasa Road, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-red-600 [text-shadow:0_2px_4px_black]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-white/70">info@tarisocials.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-red-600 [text-shadow:0_2px_4px_black]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-white/70">+254 700 123 456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
