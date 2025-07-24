'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../types/product';

interface FAQSectionProps {
  sections: Section[];
}

export default function FAQSection({ sections }: FAQSectionProps) {
  const faqSection = sections.find(section => section.type === 'faq');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  if (!faqSection || !faqSection.values.length) {
    return null;
  }

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-bangla">সচরাচর জিজ্ঞাসা</h2>
        </div>

        <div className="space-y-4">
          {faqSection.values.map((faq) => {
            const isOpen = openItems.has(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-300 hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900 pr-4 font-bangla">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-6 pb-4">
                    <div
                      className="text-gray-700 leading-relaxed space-y-2 font-bangla"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}