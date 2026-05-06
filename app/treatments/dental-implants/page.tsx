import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FiArrowLeft, FiPhone, FiCalendar } from 'react-icons/fi';
import { FaTooth, FaCheck } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dental Implants in Kakinada | Permanent Teeth Replacement | Dr. Padmavathi',
  description: 'Best dental implants in Kakinada. Permanent tooth replacement with advanced titanium implants by Dr. Padmavathi. Expert endodontist with 8+ years experience. Book now: 8501802222',
  keywords: 'dental implants Kakinada, permanent teeth replacement, titanium implants, tooth implants, implant surgery, missing teeth solution, implantologist Kakinada',
  openGraph: {
    title: 'Dental Implants in Kakinada | Dr. Padmavathi Dental Clinic',
    description: 'Permanent tooth replacement with advanced dental implants. Safe, effective, long-lasting solution.',
    type: 'website',
  },
};

export default function DentalImplantsPage() {
  const implantSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Dental Implants',
    description: 'Permanent tooth replacement using titanium implants placed in the jawbone',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(implantSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-green-50 py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                <FaTooth className="w-4 h-4" />
                Advanced Treatment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Dental Implants
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Permanent tooth replacement solution for a natural-looking, confident smile
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
                src="https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dental Implants Procedure"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What are Dental Implants */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What are Dental Implants?
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dental implants are titanium posts surgically placed into your jawbone beneath the gums. 
              Once in place, they allow your dentist to mount replacement teeth onto them. They provide 
              a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unlike dentures or bridges, dental implants don't come loose or shift in your mouth, and they 
              look and function just like your natural teeth. With proper care, implants can last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Dental Implants
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Natural Look & Feel',
                description: 'Designed to look, feel, and function like your own teeth'
              },
              {
                title: 'Improved Comfort',
                description: 'No slipping or discomfort unlike removable dentures'
              },
              {
                title: 'Better Speech',
                description: 'Speak clearly without worry of teeth slipping'
              },
              {
                title: 'Easier Eating',
                description: 'Eat your favorite foods with confidence'
              },
              {
                title: 'Improved Oral Health',
                description: 'Don\'t require altering adjacent teeth like bridges'
              },
              {
                title: 'Long-lasting',
                description: 'With proper care, implants can last a lifetime'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <FaCheck className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            The Implant Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description: 'Comprehensive examination and 3D imaging to plan your treatment'
              },
              {
                step: '2',
                title: 'Implant Placement',
                description: 'Surgical placement of titanium implant into jawbone'
              },
              {
                step: '3',
                title: 'Healing Period',
                description: '3-6 months for implant to integrate with bone (osseointegration)'
              },
              {
                step: '4',
                title: 'Crown Placement',
                description: 'Custom crown attached to complete your new tooth'
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Padmavathi's Clinic for Dental Implants?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            With 15+ years of experience, advanced 3D imaging technology, and a track record 
            of successful implant placements, we ensure the best outcomes for our patients.
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
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Common Questions About Dental Implants
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Are dental implants painful?',
                a: 'The procedure is done under local anesthesia, so you won\'t feel pain during the surgery. Some discomfort after the procedure is normal and can be managed with medication.'
              },
              {
                q: 'How long do dental implants last?',
                a: 'With proper care and good oral hygiene, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear.'
              },
              {
                q: 'Am I a good candidate for dental implants?',
                a: 'Most adults with good general health and adequate jawbone are candidates. A consultation will determine if implants are right for you.'
              },
              {
                q: 'How much do dental implants cost?',
                a: 'Cost varies based on number of implants needed and specific requirements. We offer competitive pricing and payment plans. Schedule a consultation for a detailed quote.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
