'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Excellent service! Dr. Padmavathi is very professional and caring. The dental implant procedure was painless and the results are amazing.',
    location: 'Kakinada',
  },
  {
    name: 'Priya Reddy',
    rating: 5,
    text: 'Best dental clinic in the area. My kids love coming here. The staff is friendly and the treatment is top-notch.',
    location: 'Kakinada',
  },
  {
    name: 'Suresh Naidu',
    rating: 5,
    text: 'I had my teeth whitening done here. Quick and effective! The 1-hour treatment gave me a beautiful smile. Highly recommended!',
    location: 'Kakinada',
  },
  {
    name: 'Lakshmi Devi',
    rating: 5,
    text: 'Dr. Padmavathi is an expert in her field. She explained everything clearly and made me feel comfortable throughout the treatment.',
    location: 'Kakinada',
  },
  {
    name: 'Venkatesh Rao',
    rating: 5,
    text: 'Got my braces done here. The process was smooth and the results exceeded my expectations. Thank you for the wonderful service!',
    location: 'Kakinada',
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-container bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">{t.testimonials.title}</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="card text-center bg-gradient-to-br from-white to-gray-50 border-2 border-teal-100">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-teal-600 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current mx-0.5"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-base mb-6 italic leading-relaxed max-w-2xl mx-auto">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].location}</p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-xl hover:bg-teal-50 transition-all duration-300 hover:scale-110 border border-gray-100"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5 text-teal-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-xl hover:bg-teal-50 transition-all duration-300 hover:scale-110 border border-gray-100"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5 text-teal-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-teal-600 w-8 h-2'
                    : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
