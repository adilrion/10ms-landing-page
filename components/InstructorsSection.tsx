/* eslint-disable @next/next/no-img-element */
'use client';

import { Section } from '../types/product';

interface InstructorsSectionProps {
  sections: Section[];
}

export default function InstructorsSection({ sections }: InstructorsSectionProps) {
  const instructorSection = sections.find(section => section.type === 'instructors');

  if (!instructorSection || !instructorSection.values.length) {
    return null;
  }

  const instructor = instructorSection.values[0];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 font-bangla">কোর্স ইন্সট্রাক্টর</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
            <p className="text-blue-600 font-medium mb-3">{instructor.short_description}</p>

            <div
              className="text-gray-700 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: instructor.description }}
            />

            <div className=" inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <span className="font-bangla">IELTS ব্যান্ড স্কোর: ৮.৫/৯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}