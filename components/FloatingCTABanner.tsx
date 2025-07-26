'use client';

import { Clock, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingCTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    setIsVisible(true);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-40 max-w-sm animate-bounce-in">
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-4 rounded-xl shadow-2xl border-2 border-white">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full p-1 hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-2 mb-3">
          <Zap className="w-5 h-5 text-yellow-300" />
          <span className="font-bold text-sm font-bangla">বিশেষ অফার!</span>
        </div>

        <h3 className="font-bold text-lg mb-2 font-bangla">৭০% পর্যন্ত ছাড়!</h3>

        <div className="flex items-center space-x-2 mb-3">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-bangla">অফার শেষ হবে:</span>
        </div>

        <div className="flex space-x-2 mb-4">
          <div className="bg-white bg-opacity-20 rounded px-2 py-1 text-center min-w-[40px]">
            <div className="text-lg font-bold">{timeLeft.hours}</div>
            <div className="text-xs font-bangla">ঘন্টা</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded px-2 py-1 text-center min-w-[40px]">
            <div className="text-lg font-bold">{timeLeft.minutes}</div>
            <div className="text-xs font-bangla">মিনিট</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded px-2 py-1 text-center min-w-[40px]">
            <div className="text-lg font-bold">{timeLeft.seconds}</div>
            <div className="text-xs font-bangla">সেকেন্ড</div>
          </div>
        </div>

        <button className="w-full bg-white text-red-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors font-bangla">
          এখনই কিনুন
        </button>
      </div>
    </div>
  );
}