import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FiArrowLeft, FiPhone, FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';
import { FaStar, FaCheck } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Teeth Whitening in Kakinada | 1 Hour Professional Whitening | Dr. Padmavathi',
  description: 'Professional teeth whitening in Kakinada. Get a brighter, whiter smile in just 1 hour. Safe, effective, long-lasting results. Book appointment at Dr. Padmavathi Dental Clinic: 8501802222',
  keywords: 'teeth whitening Kakinada, dental bleaching Kakinada, smile whitening, laser whitening, professional whitening, cosmetic dentistry Kakinada',
  openGraph: {
    title: 'Teeth Whitening in Kakinada | Dr. Padmavathi Dental Clinic',
    description: 'Get a brilliant white smile in just 1 hour with professional teeth whitening. Safe, effective, and long-lasting results.',
    type: 'website',
  }
};

export default function TeethWhiteningPage() {
  const benefits = [
    'Visible results in just 1 hour',
    'Safe for enamel and gums',
    'Up to 8 shades whiter',
    'Long-lasting whitening effect',
    'Professional-grade products',
    'Minimal sensitivity',
    'Customized treatment',
    'Boost self-confidence'
  ];

  const candidates = [
    'Yellow or stained teeth',
    'Coffee/tea drinker stains',
    'Tobacco stains',
    'Aging-related discoloration',
    'Special events preparation',
    'Professional appearance needs'
  ];

  const faqs = [
    {
      q: 'How long does teeth whitening last in Kakinada?',
      a: 'Professional teeth whitening typically lasts 1-3 years with proper care. The duration depends on your lifestyle habits like coffee/tea consumption, smoking, and oral hygiene. At Dr. Padmavathi\'s clinic, we provide maintenance tips to extend your whitening results.'
    },
    {
      q: 'Is teeth whitening safe?',
      a: 'Yes! Professional teeth whitening is completely safe when performed by a qualified dentist. We use FDA-approved whitening agents and protective measures for your gums. Unlike over-the-counter products, our supervised treatment ensures safety and effectiveness.'
    },
    {
      q: 'Does teeth whitening cause sensitivity?',
      a: 'Some patients may experience temporary mild sensitivity during or after treatment. We use desensitizing agents and adjust the treatment intensity to minimize discomfort. Any sensitivity typically resolves within 24-48 hours.'
    },
    {
      q: 'What is the cost of teeth whitening in Kakinada?',
      a: 'The cost varies based on the whitening method and number of sessions needed. At Dr. Padmavathi\'s dental clinic in Kakinada, we offer competitive pricing with excellent results. Contact us for a personalized quote after consultation.'
    },
    {
      q: 'Can everyone get teeth whitening?',
      a: 'Most people can benefit from teeth whitening, but it\'s not suitable for everyone. We don\'t recommend it for pregnant women, children under 16, or those with severe tooth decay or gum disease. A consultation will determine if you\'re a good candidate.'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-teal-600">Home</Link>
              <span>/</span>
              <Link href="/specialties" className="hover:text-teal-600">Specialties</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Teeth Whitening</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-16 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
                  <FaStar className="w-4 h-4" />
                  Cosmetic Dentistry
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Professional Teeth Whitening in Kakinada
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Get a brilliantly white smile in just 1 hour with our professional teeth whitening treatment. Safe, effective, and long-lasting results.
                </p>
                
                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <FiClock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-sm text-gray-600">60 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaStar className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Results</div>
                      <div className="text-sm text-gray-600">Up to 8 shades</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:8501802222"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <FiPhone className="w-5 h-5" />
                    Call 8501802222
                  </a>
                  <Link
                    href="/contact"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <FiCalendar className="w-5 h-5" />
                    Book Free Consultation
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/3845630/pexels-photo-3845630.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional Teeth Whitening in Kakinada - Dr. Padmavathi Dental Clinic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 rounded-full p-3">
                      <FaStar className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">1 Hour</div>
                      <div className="text-sm text-gray-600">Brighter Smile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Teeth Whitening */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Teeth Whitening - Transform Your Smile
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Professional teeth whitening at <strong>Dr. Padmavathi's Dental Clinic in Kakinada</strong> is a 
                  cosmetic dental procedure that lightens teeth and removes stains and discoloration. Our advanced 
                  whitening treatment can make your teeth up to 8 shades whiter in just one hour.
                </p>
                <p>
                  Unlike over-the-counter whitening products, our professional treatment uses medical-grade whitening 
                  agents that are safe, effective, and deliver dramatic results. The procedure is performed under 
                  professional supervision, ensuring optimal safety and whitening outcomes.
                </p>
                <p>
                  We offer both in-office whitening for immediate results and take-home kits for gradual whitening. 
                  Our Kakinada dental clinic uses the latest technology and FDA-approved whitening gels to give you 
                  a confident, radiant smile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who is a Good Candidate */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who Can Benefit from Teeth Whitening?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional teeth whitening is ideal for various dental concerns
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map((candidate, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{candidate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Whitening Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How Teeth Whitening Works at Our Kakinada Clinic
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Consultation & Shade',
                  description: 'Initial consultation to assess your teeth and record current shade for comparison'
                },
                {
                  step: '2',
                  title: 'Cleaning & Protection',
                  description: 'Professional cleaning followed by gum protection to ensure safe whitening'
                },
                {
                  step: '3',
                  title: 'Whitening Application',
                  description: 'Professional-grade whitening gel applied and activated with specialized light'
                },
                {
                  step: '4',
                  title: 'Final Results',
                  description: 'Gel removed, teeth polished, and final shade recorded - enjoy your bright smile!'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Professional Teeth Whitening
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                      <FaCheck className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Care */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Before Your Whitening Treatment
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Get a professional dental cleaning 1-2 weeks before</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Address any existing dental issues or cavities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Avoid staining foods 24 hours before treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Brush and floss thoroughly before your appointment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  After-Care for Long-Lasting Results
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Avoid coffee, tea, red wine for 48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>No smoking or tobacco use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Maintain excellent oral hygiene routine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Use whitening toothpaste for maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Schedule touch-up treatments as recommended</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Teeth Whitening FAQs - Kakinada
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for a Brighter, Whiter Smile?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your professional teeth whitening session in Kakinada today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:8501802222"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-xl"
              >
                <FiPhone className="w-5 h-5" />
                Call 8501802222
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Local SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Teeth Whitening",
              "alternateName": "Dental Bleaching",
              "description": "Professional teeth whitening in Kakinada - Get up to 8 shades whiter in 1 hour",
              "procedureType": "Cosmetic",
              "provider": {
                "@type": "Dentist",
                "name": "Dr. Padmavathi Devi",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kakinada",
                  "addressRegion": "Andhra Pradesh",
                  "addressCountry": "IN"
                },
                "telephone": "8501802222"
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  );
}
