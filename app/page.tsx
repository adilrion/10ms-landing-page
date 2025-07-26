'use client';

import AboutSection from '@/components/AboutSection';
import AdvertisingCard from '@/components/AdvertisingCard';
import CTASection from '@/components/CTASection';
import ChecklistSection from '@/components/ChecklistSection';
import CourseLayoutSection from '@/components/CourseLayoutSection';
import DescriptionSection from '@/components/DescriptionSection';
import ExclusiveFeaturesSection from '@/components/ExclusiveFeaturesSection';
import FloatingCTABanner from '@/components/FloatingCTABanner';
import InstructorsSection from '@/components/InstructorsSection';
import LearningOutcomesSection from '@/components/LearningOutcomesSection';
import ScrollBasedAds from '@/components/ScrollBasedAds';
import TitleSection from '@/components/TitleSection';
import TrailerSection from '@/components/TrailerSection';
import { useEffect, useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import Navbar from '../components/Navbar';
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
      <FloatingCTABanner />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <TitleSection data={productData} />
            <DescriptionSection data={productData} />

            {/* Advertising Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdvertisingCard
                type="discount"
                title="বিশেষ ছাড় অফার!"
                subtitle="আজই এনরোল করুন এবং ৭০% পর্যন্ত ছাড় পান"
                buttonText="অফার গ্রহণ করুন"
              />
              <AdvertisingCard
                type="bonus"
                title="ফ্রি বোনাস প্যাকেজ"
                subtitle="হার্ডকপি বই + লাইভ ক্লাস + মক টেস্ট"
                buttonText="বিস্তারিত দেখুন"
              />
            </div>

            <InstructorsSection sections={productData.sections} />
            <CourseLayoutSection sections={productData.sections} />
            <LearningOutcomesSection sections={productData.sections} />

            {/* Another CTA Card */}
            <AdvertisingCard
              type="limited"
              title="সীমিত সময়ের অফার!"
              subtitle="মাত্র ২৪ ঘন্টা বাকি - এই সুযোগ হাতছাড়া করবেন না"
              buttonText="এখনই কিনুন"
              className="md:col-span-2"
            />

            <ExclusiveFeaturesSection sections={productData.sections} />
            <AboutSection sections={productData.sections} />
            {/* <CourseDetailsSection sections={productData.sections} /> */}

          </div>

          {/* Right Column - Multimedia & CTA */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-8 space-y-6">
              <TrailerSection data={productData} />
              {/* <DynamicCTACards data={productData} /> */}
              <CTASection ctaText={productData.cta_text} />
              <ScrollBasedAds />
              <ChecklistSection checklist={productData.checklist} />



            </div>

          </div>
        </div>
      </div>

      {/* Full Width Sections */}
      <TestimonialsSection sections={productData.sections} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <CountdownTimer />
      </div>
      <FAQSection sections={productData.sections} />
      <Footer ctaText={productData.cta_text} />
    </div>
  );
}