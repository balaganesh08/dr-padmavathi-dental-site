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
  description: 'Top-rated dental clinic in Kakinada offering dental implants, braces, root canal, teeth whitening & kids dentistry. Dr. Padmavathi - MDS, FAGE Specialist Pedodontist. 4200+ Happy Patients. Call 8501802222',
  keywords: 'best dentist Kakinada, dental clinic Kakinada, dental implants Kakinada, pediatric dentist Kakinada, kids dentistry Kakinada, teeth whitening Kakinada, braces Kakinada, root canal Kakinada, cosmetic dentistry Kakinada, Dr Padmavathi dentist, dental hospital Kakinada',
  authors: [{ name: 'Dr. Padmavathi' }],
  publisher: 'Dr. Padmavathi Dental Hospital & Implant Centre',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Best Dentist in Kakinada | Dr. Padmavathi Dental Clinic',
    description: 'Expert dental care in Kakinada - Implants, Braces, Root Canal, Kids Dentistry & More. 8+ Years Experience. Book Now: 8501802222',
    type: 'website',
    locale: 'en_IN',
  },
  verification: {
    google: 'google-site-verification: meta-tag-content-here',
  },
  alternates: {
    canonical: 'https://padmavathisdental.com',
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
    image: 'https://padmavathisdental.com/logo.png',
    description: 'Best dentist in Kakinada offering dental implants, braces, root canal, pediatric dentistry, and cosmetic treatments. Top-rated dental clinic in Andhra Pradesh.',
    url: 'https://padmavathisdental.com',
    telephone: '+91-8501802222',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kakinada',
      addressRegion: 'Andhra Pradesh',
      postalCode: '533005',
      addressCountry: 'IN',
      streetAddress: 'Door no..7-102, suruchi foods upstairs, 7-103, road, Thimmapuram, Timmapuram'
    },
    areaServed: [
      'Kakinada',
      'Achampeta',
      'Timmapuram',
      'Thimmapuram',
      'East Godavari District',
      'Andhra Pradesh',
      'Rajahmundry',
      'Amalapuram'
    ],
    additionalAddress: {
      '@type': 'PostalAddress',
      addressLocality: 'Achampeta',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
      streetAddress: 'Near SRMT Mall, Achampeta, Kakinada'
    },
    keywords: 'dentist Kakinada, dental clinic Kakinada, dental implants Kakinada, pediatric dentist Kakinada, braces Kakinada, root canal Kakinada, teeth whitening Kakinada, best dentist in Kakinada, dental hospital Kakinada, dentist Achampeta, dental clinic Achampeta, dentist near SRMT Mall, dental clinic near SRMT Mall, dentist Timmapuram, pediatric dentist Achampeta',
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
      ratingValue: '5.0',
      reviewCount: '95'
    },
    hasCertification: {
      '@type': 'Certification',
      name: 'Women-Owned Business',
      issuedBy: 'Self-Identified'
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HZ4C6S7FC0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HZ4C6S7FC0');
            `,
          }}
        />
        
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        
        {/* Preload critical LCP images */}
        <link rel="preload" as="image" href="/Dr_Padmavathi.JPG" fetchPriority="high" />
        
        {/* Structured data */}
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
