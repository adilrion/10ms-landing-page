/* eslint-disable @next/next/no-img-element */
'use client';

import { Section } from '../types/product';

interface CourseLayoutSectionProps {
  sections: Section[];
}

export default function CourseLayoutSection({ sections }: CourseLayoutSectionProps) {
  const featuresSection = sections.find(section => section.type === 'features');

  if (!featuresSection || !featuresSection.values.length) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 font-bangla">কোর্সের বিন্যাস</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuresSection.values.map((feature, index) => (
          <div
            key={feature.id}
            className="bg-white border border-gray-200 rounded-lg p-5  transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-6 h-6"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 font-bangla">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-bangla">{feature.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}