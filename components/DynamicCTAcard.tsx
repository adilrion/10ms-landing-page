'use client';

import { Award, BookOpen, Gift, ShoppingCart, Star, Timer, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ProductData } from '../types/product';

interface DynamicCTACardsProps {
  data: ProductData;
}

export default function DynamicCTACards({ data }: DynamicCTACardsProps) {
  const [scrollY, setScrollY] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Change card based on scroll position
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent < 0.2) {
        setCurrentCard(0);
      } else if (scrollPercent < 0.4) {
        setCurrentCard(1);
      } else if (scrollPercent < 0.6) {
        setCurrentCard(2);
      } else if (scrollPercent < 0.8) {
        setCurrentCard(3);
      } else {
        setCurrentCard(4);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaCards = [
    {
      id: 0,
      title: "Early Bird Special",
      subtitle: "Limited Time Offer",
      price: "৳ 2,500",
      originalPrice: "৳ 3,500",
      discount: "29% OFF",
      bgGradient: "from-blue-600 to-teal-600",
      icon: <Timer className="w-5 h-5" />,
      features: ["Lifetime Access", "Free PDF Resources", "Mock Tests"],
      urgency: "Only 48 hours left!"
    },
    {
      id: 1,
      title: "Most Popular",
      subtitle: "Best Value Package",
      price: "৳ 2,500",
      originalPrice: "৳ 3,500",
      discount: "BESTSELLER",
      bgGradient: "from-purple-600 to-pink-600",
      icon: <Star className="w-5 h-5" />,
      features: ["32,995+ Students", "Expert Support", "Certificate"],
      urgency: "Join thousands of successful students!"
    },
    {
      id: 2,
      title: "Premium Access",
      subtitle: "Complete IELTS Mastery",
      price: "৳ 2,500",
      originalPrice: "৳ 3,500",
      discount: "PREMIUM",
      bgGradient: "from-orange-500 to-red-600",
      icon: <Award className="w-5 h-5" />,
      features: ["Live Classes", "Personal Mentor", "Priority Support"],
      urgency: "Upgrade your learning experience!"
    },
    {
      id: 3,
      title: "Final Call",
      subtitle: "Don't Miss Out",
      price: "৳ 2,500",
      originalPrice: "৳ 3,500",
      discount: "LAST CHANCE",
      bgGradient: "from-green-600 to-blue-600",
      icon: <Zap className="w-5 h-5" />,
      features: ["Instant Access", "Mobile App", "Offline Downloads"],
      urgency: "Secure your spot now!"
    },
    {
      id: 4,
      title: "Success Guarantee",
      subtitle: "Achieve Your Goals",
      price: "৳ 2,500",
      originalPrice: "৳ 3,500",
      discount: "GUARANTEED",
      bgGradient: "from-indigo-600 to-purple-600",
      icon: <BookOpen className="w-5 h-5" />,
      features: ["Band 7+ Guarantee", "Money Back", "Success Track"],
      urgency: "Start your success journey!"
    }
  ];

  const activeCard = ctaCards[currentCard];

  return (
    <div className="space-y-4">
      {/* Main Dynamic CTA Card */}
      <section
        className={`bg-gradient-to-br ${activeCard.bgGradient} rounded-xl p-6 text-white shadow-lg transform transition-all duration-500 hover:scale-105`}
        style={{
          transform: `translateY(${Math.sin(scrollY * 0.01) * 2}px) scale(${1 + Math.sin(scrollY * 0.005) * 0.02})`
        }}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {activeCard.icon}
              <span className="font-bold text-lg">{activeCard.title}</span>
            </div>
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
              {activeCard.discount}
            </div>
          </div>

          <div>
            <p className="text-sm opacity-90 mb-2">{activeCard.subtitle}</p>
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-bold">{activeCard.price}</div>
              <div className="text-lg line-through opacity-70">{activeCard.originalPrice}</div>
            </div>
          </div>

          <button className="w-full bg-white text-gray-900 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            <ShoppingCart className="w-5 h-5 inline mr-2" />
            {data.cta_text.name} Now
          </button>

          <div className="space-y-2">
            {activeCard.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm opacity-90">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>

          <div className="text-center text-sm bg-white bg-opacity-20 rounded-lg p-2">
            <Zap className="w-4 h-4 inline mr-1" />
            {activeCard.urgency}
          </div>
        </div>
      </section>

      {/* Secondary CTA Cards */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-4 text-white shadow-lg">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <Gift className="w-5 h-5" />
            <span className="font-bold">Free Bonus Worth ৳1,500</span>
          </div>
          <div className="text-sm space-y-1">
            <div>✓ IELTS Practice Book</div>
            <div>✓ 20 Additional Mock Tests</div>
            <div>✓ Speaking Practice Videos</div>
          </div>
          <button className="w-full bg-white text-teal-600 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
            Claim Free Bonus
          </button>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-4 text-white shadow-lg animate-pulse">
        <div className="text-center space-y-2">
          <div className="font-bold text-sm">⚡ FLASH SALE ⚡</div>
          <div className="text-xs">Next 50 students get extra 10% off</div>
          <div className="bg-white text-red-600 px-3 py-1 rounded-full text-xs font-bold inline-block">
            47 spots left
          </div>
        </div>
      </section>
    </div>
  );
}