import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-red-600">Clients</span> Say
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with Tari Socials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="max-w-2xl text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your social media presence?
            </h3>
            <p className="text-gray-600">
              Join our growing list of satisfied clients and take your brand to the next level.
            </p>
          </div>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
