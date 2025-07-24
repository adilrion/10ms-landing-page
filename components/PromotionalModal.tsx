'use client';

import { Clock, Gift, Star, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Show modal after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative ">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r   from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto relative z-50">
            <Gift className="w-8 h-8 text-white " />
            <span className="absolute top-0 -z-10 left-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-50 animate-ping "></span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 font-bangla">
            বিশেষ অফার!
          </h3>

          <p className="text-gray-600 font-bangla">
            আজই এনরোল করুন এবং পান:
          </p>

          <div className="space-y-2 text-left">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-bangla">ফ্রি হার্ডকপি বই</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-bangla">লাইভ ডাউট সলভিং ক্লাস</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-bangla">২০টি মক টেস্ট</span>
            </div>
          </div>

          <div className="bg-red-100 border border-red-200 rounded-lg p-3">
            <div className="flex items-center justify-center space-x-2 text-red-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-bold font-bangla">সীমিত সময়ের অফার!</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 font-bangla"
            >
              এনরোল করুন
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 font-bangla"
            >
              পরে দেখব
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}