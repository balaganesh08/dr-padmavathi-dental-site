import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Dr. Padmavathi\'s Dental Hospital & Implant Centre | Best Dental Clinic',
  description: 'Advanced dental care, implants, and cosmetic dentistry in Andhra Pradesh. Expert treatment by Dr. Padmavathi Devi, Specialist Pedodontist. Book your appointment today!',
  keywords: 'dental clinic, dental implants, cosmetic dentistry, pedodontist, dental care Andhra Pradesh, teeth whitening, braces, root canal treatment',
  authors: [{ name: 'Dr. Padmavathi\'s Dental Hospital' }],
  openGraph: {
    title: 'Dr. Padmavathi\'s Dental Hospital & Implant Centre',
    description: 'Your Smile, Our Priority - Advanced Dental Care',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
