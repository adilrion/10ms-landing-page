/* eslint-disable @next/next/no-img-element */
'use client';

import { ProductData } from '../types/product';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface TrailerSectionProps {
  data: ProductData;
}

export default function TrailerSection({ data }: TrailerSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const mainVideo = data.media.find(m => m.name === 'preview_gallery' && m.resource_type === 'video');
  const thumbnailImage = data.media.find(m => m.name === 'thumbnail' && m.resource_type === 'image');

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="bg-white rounded-xl shadow-lg overflow-hidden">
      
      <div className="relative">
        {!isVideoPlaying ? (
          <>
            <img
              src={thumbnailImage?.resource_value || mainVideo?.thumbnail_url}
              alt={data.title}
              className="w-full h-56 object-cover"
            />
            {mainVideo && (
              <button
                onClick={handleVideoPlay}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-blue-600 ml-1" />
                </div>
              </button>
            )}
          </>
        ) : (
          <div className="w-full h-56">
            <iframe
              src={`https://www.youtube.com/embed/${mainVideo?.resource_value}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
}