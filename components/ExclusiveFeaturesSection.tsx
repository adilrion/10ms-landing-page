/* eslint-disable @next/next/no-img-element */
'use client';

import { Award, BookOpen, Users, Video } from 'lucide-react';
import { Section } from '../types/product';

interface ExclusiveFeaturesSectionProps {
  sections: Section[];
}

export default function ExclusiveFeaturesSection({ sections }: ExclusiveFeaturesSectionProps) {
  const featureExplanationsSection = sections.find(section => section.type === 'feature_explanations');

  if (!featureExplanationsSection || !featureExplanationsSection.values.length) {
    return null;
  }

  const getIcon = (index: number) => {
    const icons = [Video, BookOpen, Users, Award];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-6 h-6 text-blue-600" />;
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 font-bangla">কোর্সের বিশেষ সুবিধা</h2>

      <div className="space-y-6">
        {featureExplanationsSection.values.map((feature, index) => (
          <div
            key={feature.id}
            className="bg-white border border-gray-200 rounded-xl p-6  duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0">
                {feature.file_url ? (
                  <img
                    src={feature.file_url}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  getIcon(index)
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-bangla">{feature.title}</h3>

                <div className="space-y-2">
                  {feature.checklist.map((item: string, itemIndex: number) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm font-bangla">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}