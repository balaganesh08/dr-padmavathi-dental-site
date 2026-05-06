import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FiArrowLeft, FiPhone, FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';
import { FaHeartbeat, FaCheck, FaStar } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Root Canal Treatment in Kakinada | Pain-Free RCT | Dr. Padmavathi Dental',
  description: 'Best Root Canal Treatment in Kakinada. Expert endodontist Dr. Padmavathi offers pain-free RCT with advanced technology. Save your natural teeth. Book appointment: 8501802222',
  keywords: 'root canal treatment Kakinada, RCT Kakinada, endodontist Kakinada, painless root canal, dental clinic Kakinada, tooth pain treatment',
  openGraph: {
    title: 'Root Canal Treatment in Kakinada | Dr. Padmavathi Dental Clinic',
    description: 'Expert pain-free root canal treatment in Kakinada. Advanced technology, experienced specialists. Book your appointment today.',
    type: 'website',
  }
};

export default function RootCanalPage() {
  const benefits = [
    'Pain-free treatment with modern anesthesia',
    'Single sitting RCT available',
    'Advanced rotary endodontics',
    'Digital X-ray for precision',
    'Save your natural tooth',
    'Prevent tooth extraction',
    'Stop infection spread',
    'Long-lasting results'
  ];

  const symptoms = [
    'Severe toothache when biting',
    'Prolonged sensitivity to hot/cold',
    'Tooth discoloration or darkening',
    'Swelling in the gums',
    'Recurring pimple on gums',
    'Tender or swollen gums'
  ];

  const faqs = [
    {
      q: 'Is root canal treatment painful?',
      a: 'No! Modern root canal treatment is virtually painless. We use advanced anesthesia and the latest techniques to ensure your comfort throughout the procedure. Most patients report that the treatment feels similar to getting a regular filling.'
    },
    {
      q: 'How long does RCT take in Kakinada?',
      a: 'Typically, a root canal can be completed in 1-2 visits at our Kakinada clinic. Simple cases can be done in a single sitting of about 60-90 minutes. Complex cases may require 2 visits spaced a week apart.'
    },
    {
      q: 'What is the cost of root canal treatment in Kakinada?',
      a: 'The cost varies based on the tooth location and complexity. At Dr. Padmavathi\'s clinic, we offer competitive pricing with transparent costs. Contact us for a detailed quote after examination. We also offer flexible payment options.'
    },
    {
      q: 'How long does a root canal treatment last?',
      a: 'With proper care and a crown placed on the treated tooth, root canal treatment can last a lifetime. Regular dental check-ups and good oral hygiene are essential for maintaining the treated tooth.'
    },
    {
      q: 'What happens after root canal treatment?',
      a: 'After RCT, we typically recommend placing a crown to protect the treated tooth. You may experience mild sensitivity for a few days, which can be managed with over-the-counter pain relievers. Follow-up visits ensure proper healing.'
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
              <span className="text-gray-900 font-medium">Root Canal Treatment</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-green-50 to-blue-50 py-16 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
                  <FaHeartbeat className="w-4 h-4" />
                  Endodontic Treatment
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Root Canal Treatment in Kakinada
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Pain-free root canal therapy to save your natural teeth. Expert endodontist with advanced technology ensuring comfortable, successful treatment.
                </p>
                
                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <FiClock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-sm text-gray-600">60-90 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-sm text-gray-600">Kakinada, AP</div>
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
                    Book Appointment
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Root Canal Treatment in Kakinada - Dr. Padmavathi Dental Clinic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                  <div className="bg-yellow-100 rounded-full p-3">
                    <FaStar className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">4200+ Happy Patients</div>
                    <div className="text-sm text-gray-600">Successful Treatments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Root Canal */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Root Canal Treatment?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Root Canal Treatment (RCT), also known as endodontic therapy, is a dental procedure designed to save 
                  a severely damaged or infected tooth. At <strong>Dr. Padmavathi's Dental Clinic in Kakinada</strong>, 
                  we specialize in providing pain-free root canal treatments using the latest technology and techniques.
                </p>
                <p>
                  The procedure involves removing the infected or damaged pulp (the soft tissue inside the tooth containing 
                  nerves and blood vessels), cleaning and disinfecting the root canals, and then filling and sealing the 
                  space. This saves your natural tooth and prevents the need for extraction.
                </p>
                <p>
                  Modern root canal treatment in our Kakinada clinic is comfortable, efficient, and has a success rate 
                  of over 95%. We use advanced rotary endodontics and digital X-rays for precise, minimally invasive treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Signs You Need RCT */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Signs You May Need Root Canal Treatment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                If you experience any of these symptoms, visit our Kakinada dental clinic for immediate evaluation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 font-medium">{symptom}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Experiencing tooth pain? Don't wait!</p>
              <a href="tel:8501802222" className="btn-primary inline-block">
                Call Now for Emergency RCT in Kakinada
              </a>
            </div>
          </div>
        </section>

        {/* RCT Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Root Canal Treatment Process at Our Kakinada Clinic
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Diagnosis & X-Ray',
                  description: 'Comprehensive examination with digital X-rays to assess the infection and plan treatment'
                },
                {
                  step: '2',
                  title: 'Anesthesia',
                  description: 'Local anesthesia administered to ensure you feel no pain during the entire procedure'
                },
                {
                  step: '3',
                  title: 'Cleaning & Filling',
                  description: 'Infected pulp removed, canals cleaned, shaped, and filled with biocompatible material'
                },
                {
                  step: '4',
                  title: 'Crown Placement',
                  description: 'Protective crown placed to restore full function and protect the treated tooth'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg">
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
        <section className="py-16 bg-gradient-to-br from-teal-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Root Canal Treatment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-teal-600 to-green-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Choose Dr. Padmavathi for Root Canal in Kakinada?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">8+</div>
                  <div className="text-xl opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">4200+</div>
                  <div className="text-xl opacity-90">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-xl opacity-90">Success Rate</div>
                </div>
              </div>
              <ul className="mt-8 space-y-3 max-w-3xl mx-auto">
                <li className="flex items-center gap-3">
                  <FaCheck className="w-5 h-5 flex-shrink-0" />
                  <span>Specialist Pedodontist with MDS, FAGE qualifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-5 h-5 flex-shrink-0" />
                  <span>Advanced rotary endodontics for faster, more comfortable treatment</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-5 h-5 flex-shrink-0" />
                  <span>Digital X-rays for precise diagnosis and minimal radiation</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-5 h-5 flex-shrink-0" />
                  <span>Single sitting RCT available for your convenience</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-5 h-5 flex-shrink-0" />
                  <span>Centrally located in Kakinada with convenient timings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions About Root Canal in Kakinada
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
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Root Canal Treatment in Kakinada?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your appointment today for pain-free, expert root canal treatment
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:8501802222"
                className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-xl"
              >
                <FiPhone className="w-5 h-5" />
                Call 8501802222
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-teal-600 transition-all"
              >
                Book Online Appointment
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
              "name": "Root Canal Treatment",
              "alternateName": "RCT",
              "description": "Pain-free root canal treatment in Kakinada by expert endodontist Dr. Padmavathi",
              "procedureType": "Endodontic",
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
