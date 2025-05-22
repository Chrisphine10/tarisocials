import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-[#017F02] overflow-hidden"
    >
      {/* Abstract Shapes without blur */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF6B35]/20 rounded-full z-0"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#36B5B0]/10 rounded-full z-0"></div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white/90 text-sm font-medium">
                Social Media Marketing Experts
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Elevate Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600 [text-shadow:0_2px_4px_black]">
                  Social Media
                </span>
              </span>
              Presence
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              We help businesses in East Africa transform their social media strategy, 
              create engaging content, and drive real business results through 
              strategic digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#services" 
                className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all transform hover:scale-105"
              >
                Our Services
              </a>
              <a 
                href="#case-studies" 
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                See Our Work <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-gradient-to-br from-[#4F3D7A]/50 to-[#36B5B0]/50 p-4 rounded-xl backdrop-blur-sm border border-white/20">
              <img 
                src="https://i.postimg.cc/JnK6MMzY/group.png" 
                alt="Tari Socials Team" 
                className="rounded-lg w-full h-auto shadow-lg object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl w-32 h-32 flex items-center justify-center z-20">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#FD3130]">5+</p>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-xl w-32 h-32 flex items-center justify-center z-20">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#FD3130]">200+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
