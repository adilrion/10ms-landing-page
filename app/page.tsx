'use client';

import { useEffect, useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import CourseFactsSection from '../components/CourseFactsSection';
import FAQSection from '../components/FAQSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InstructorSection from '../components/InstructorSection';
import LoadingSpinner from '../components/LoadingSpinner';
import Navbar from '../components/Navbar';
import PointersSection from '../components/PointersSection';
import PromotionalModal from '../components/PromotionalModal';
import StickyCtaBar from '../components/StickyCtaBar';
import TestimonialsSection from '../components/TestimonialsSection';
import { ProductData } from '../types/product';

export default function Home() {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en',
          {
            headers: {
              'X-TENMS-SOURCE-PLATFORM': 'web',
              'accept': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }

        const result = await response.json();
        setProductData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);


  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !productData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Course</h2>
          <p className="text-gray-600">{error || 'Course data not available'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PromotionalModal />
      <StickyCtaBar />
      <HeroSection data={productData} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <CountdownTimer />
      </div>
      <CourseFactsSection checklist={productData.checklist} />
      <InstructorSection sections={productData.sections} />
      <FeaturesSection sections={productData.sections} />
      <PointersSection sections={productData.sections} />
      <TestimonialsSection sections={productData.sections} />
      <FAQSection sections={productData.sections} />
      <Footer ctaText={productData.cta_text} />
    </div>
  );
}