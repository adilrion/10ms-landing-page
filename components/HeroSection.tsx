/* eslint-disable @next/next/no-img-element */
'use client';

import { Clock, Gift, Play, Star, Users, Video, Zap } from 'lucide-react';
import { useState } from 'react';
import { ProductData } from '../types/product';

interface HeroSectionProps {
  data: ProductData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const mainVideo = data.media.find(m => m.name === 'preview_gallery' && m.resource_type === 'video');
  const thumbnailImage = data.media.find(m => m.name === 'thumbnail' && m.resource_type === 'image');

  const visibleFacts = data.checklist.filter(item => item.list_page_visibility).slice(0, 3);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 lg:py-20">
      {/* Floating CTA Banner */}
      <div className="fixed top-8 right-4 z-50 animate-float">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse-glow">
          <div className="flex items-center space-x-2 text-sm font-bold">
            <Zap className="w-4 h-4" />
            <span className="font-bangla">৫০% ছাড়! সীমিত সময়</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Special Offer Alert */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center space-x-3">
                <Gift className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-bold font-bangla">বিশেষ অফার!</p>
                  <p className="text-sm font-bangla">আজই এনরোল করুন এবং ফ্রি বই + লাইভ ক্লাস পান</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {data.title}
              </h1>
              <div
                className="text-lg text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {visibleFacts.map((fact, index) => (
                <div
                  key={fact.id}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {index === 0 && <Users className="w-5 h-5 text-blue-600" />}
                    {index === 1 && <Video className="w-5 h-5 text-blue-600" />}
                    {index === 2 && <Clock className="w-5 h-5 text-blue-600" />}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{fact.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow">
                  <span className="font-bangla">এখনই এনরোল করুন</span>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <span className="font-bangla">ফ্রি ট্রায়াল</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-bangla">৪.৮/৫ রেটিং</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-green-500" />
                  <span className="font-bangla">৩২,৯৯৫+ শিক্ষার্থী</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video/Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group">
              {!isVideoPlaying ? (
                <>
                  <img
                    src={thumbnailImage?.resource_value || mainVideo?.thumbnail_url}
                    alt={data.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  {mainVideo && (
                    <button
                      onClick={handleVideoPlay}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300 group"
                    >
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </button>
                  )}
                </>
              ) : (
                <div className="w-full h-80 lg:h-96">
                  <iframe
                    src={`https://www.youtube.com/embed/${mainVideo?.resource_value}?autoplay=1`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}