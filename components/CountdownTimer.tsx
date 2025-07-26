'use client';

import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-xl shadow-lg mb-16">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Clock className="w-6 h-6" />
          <h3 className="text-xl font-bold font-bangla">বিশেষ অফার শেষ হবে</h3>
        </div>

        <div className="flex justify-center space-x-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-xs font-bangla">দিন</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs font-bangla">ঘন্টা</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs font-bangla">মিনিট</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs font-bangla">সেকেন্ড</div>
          </div>
        </div>

        <p className="text-sm opacity-90 font-bangla">
          এই সুযোগ হাতছাড়া করবেন না! আজই এনরোল করুন।
        </p>
      </div>
    </div>
  );
}