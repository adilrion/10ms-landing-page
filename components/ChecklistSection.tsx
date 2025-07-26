/* eslint-disable @next/next/no-img-element */
'use client';

import { Checklist } from '../types/product';

interface ChecklistSectionProps {
  checklist: Checklist[];
}

export default function ChecklistSection({ checklist }: ChecklistSectionProps) {
  return (
    <section className="bg-white rounded-xl border p-6">
      <h3 className="font-bold text-gray-900 mb-4 font-bangla">এই কোর্সে যা যা পাবেন</h3>

      <div className="space-y-3">
        {checklist.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <div className="w-5 h-5  flex items-center justify-center flex-shrink-0 mt-0.5">
              {/* <Check className="w-3 h-3 text-green-600" /> */}
              <img
                src={item.icon}
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-700 text-sm font-medium font-bangla">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-yellow-800 text-sm font-medium font-bangla">
          🎁 বিশেষ বোনাস: ফ্রি হার্ডকপি বই ডেলিভারি!
        </p>
      </div>
    </section>
  );
}