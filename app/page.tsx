import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import FloatingButton from '@/components/FloatingButton';

// Lazy load below-the-fold components for mobile performance
const EmergencyBanner = dynamic(() => import('@/components/EmergencyBanner'), { ssr: true, loading: () => <div className="h-24 bg-gradient-to-r from-teal-600 to-green-600 animate-pulse" /> });
const PediatricSpecialization = dynamic(() => import('@/components/PediatricSpecialization'), { ssr: true, loading: () => <div className="h-96 bg-gradient-to-br from-pink-50 to-purple-50 animate-pulse" /> });
const WhyChoose = dynamic(() => import('@/components/WhyChoose'), { ssr: true, loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> });
const BookingSection = dynamic(() => import('@/components/BookingSection'), { ssr: true, loading: () => <div className="h-96 bg-gradient-to-r from-teal-50 to-green-50 animate-pulse" /> });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true, loading: () => <div className="h-80 bg-gray-50 animate-pulse" /> });
const Instagram = dynamic(() => import('@/components/Instagram'), { ssr: false, loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true, loading: () => <div className="h-64 bg-gray-50 animate-pulse" /> });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <EmergencyBanner />
      <PediatricSpecialization />
      <WhyChoose />
      <BookingSection />
      <Testimonials />
      <Instagram />
      <FAQ />
      <Footer />
      <FloatingButton />
    </main>
  );
}

