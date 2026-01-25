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
      image: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Endodontics'
    },
    {
      title: 'Kids Dentistry',
      slug: 'kids-dentistry',
      description: 'Specialized dental care for children in a friendly environment. Making dental visits fun and comfortable.',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Pediatric'
    },
    {
      title: 'Teeth Whitening',
      slug: 'teeth-whitening',
      description: 'Professional teeth whitening in just one hour. Get a brighter, whiter smile with safe and effective treatments.',
      image: 'https://images.pexels.com/photos/3845630/pexels-photo-3845630.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Cosmetic'
    },
    {
      title: 'Smile Designing',
      slug: 'smile-designing',
      description: 'Complete smile makeover to enhance your confidence. Combining multiple treatments for your dream smile.',
      image: 'https://images.pexels.com/photos/6627537/pexels-photo-6627537.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Cosmetic'
    },
    {
      title: 'Dental Crowns',
      slug: 'crowns',
      description: 'Durable crowns to restore damaged or weakened teeth. Custom-made for natural appearance and function.',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Restorative'
    },
    {
      title: 'Dentures',
      slug: 'dentures',
      description: 'Full and partial dentures for comfortable tooth replacement. Natural-looking and perfectly fitted.',
      image: 'https://images.pexels.com/photos/6528864/pexels-photo-6528864.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Prosthodontics'
    },
    {
      title: 'Scaling & Cleaning',
      slug: 'scaling',
      description: 'Professional deep cleaning to maintain healthy gums and teeth. Prevent gum disease and tooth decay.',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Preventive'
    },
    {
      title: 'Dental Fillings',
      slug: 'fillings',
      description: 'Tooth-colored fillings for natural appearance. Restore decayed or damaged teeth seamlessly.',
      image: 'https://images.pexels.com/photos/3845464/pexels-photo-3845464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Restorative'
    },
    {
      title: 'Gum Treatment',
      slug: 'gum-treatment',
      description: 'Advanced treatments for healthy gums. Cure bleeding gums and periodontal disease.',
      image: 'https://images.pexels.com/photos/3845622/pexels-photo-3845622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Periodontics'
    },
    {
      title: 'Dental Bridge',
      slug: 'bridge',
      description: 'Fixed bridgework to replace missing teeth. Restore your smile and chewing function.',
      image: 'https://images.pexels.com/photos/6627333/pexels-photo-6627333.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Restorative'
    },
    {
      title: 'Porcelain Veneers',
      slug: 'veneers',
      description: 'Porcelain veneers for a flawless smile transformation. Ultra-thin shells for perfect teeth.',
      image: 'https://images.pexels.com/photos/6627549/pexels-photo-6627549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Cosmetic'
    },
    {
      title: 'Laser Dentistry',
      slug: 'laser-dentistry',
      description: 'Advanced laser technology for precise and comfortable treatments. Minimally invasive procedures.',
      image: 'https://images.pexels.com/photos/6627456/pexels-photo-6627456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Advanced'
    },
    {
      title: 'Night Guard',
      slug: 'night-guard',
      description: 'Custom night guards for teeth grinding and TMJ disorders. Protect your teeth while you sleep.',
      image: 'https://images.pexels.com/photos/3845617/pexels-photo-3845617.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Preventive'
    },
    {
      title: 'Gap Closure',
      slug: 'gap-closure',
      description: 'Specialized treatment to close gaps between teeth. Achieve a uniform, beautiful smile.',
      image: 'https://images.pexels.com/photos/6627450/pexels-photo-6627450.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
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
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-green-600 py-20 pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Specialties
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Comprehensive dental care for you and your family. Expert treatments with advanced technology.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The art & science of Dentistry has many facets that include knowledge of Biology, Medicine, 
              Engineering, Material science, Psychology, Artistry, and Humanitarianism. We offer comprehensive 
              dental specialties to ensure complete oral health care for every patient.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-teal-200"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={specialty.image}
                      alt={specialty.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-700 text-xs font-semibold rounded-full">
                        {specialty.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {specialty.description}
                    </p>
                    <Link
                      href={`/services/${specialty.slug}`}
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all group"
                    >
                      FIND OUT MORE
                      <FiArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
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
