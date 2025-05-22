import React from 'react';
import { CaseStudy as CaseStudyType } from '../types';

interface CaseStudyProps {
  caseStudy: CaseStudyType;
  isEven: boolean;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ caseStudy, isEven }) => {
  const { client, title, description, results, image } = caseStudy;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-16 border-b border-gray-200 last:border-0">
      <div className={`lg:w-1/2 order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-[#4F3D7A]/20 to-[#FF6B35]/20 rounded-xl blur-lg"></div>
          <img 
            src={image} 
            alt={client} 
            className="rounded-xl shadow-lg w-full h-auto object-cover aspect-video" 
          />
          <div className="absolute -bottom-5 -right-5 bg-white px-4 py-2 rounded shadow-md text-sm font-medium text-red-600">
            {client}
          </div>
        </div>
      </div>
      
      <div className={`lg:w-1/2 order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-red-600 mb-4">Results Achieved:</h4>
          <ul className="space-y-3">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600/20 text-red-600 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;