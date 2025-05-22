import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Social Media</span> Services
          </h2>
          <p className="text-gray-600">
            We provide comprehensive social media marketing solutions tailored to your business goals and target audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all transform hover:scale-105"
          >
            Get Custom Social Media Strategy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;