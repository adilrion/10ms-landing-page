'use client';

import { CtaText } from '../types/product';

interface FooterProps {
  ctaText: CtaText;
}

export default function Footer({ ctaText }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800">
      {/* CTA Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 font-bangla">
                আপনার IELTS লক্ষ্য অর্জনের জন্য প্রস্তুত?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-bangla">
                হাজারো সফল শিক্ষার্থীর সাথে যোগ দিন যারা আমাদের সম্পূর্ণ IELTS কোর্সের মাধ্যমে তাদের টার্গেট ব্যান্ড স্কোর অর্জন করেছেন।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bangla">
                এখনই এনরোল করুন
              </button>
              <span className="text-gray-400 font-bangla">অথবা</span>
              <button className="border border-gray-500 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 font-bangla">
                ফ্রি PDF ডাউনলোড
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="font-bangla">৩২,৯৯৫+ শিক্ষার্থী এনরোলড</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="font-bangla">লাইফটাইম এক্সেস</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="font-bangla">এক্সপার্ট সাপোর্ট</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-400">
          <p className="font-bangla">&copy; ২০২৪ ১০ মিনিট স্কুল। সকল অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}