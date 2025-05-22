import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, position, company, testimonial: content, image } = testimonial;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 flex flex-col h-full">
      <div className="flex-1">
        <svg 
          className="h-8 w-8 text-red-600 mb-4" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 mb-6">{content}</p>
      </div>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
