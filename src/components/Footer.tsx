import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#017F02] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <img 
                src="https://i.postimg.cc/x8hKhWKx/Whats-App-Image-2025-05-20-at-15-45-18-31ee222b.jpg"
                alt="TariSocials Logo" 
                className="h-12 w-auto"
              />
            </div>

            <p className="text-white/70 mb-6 max-w-xs">
              Elevating brands through strategic social media marketing solutions in East Africa and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors transform hover:scale-110"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors transform hover:scale-110"
                title="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors transform hover:scale-110"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors transform hover:scale-110"
                title="Linkedin"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#case-studies" className="text-white/70 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Social Media Management</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Content Creation</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Paid Advertising</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Influencer Marketing</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Analytics & Reporting</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Social Media Strategy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <div className="h-10 w-10 mr-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/70">Ramco Courts, Mombasa Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center group">
                <div className="h-10 w-10 mr-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/70">info@tarisocials.com</span>
              </li>
              <li className="flex items-center group">
                <div className="h-10 w-10 mr-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white/70">+254 700 123 456</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Tari Socials. All rights reserved. A product of Tari Africa Platforms.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
