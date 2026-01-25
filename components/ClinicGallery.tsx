'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const clinicImages = [
  {
    src: '/clinic-images/reception.jpeg',
    title: 'Reception Area',
    description: 'Welcoming reception area for our patients',
  },
  {
    src: '/clinic-images/Clinic inside hall.jpeg',
    title: 'Clinic Hall',
    description: 'Spacious and comfortable clinic interior',
  },
  {
    src: '/clinic-images/Operation theatre.jpeg',
    title: 'Operation Theatre',
    description: 'State-of-the-art operation theatre with modern equipment',
  },
  {
    src: '/clinic-images/Equipment.jpeg',
    title: 'Modern Equipment',
    description: 'Advanced dental equipment for precise treatments',
  },
  {
    src: '/clinic-images/kids-play-area.jpeg',
    title: 'Kids Play Area',
    description: 'Fun and engaging play area for children',
  },
  {
    src: '/clinic-images/Awards.jpeg',
    title: 'Awards & Recognition',
    description: 'Our achievements and certifications',
  },
  {
    src: '/clinic-images/Awards Gallery.jpeg',
    title: 'Awards Gallery',
    description: 'Collection of awards and honors',
  },
  {
    src: '/clinic-images/Logo in clinic.jpeg',
    title: 'Clinic Branding',
    description: 'Our professional clinic environment',
  },
];

export default function ClinicGallery() {
  const { t } = useLanguage();
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
    <section id="gallery" className="section-container bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium mb-3">
            Our Facility
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">Clinic Gallery</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our modern dental clinic equipped with state-of-the-art technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clinicImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
}
