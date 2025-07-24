/* eslint-disable @next/next/no-img-element */
'use client';

import { Section } from '../types/product';

interface InstructorSectionProps {
  sections: Section[];
}

export default function InstructorSection({ sections }: InstructorSectionProps) {
  const instructorSection = sections.find(section => section.type === 'instructors');

  if (!instructorSection || !instructorSection.values.length) {
    return null;
  }

  const instructor = instructorSection.values[0];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-bangla">কোর্স ইন্সট্রাক্টর</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">MS</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-lg text-blue-600 font-medium">{instructor.short_description}</p>
                </div>

                <div
                  className="text-gray-700 leading-relaxed space-y-2"
                  dangerouslySetInnerHTML={{ __html: instructor.description }}
                />

                <div className="pt-4">
                  <div className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow-sm font-bangla">
                    <span className="text-sm font-medium text-gray-600">IELTS ব্যান্ড স্কোর:</span>
                    <span className="ml-2 text-lg font-bold text-blue-600">8.5/9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}