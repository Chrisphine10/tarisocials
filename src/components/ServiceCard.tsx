import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon } = service;
  
  // Dynamically get the icon component from lucide-react
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-gray-100 h-full flex flex-col group">
      <div className="w-14 h-14 rounded-full bg-red-600/10 flex items-center justify-center mb-5 group-hover:bg-red-600 transition-colors duration-300">
        {IconComponent && (
          <IconComponent 
            className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" 
          />
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="mt-5">
        <a 
          href="#contact" 
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
        >
          Learn more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;