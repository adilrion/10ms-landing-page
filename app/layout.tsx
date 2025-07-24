import './globals.css';
import type { Metadata } from 'next';
import { Inter, Hind_Siliguri } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const hindSiliguri = Hind_Siliguri({ 
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bangla'
});

export const metadata: Metadata = {
  title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
  description: 'Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the country.',
  keywords: 'IELTS, IELTS Course, IELTS Preparation, Munzereen Shahid, 10 Minute School, IELTS Band Score, Academic IELTS, General Training IELTS',
  openGraph: {
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Get complete preparation of Academic IELTS and General Training IELTS in one course!',
    images: ['https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${hindSiliguri.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}