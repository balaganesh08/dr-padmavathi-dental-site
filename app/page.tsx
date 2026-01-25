import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import FloatingButton from '@/components/FloatingButton';

// Lazy load below-the-fold components
const BookingSection = dynamic(() => import('@/components/BookingSection'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const Instagram = dynamic(() => import('@/components/Instagram'), { ssr: false });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
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

