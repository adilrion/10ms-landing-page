'use client';

import { Section } from '../types/product';
import { CheckCircle } from 'lucide-react';

interface LearningOutcomesSectionProps {
  sections: Section[];
}

export default function LearningOutcomesSection({ sections }: LearningOutcomesSectionProps) {
  const pointersSection = sections.find(section => section.type === 'pointers');
  
  if (!pointersSection || !pointersSection.values.length) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 font-bangla">কোর্স করে যা যা শিখবেন</h2>
      
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
        <div className="space-y-4">
          {pointersSection.values.map((pointer, index) => (
            <div 
              key={pointer.id}
              className="flex items-start space-x-3"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 leading-relaxed font-bangla">{pointer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}