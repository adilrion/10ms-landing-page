'use client';

import { Section } from '../types/product';
import { CheckCircle } from 'lucide-react';

interface PointersSectionProps {
  sections: Section[];
}

export default function PointersSection({ sections }: PointersSectionProps) {
  const pointersSection = sections.find(section => section.type === 'pointers');
  
  if (!pointersSection || !pointersSection.values.length) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-bangla">কোর্স করে যা যা শিখবেন</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pointersSection.values.map((pointer, index) => (
              <div 
                key={pointer.id}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-700 leading-relaxed font-bangla">{pointer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}