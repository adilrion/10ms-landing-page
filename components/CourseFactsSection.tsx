/* eslint-disable @next/next/no-img-element */
'use client';

import { Checklist } from '../types/product';

interface CourseFactsSectionProps {
  checklist: Checklist[];
}

export default function CourseFactsSection({ checklist }: CourseFactsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-bangla">কোর্সের বিশেষত্ব</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bangla">
            আপনার টার্গেট IELTS ব্যান্ড স্কোর অর্জনের জন্য যা যা প্রয়োজন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklist.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium leading-relaxed font-bangla">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}