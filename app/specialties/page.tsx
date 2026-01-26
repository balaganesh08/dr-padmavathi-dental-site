import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FiArrowRight } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dental Specialties in Kakinada | All Services | Dr. Padmavathi Dental Clinic',
  description: 'Comprehensive dental specialties including implants, braces, root canal, kids dentistry, teeth whitening & more in Kakinada. Expert treatments by Dr. Padmavathi. Call 8501802222',
  keywords: 'dental specialties Kakinada, dental services Kakinada, dental treatments, implants, orthodontics, cosmetic dentistry, pediatric dentistry, endodontics Kakinada',
  openGraph: {
    title: 'All Dental Specialties | Dr. Padmavathi Dental Clinic Kakinada',
    description: 'Expert dental specialties and comprehensive treatments in Kakinada. 16+ services under one roof.',
    type: 'website',
  },
};

export default function SpecialtiesPage() {
  const specialties = [
    {
      title: 'Dental Implants',
      slug: 'implants',
      description: 'Permanent tooth replacement solution for a natural-looking smile. Advanced titanium implants that last a lifetime.',
      image: '/services/Dental-Implant.jpg',
      category: 'Restorative'
    },
    {
      title: 'Braces',
      slug: 'braces',
      description: 'Straighten your teeth with traditional metal or ceramic braces. Custom treatment plans for perfect smiles.',
      image: '/services/Braces.jpg',
      category: 'Orthodontics'
    },
    {
      title: 'Clear Aligners',
      slug: 'clear-aligners',
      description: 'Invisible orthodontic treatment. Straighten teeth discreetly with removable aligners.',
      image: '/services/clear-aligners.jpg',
      category: 'Orthodontics'
    },
    {
      title: 'Root Canal Treatment',
      slug: 'root-canal',
      description: 'Pain-free root canal therapy to save your natural teeth. Advanced techniques for comfortable treatment.',
      image: '/services/Root_Canal.svg',
      category: 'Endodontics'
    },
    {
      title: 'Kids Dentistry',
      slug: 'kids-dentistry',
      description: 'Specialized dental care for children in a friendly environment. Making dental visits fun and comfortable.',
      image: '/services/pediatric-dentistry.jpg',
      category: 'Pediatric'
    },
    {
      title: 'Teeth Whitening',
      slug: 'teeth-whitening',
      description: 'Professional teeth whitening in just one hour. Get a brighter, whiter smile with safe and effective treatments.',
      image: '/services/teeth-whitening.jpg',
      category: 'Cosmetic'
    },
    {
      title: 'Smile Designing',
      slug: 'smile-designing',
      description: 'Complete smile makeover to enhance your confidence. Combining multiple treatments for your dream smile.',
      image: '/services/teeth-whitening.jpg',
      category: 'Cosmetic'
    },
    {
      title: 'Dental Crowns',
      slug: 'crowns',
      description: 'Durable crowns to restore damaged or weakened teeth. Custom-made for natural appearance and function.',
      image: '/services/Dental-Implant.jpg',
      category: 'Restorative'
    },
    {
      title: 'Dentures',
      slug: 'dentures',
      description: 'Full and partial dentures for comfortable tooth replacement. Natural-looking and perfectly fitted.',
      image: '/services/dental-bridge.jpg',
      category: 'Prosthodontics'
    },
    {
      title: 'Scaling & Cleaning',
      slug: 'scaling',
      description: 'Professional deep cleaning to maintain healthy gums and teeth. Prevent gum disease and tooth decay.',
      image: '/services/Gum-Treatment.jpg',
      category: 'Preventive'
    },
    {
      title: 'Dental Fillings',
      slug: 'fillings',
      description: 'Tooth-colored fillings for natural appearance. Restore decayed or damaged teeth seamlessly.',
      image: '/services/Dental-Fillings.jpg',
      category: 'Restorative'
    },
    {
      title: 'Gum Treatment',
      slug: 'gum-treatment',
      description: 'Advanced treatments for healthy gums. Cure bleeding gums and periodontal disease.',
      image: '/services/Gum-Treatment.jpg',
      category: 'Periodontics'
    },
    {
      title: 'Dental Bridge',
      slug: 'bridge',
      description: 'Fixed bridgework to replace missing teeth. Restore your smile and chewing function.',
      image: '/services/dental-bridge.jpg',
      category: 'Restorative'
    },
    {
      title: 'Porcelain Veneers',
      slug: 'veneers',
      description: 'Porcelain veneers for a flawless smile transformation. Ultra-thin shells for perfect teeth.',
      image: '/services/porcelain-veneers.jpg',
      category: 'Cosmetic'
    },
    {
      title: 'Laser Dentistry',
      slug: 'laser-dentistry',
      description: 'Advanced laser technology for precise and comfortable treatments. Minimally invasive procedures.',
      image: '/services/Dental-Implant.jpg',
      category: 'Advanced'
    },
    {
      title: 'Night Guard',
      slug: 'night-guard',
      description: 'Custom night guards for teeth grinding and TMJ disorders. Protect your teeth while you sleep.',
      image: '/services/night-guard.jpg',
      category: 'Preventive'
    },
    {
      title: 'Gap Closure',
      slug: 'gap-closure',
      description: 'Specialized treatment to close gaps between teeth. Achieve a uniform, beautiful smile.',
      image: '/services/Braces.jpg',
      category: 'Orthodontics'
    },
  ];

  const categories = Array.from(new Set(specialties.map(s => s.category)));

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Padmavathi Dental Clinic',
    description: 'Comprehensive dental clinic in Kakinada offering 16+ dental specialties',
    image: 'https://drpadmavathidental.com/logo.png',
    telephone: '8501802222',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kakinada',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'India'
    },
    priceRange: '$$',
    areaServed: 'Kakinada',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-green-600">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),transparent_50%)]"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="inline-block mb-4">
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-6 py-2 rounded-full">
                  16+ Dental Services
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Our <span className="text-yellow-300">Specialties</span>
              </h1>
              <p className="text-xl md:text-2xl text-teal-50 max-w-4xl mx-auto leading-relaxed">
                Comprehensive dental care for you and your family. Expert treatments with advanced technology and compassionate care.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">2000+</div>
                  <div className="text-teal-100 text-sm">Happy Patients</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">8+</div>
                  <div className="text-teal-100 text-sm">Years Experience</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">16+</div>
                  <div className="text-teal-100 text-sm">Specialties</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((specialty, index) => (
                <Link
                  key={index}
                  href={`/services/${specialty.slug}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-teal-200 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={specialty.image}
                      alt={specialty.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-teal-700 text-xs font-semibold rounded-full">
                        {specialty.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {specialty.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      LEARN MORE
                      <FiArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a consultation with our expert dentists. We'll examine your dental health 
              and recommend the best treatment plan for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="btn-primary"
              >
                Call +91 98765 43210
              </a>
              <Link
                href="/#contact"
                className="btn-secondary"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
