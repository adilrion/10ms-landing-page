/* eslint-disable @next/next/no-img-element */
'use client';

import { Play, Star } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../types/product';

interface TestimonialsSectionProps {
  sections: Section[];
}

export default function TestimonialsSection({ sections }: TestimonialsSectionProps) {
  const testimonialsSection = sections.find(section => section.type === 'testimonials');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  if (!testimonialsSection || !testimonialsSection.values.length) {
    return null;
  }

  const handleVideoPlay = (videoUrl: string) => {
    setPlayingVideo(videoUrl);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-bangla">শিক্ষার্থীদের মতামত</h2>
          <p className="text-lg text-gray-600 font-bangla">আমাদের শিক্ষার্থীদের সফলতার গল্প</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsSection.values.slice(0, 9).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Student Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.profile_image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/48x48?text=' + testimonial.name.charAt(0);
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-green-600 font-medium">{testimonial.description}</span>
                    </div>
                  </div>
                </div>

                {/* Video Thumbnail or Testimonial Text */}
                {testimonial.video_url && testimonial.thumb ? (
                  <div className="relative">
                    {playingVideo === testimonial.video_url ? (
                      <div className="w-full h-48 rounded-lg overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${testimonial.video_url}?autoplay=1`}
                          className="w-full h-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <>
                        <img
                          src={testimonial.thumb}
                          alt={`${testimonial.name} testimonial`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => handleVideoPlay(testimonial.video_url)}
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300 rounded-lg group"
                        >
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-blue-600 ml-0.5" />
                          </div>
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <blockquote className="text-gray-700 italic leading-relaxed font-bangla">
                    &quot;{testimonial.testimonial}&quot;
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}