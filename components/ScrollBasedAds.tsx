'use client';

import { useState, useEffect } from 'react';
import { Gift, Star, Zap, Trophy, Users, Clock, Award, BookOpen, Target, Sparkles } from 'lucide-react';

export default function ScrollBasedAds() {
  const [scrollY, setScrollY] = useState(0);
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Change ad based on scroll position
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const adIndex = Math.floor(scrollPercent * 6) % 6;
      setCurrentAd(adIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const advertisements = [
    {
      id: 0,
      title: "Success Stories",
      subtitle: "Join 32,995+ successful students",
      bgGradient: "from-emerald-400 to-teal-600",
      icon: <Users className="w-6 h-6" />,
      stats: "95% achieve target band score",
      action: "See Success Stories"
    },
    {
      id: 1,
      title: "Limited Time",
      subtitle: "Special discount ending soon",
      bgGradient: "from-orange-400 to-red-500",
      icon: <Clock className="w-6 h-6" />,
      stats: "Save ৳1,000 today only",
      action: "Grab Discount"
    },
    {
      id: 2,
      title: "Expert Guidance",
      subtitle: "Learn from Oxford graduate",
      bgGradient: "from-purple-500 to-indigo-600",
      icon: <Award className="w-6 h-6" />,
      stats: "IELTS Band Score: 8.5/9",
      action: "Meet Instructor"
    },
    {
      id: 3,
      title: "Free Resources",
      subtitle: "Bonus materials worth ৳2,000",
      bgGradient: "from-pink-400 to-rose-600",
      icon: <Gift className="w-6 h-6" />,
      stats: "Book + Mock Tests + PDFs",
      action: "Get Free Bonus"
    },
    {
      id: 4,
      title: "Guaranteed Results",
      subtitle: "Band 7+ or money back",
      bgGradient: "from-blue-500 to-cyan-600",
      icon: <Target className="w-6 h-6" />,
      stats: "100% satisfaction guarantee",
      action: "Start Learning"
    },
    {
      id: 5,
      title: "Premium Features",
      subtitle: "Everything you need to succeed",
      bgGradient: "from-yellow-400 to-orange-500",
      icon: <Sparkles className="w-6 h-6" />,
      stats: "54 videos + Live support",
      action: "Explore Features"
    }
  ];

  const currentAdvertisement = advertisements[currentAd];

  return (
    <div className="space-y-4">
      {/* Main Dynamic Advertisement */}
      <section
        className={`bg-gradient-to-br ${currentAdvertisement.bgGradient} rounded-xl p-6 text-white shadow-lg transform transition-all duration-700 hover:scale-105`}
        style={{
          transform: `translateX(${Math.sin(scrollY * 0.008) * 3}px) rotate(${Math.sin(scrollY * 0.01) * 0.5}deg)`
        }}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              {currentAdvertisement.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{currentAdvertisement.title}</h3>
              <p className="text-sm opacity-90">{currentAdvertisement.subtitle}</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
            <div className="font-semibold text-sm">{currentAdvertisement.stats}</div>
          </div>

          <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {currentAdvertisement.action}
          </button>
        </div>
      </section>

      {/* Floating Achievement Badge */}
      <section
        className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-white shadow-lg"
        style={{
          transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.05})`
        }}
      >
        <div className="flex items-center space-x-3">
          <Trophy className="w-8 h-8" />
          <div>
            <div className="font-bold text-sm">Top Rated Course</div>
            <div className="flex items-center space-x-1 text-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
              <span className="ml-1">4.9/5 (2,847 reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Progress Indicator */}
      <section className="bg-white rounded-xl p-4 shadow-sm border">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-700">Course Progress</span>
            <span className="text-blue-600 font-semibold">
              {Math.min(100, Math.floor((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100))}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 text-center">
            Keep scrolling to discover more features!
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      {/* <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 text-white shadow-lg overflow-hidden">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Live Activity</span>
          </div>
          <div
            className="text-xs animate-pulse"
            style={{
              animationDelay: `${(scrollY * 0.01) % 3}s`
            }}
          >
            {currentAd % 2 === 0
              ? "🎉 Sarah just enrolled from Dhaka"
              : "⭐ Ahmed achieved Band 8 yesterday"
            }
          </div>
        </div>
      </section> */}

      {/* Mini CTA Cards */}
      <div className="grid grid-cols-2 gap-3">
        <section className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 text-white text-center shadow-lg">
          <BookOpen className="w-6 h-6 mx-auto mb-2" />
          <div className="text-xs font-semibold">Free PDF</div>
          <div className="text-xs opacity-90">Download Now</div>
        </section>

        <section className="bg-gradient-to-br from-pink-500 to-red-600 rounded-lg p-3 text-white text-center shadow-lg">
          <Zap className="w-6 h-6 mx-auto mb-2" />
          <div className="text-xs font-semibold">Quick Start</div>
          <div className="text-xs opacity-90">Begin Today</div>
        </section>
      </div>
    </div>
  );
}