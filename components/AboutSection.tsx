'use client';

import { Section } from '../types/product';

interface AboutSectionProps {
  sections: Section[];
}

// Icon component with consistent styling
const SectionIcon = ({
  color = 'gray',
  children
}: {
  color?: 'blue' | 'green' | 'purple' | 'gray';
  children: React.ReactNode
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
    green: 'bg-green-100 text-green-600 group-hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-200',
    gray: 'bg-gray-100 text-gray-600 group-hover:bg-gray-200',
  };

  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${colorClasses[color]}`}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
};

// Simple, modern icons for different section types
const getIconForSection = (title: string) => {
  const titleLower = title.toLowerCase();

  if (titleLower.includes('this') && titleLower.includes('course') && titleLower.includes('for')) {
    return (
      <SectionIcon color="blue">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </SectionIcon>
    );
  }

  if (titleLower.includes('about') && titleLower.includes('ielts')) {
    return (
      <SectionIcon color="green">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </SectionIcon>
    );
  }

  if (titleLower.includes('help')) {
    return (
      <SectionIcon color="purple">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </SectionIcon>
    );
  }

  // Default icon
  return (
    <SectionIcon>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </SectionIcon>
  );
};

export default function AboutSection({ sections }: AboutSectionProps) {
  const aboutSection = sections.find(section => section.type === 'about');

  if (!aboutSection) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {aboutSection.name}
          </h2>
          {aboutSection.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {aboutSection.description}
            </p>
          )}
        </div>

        <div className="space-y-10">
          {aboutSection.values.map((value, index) => (
            <div
              key={value.id || index}
              className="group relative"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  {getIconForSection(value.title)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <div
                    className="mb-4 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:mb-3 [&>h2]:leading-snug"
                    dangerouslySetInnerHTML={{ __html: value.title }}
                  />

                  {/* Description */}
                  <div
                    className="prose prose-gray max-w-none
                      [&>p]:mb-4 [&>p]:leading-relaxed
                      [&>ul]:my-4 [&>ul]:pl-6 [&>ul]:space-y-2
                      [&>li]:relative [&>li]:pl-6  [&>li]:before:absolute [&>li]:before:left-[-1rem] [&>li]:before:content-['→'] [&>li]:before:ml-4 [&>li]:list-none  [&>li]:before:text-blue-500
                      [&>a]:text-blue-600 [&>a]:hover:text-blue-800 [&>a]:underline [&>a]:transition-colors"
                    dangerouslySetInnerHTML={{ __html: value.description }}
                  />
                </div>
              </div>

              {/* Subtle separator - only show if not last item */}
              {index < aboutSection.values.length - 1 && (
                <div className="mt-10 pt-6 border-t border-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}