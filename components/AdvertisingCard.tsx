'use client';

import { ArrowRight, Clock, Gift, Star, Users } from 'lucide-react';
import { useState } from 'react';

interface AdvertisingCardProps {
  type: 'discount' | 'bonus' | 'limited' | 'popular';
  title: string;
  subtitle: string;
  buttonText: string;
  className?: string;
}

export default function AdvertisingCard({ type, title, subtitle, buttonText, className = '' }: AdvertisingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getCardStyle = () => {
    switch (type) {
      case 'discount':
        return 'bg-gradient-to-br from-red-500 to-pink-600 text-white';
      case 'bonus':
        return 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white';
      case 'limited':
        return 'bg-gradient-to-br from-accent-500 to-orange-500 text-white';
      case 'popular':
        return 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white';
      default:
        return 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'discount':
        return <Gift className="w-6 h-6" />;
      case 'bonus':
        return <Star className="w-6 h-6" />;
      case 'limited':
        return <Clock className="w-6 h-6" />;
      case 'popular':
        return <Users className="w-6 h-6" />;
      default:
        return <Gift className="w-6 h-6" />;
    }
  };

  return (
    <div
      className={`${getCardStyle()} rounded-xl p-6 shadow    transform  transition-all duration-300 cursor-pointer animate-bounce-in ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-white bg-opacity-20 rounded-lg">
          {getIcon()}
        </div>
        {type === 'limited' && (
          <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
            <span className="font-bangla">জরুরি!</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold mb-2 font-bangla">{title}</h3>
      <p className="text-sm opacity-90 mb-4 font-bangla">{subtitle}</p>

      <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-bangla">
        <span>{buttonText}</span>
        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
      </button>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-10 transform -skew-x-12 animate-shimmer"></div>
    </div>
  );
}