import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Best Dentist in Kakinada | Dr. Padmavathi Dental Clinic | Dental Implants & Pediatric Dentistry',
  description: 'Top-rated dental clinic in Kakinada offering dental implants, braces, root canal, teeth whitening & kids dentistry. Dr. Padmavathi - MDS, FAGE Specialist Pedodontist. 2200+ Happy Patients. Call 8501802222',
  keywords: 'best dentist Kakinada, dental clinic Kakinada, dental implants Kakinada, pediatric dentist Kakinada, kids dentistry Kakinada, teeth whitening Kakinada, braces Kakinada, root canal Kakinada, cosmetic dentistry Kakinada, Dr Padmavathi dentist, dental hospital Kakinada',
  authors: [{ name: 'Dr. Padmavathi' }],
  openGraph: {
    title: 'Best Dentist in Kakinada | Dr. Padmavathi Dental Clinic',
    description: 'Expert dental care in Kakinada - Implants, Braces, Root Canal, Kids Dentistry & More. 8+ Years Experience. Book Now: 8501802222',
    type: 'website',
    locale: 'en_IN',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://drpadmavathidental.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dr. Padmavathi Dental Hospital & Implant Centre',
    image: 'https://drpadmavathidental.com/logo.png',
    description: 'Premier dental clinic in Kakinada offering dental implants, braces, root canal, pediatric dentistry, and cosmetic treatments',
    url: 'https://drpadmavathidental.com',
    telephone: '+91-8501802222',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kakinada',
      addressRegion: 'Andhra Pradesh',
      postalCode: '533001',
      addressCountry: 'IN'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '17:00',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '14:00'
      }
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150'
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${lato.variable} font-sans`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
