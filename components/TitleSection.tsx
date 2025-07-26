'use client';

import { Star, Users } from 'lucide-react';
import { ProductData } from '../types/product';

interface TitleSectionProps {
  data: ProductData;
}

export default function TitleSection({ data }: TitleSectionProps) {
  return (
    <section className="space-y-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 pb-6 ">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <span className="font-bangla">কোর্স</span>
        <span>•</span>
        <span className="font-bangla">IELTS প্রস্তুতি</span>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
        {data.title}
      </h1>



      <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600">
        <div className="flex items-center space-x-1 font-bangla">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="">৪.৮/৫ রেটিং</span>
          <span className="text-gray-500 dark:text-gray-400">(২,৫৪৩ রিভিউ)</span>

        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4 text-green-500" />
          <span className="font-bangla">৩২,৯৯৫+ শিক্ষার্থী</span>
        </div>
      </div>
    </section>
  );
}