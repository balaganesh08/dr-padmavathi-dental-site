import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FiArrowLeft, FiPhone, FiCalendar } from 'react-icons/fi';
import { FaLayerGroup, FaCheck } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Braces & Aligners in Kakinada | Teeth Straightening | Dr. Padmavathi Dental',
  description: 'Professional braces and clear aligners in Kakinada. Straighten your teeth with traditional or invisible aligners. Expert orthodontist Dr. Padmavathi. Call 8501802222',
  keywords: 'braces Kakinada, clear aligners, invisible braces, orthodontics, teeth straightening, metal braces, ceramic braces, aligner treatment',
  openGraph: {
    title: 'Braces & Clear Aligners in Kakinada | Dr. Padmavathi Dental Clinic',
    description: 'Straighten your teeth with professional braces or clear aligners. Customized orthodontic treatment plans.',
    type: 'website',
  },
};

export default function BracesPage() {
  const bracesSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Braces and Clear Aligners',
    description: 'Orthodontic treatment to straighten teeth using traditional braces or invisible clear aligners',
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Dr. Padmavathi Dental Clinic',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kakinada',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'India'
      },
      telephone: '8501802222'
    },
    areaServed: 'Kakinada',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bracesSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-green-50 py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                <FaLayerGroup className="w-4 h-4" />
                Orthodontic Treatment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Braces & Aligners
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Straighten your teeth and achieve a perfect, confident smile with our advanced orthodontic solutions
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+918501802222"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FiPhone className="w-5 h-5" />
                  Call Now
                </a>
                <button className="btn-secondary inline-flex items-center gap-2">
                  <FiCalendar className="w-5 h-5" />
                  Book Appointment
                </button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Braces and Aligners Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Braces */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Types of Orthodontic Treatments We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Traditional Metal Braces',
                description: 'Most common and effective type of braces. Made from high-grade stainless steel.',
                benefits: ['Most affordable option', 'Highly effective', 'Suitable for all cases', 'Durable and strong']
              },
              {
                title: 'Clear/Ceramic Braces',
                description: 'Less visible than metal braces. Brackets blend with natural tooth color.',
                benefits: ['More aesthetic', 'Same effectiveness', 'Less noticeable', 'Comfortable wear']
              },
              {
                title: 'Clear Aligners (Invisible)',
                description: 'Custom-made transparent trays that gradually move teeth into position.',
                benefits: ['Nearly invisible', 'Removable', 'No food restrictions', 'Easy to clean']
              }
            ].map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-teal-300 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Your Orthodontic Journey
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'Initial exam and X-rays'
              },
              {
                step: '2',
                title: 'Treatment Plan',
                description: 'Customized plan created'
              },
              {
                step: '3',
                title: 'Braces/Aligners',
                description: 'Application or fitting'
              },
              {
                step: '4',
                title: 'Regular Adjustments',
                description: 'Monthly check-ups'
              },
              {
                step: '5',
                title: 'Retention',
                description: 'Retainers to maintain'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Orthodontic Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Improved oral health',
              'Enhanced facial appearance',
              'Better chewing and speech',
              'Increased self-confidence',
              'Reduced risk of tooth decay',
              'Prevention of jaw problems',
              'Long-term cost savings',
              'Easier teeth cleaning'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-teal-50 p-4 rounded-xl">
                <FaCheck className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Schedule a free consultation to discuss the best orthodontic option for you
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+918501802222"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
            >
              <FiPhone className="w-5 h-5" />
              Call +91 85018 02222
            </a>
            <Link
              href="/#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
