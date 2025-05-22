import React from 'react';
import CaseStudy from './CaseStudy';
import { caseStudies } from '../data';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">Success</span> Stories
          </h2>
          <p className="text-gray-600">
            See how we've helped businesses like yours transform their social media presence and achieve impressive results.
          </p>
        </div>
        
        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudy 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all transform hover:scale-105"
          >
            Ready for Your Success Story?
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
