'use client';

import { ProductData } from '../types/product';

interface DescriptionSectionProps {
  data: ProductData;
}

export default function DescriptionSection({ data }: DescriptionSectionProps) {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-bangla">কোর্স সম্পর্কে</h2>
      <div 
        className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      
      <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border-l-4 border-primary-500">
        <p className="text-primary-800 dark:text-primary-200 font-medium font-bangla">
          🎯 Academic এবং General Training IELTS উভয়ের জন্য সম্পূর্ণ প্রস্তুতি
        </p>
      </div>
    </section>
  );
}