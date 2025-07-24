/* eslint-disable @next/next/no-img-element */
'use client';

import { Section } from '../types/product';

interface FeaturesSectionProps {
  sections: Section[];
}

export default function FeaturesSection({ sections }: FeaturesSectionProps) {
  const featuresSection = sections.find(section => section.type === 'features');

  if (!featuresSection || !featuresSection.values.length) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-bangla">কোর্সের বিন্যাস</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresSection.values.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-10 h-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-bangla">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-bangla">{feature.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}