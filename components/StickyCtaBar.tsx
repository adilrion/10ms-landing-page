'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Users, Clock } from 'lucide-react';

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-green-500" />
              <span className="font-bangla">৩২,৯৯৫+ এনরোলড</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-bangla">লাইফটাইম এক্সেস</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900 font-bangla">৳২,৫০০</div>
            <div className="text-sm text-gray-500 line-through font-bangla">৳৫,০০০</div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2 font-bangla">
            <ShoppingCart className="w-4 h-4" />
            <span>এনরোল করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
}