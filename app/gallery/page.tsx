'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTimes, FaChevronLeft, FaChevronRight, FaHome } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

const clinicImages = [
  {
    src: '/clinic-images/reception.jpeg',
    title: 'Reception Area',
    description: 'Our welcoming reception area is designed to make you feel comfortable from the moment you arrive. Friendly staff ready to assist you with appointments and queries.',
    features: ['Comfortable seating', 'Modern design', 'Efficient check-in process'],
  },
  {
    src: '/clinic-images/Clinic inside hall.jpeg',
    title: 'Clinic Interior',
    description: 'Spacious and well-lit clinic interior with a calming ambiance. Our facility is designed to provide a stress-free environment for all our patients.',
    features: ['Spacious layout', 'Clean & hygienic', 'Patient-friendly design'],
  },
  {
    src: '/clinic-images/Operation theatre.jpeg',
    title: 'Operation Theatre',
    description: 'State-of-the-art operation theatre equipped with the latest dental technology. Maintained with the highest standards of sterilization and hygiene.',
    features: ['Advanced equipment', 'Sterile environment', 'Latest technology'],
  },
  {
    src: '/clinic-images/Equipment.jpeg',
    title: 'Modern Equipment',
    description: 'We invest in the latest dental equipment to ensure precise diagnosis and effective treatments. Our advanced tools enable us to provide pain-free procedures.',
    features: ['Latest technology', 'Digital imaging', 'Precision instruments'],
  },
  {
    src: '/clinic-images/kids-play-area.jpeg',
    title: 'Kids Play Area',
    description: 'A fun and engaging play area designed specifically for our young patients. We make dental visits enjoyable for children with toys and activities.',
    features: ['Child-friendly space', 'Educational toys', 'Colorful environment'],
  },
  {
    src: '/clinic-images/Awards.jpeg',
    title: 'Awards & Recognition',
    description: 'Our commitment to excellence has been recognized through various awards and certifications. These achievements reflect our dedication to quality dental care.',
    features: ['Professional recognition', 'Quality certifications', 'Industry awards'],
  },
  {
    src: '/clinic-images/Awards Gallery.jpeg',
    title: 'Awards Gallery',
    description: 'A showcase of our achievements, honors, and professional milestones over the years. Each award represents our commitment to patient satisfaction.',
    features: ['Multiple honors', 'Professional achievements', 'Community recognition'],
  },
  {
    src: '/clinic-images/Logo in clinic.jpeg',
    title: 'Clinic Branding',
    description: 'Our professional clinic environment reflects our brand values of trust, quality, and patient care. Every detail is designed with your comfort in mind.',
    features: ['Professional ambiance', 'Brand excellence', 'Trust & quality'],
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % clinicImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + clinicImages.length) % clinicImages.length
      );
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-600 to-green-600 text-white py-20 overflow-hidden mt-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <FaHome className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Clinic Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Take a virtual tour of our modern dental clinic equipped with state-of-the-art technology and facilities
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clinicImages.map((image, index) => (
            <div
              key={index}
              className="card group hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="relative h-80 rounded-xl overflow-hidden cursor-pointer mb-6"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold text-lg">Click to view full size</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                {image.title}
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {image.description}
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {image.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Modern Facility
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience world-class dental care in our state-of-the-art clinic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+919849062794"
              className="bg-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition-colors inline-block border-2 border-white"
            >
              Call: +91 98490 62794
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors z-50"
            aria-label="Close"
          >
            <FaTimes className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-teal-400 transition-colors z-50"
            aria-label="Previous"
          >
            <FaChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-teal-400 transition-colors z-50"
            aria-label="Next"
          >
            <FaChevronRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={clinicImages[selectedImage].src}
              alt={clinicImages[selectedImage].title}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {clinicImages[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {clinicImages[selectedImage].description}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {clinicImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
