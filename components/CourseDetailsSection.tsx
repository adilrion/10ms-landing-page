'use client';

import { Section } from '../types/product';

interface CourseDetailsSectionProps {
  sections: Section[];
}

export default function CourseDetailsSection({ sections }: CourseDetailsSectionProps) {
  const aboutSection = sections.find(section => section.type === 'about');
  
  if (!aboutSection || !aboutSection.values.length) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 font-bangla">কোর্সের বিস্তারিত</h2>
      
      <div className="space-y-6">
        {aboutSection.values.map((detail, index) => (
          <div 
            key={detail.id}
            className="bg-gray-50 rounded-xl p-6"
          >
            <div 
              className="text-lg font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{ __html: detail.title }}
            />
            <div 
              className="text-gray-700 leading-relaxed space-y-2"
              dangerouslySetInnerHTML={{ __html: detail.description }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}