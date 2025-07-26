'use client';

import { CtaText } from '../types/product';
import { ShoppingCart, Clock, Shield, Award } from 'lucide-react';

interface CTASectionProps {
  ctaText: CtaText;
}

export default function CTASection({ ctaText }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-xl p-6 text-white shadow-lg font-bangla">
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-bold">৳২,৫০০</span>
            <span className="text-lg line-through opacity-75">৳৫,০০০</span>
          </div>
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
            <span className="font-bangla">৫০% ছাড়!</span>
          </div>
        </div>
        
        <button className="w-full bg-white text-primary-600 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 animate-pulse-glow">
          <ShoppingCart className="w-5 h-5" />
          <span className="font-bangla">এখনই এনরোল করুন</span>
        </button>
        
        <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
          <span className="font-bangla">ফ্রি ট্রায়াল শুরু করুন</span>
        </button>
        
        <div className="space-y-2 text-sm opacity-90">
          <div className="flex items-center justify-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className="font-bangla">লাইফটাইম এক্সেস</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-4 h-4" />
            <span className="font-bangla">৭ দিনের মানি-ব্যাক গ্যারান্টি</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Award className="w-4 h-4" />
            <span className="font-bangla">সার্টিফিকেট প্রদান</span>
          </div>
        </div>
      </div>
    </section>
  );
}