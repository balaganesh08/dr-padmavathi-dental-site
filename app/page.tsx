import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import BookingSection from '@/components/BookingSection';
import Testimonials from '@/components/Testimonials';
import Instagram from '@/components/Instagram';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

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

