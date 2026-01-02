'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { FiAward, FiSmile } from 'react-icons/fi';

export default function About() {
  const { t } = useLanguage();

  const specialties = [
    'Smile Designing',
    'Laser Dentistry',
    'Dental Implants',
    'Root Canal',
    'Clear Aligners',
  ];

  return (
    <section id="about" className="section-container bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-50 to-green-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Doctor Info - Left Side */}
          <div className="space-y-5 order-2 md:order-1">
            {/* Name and Qualifications */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="gradient-text">{t.about.name}</span>
              </h3>
              <p className="text-base text-gray-600 font-medium mb-1">
                {t.about.qualifications}
              </p>
              <p className="text-sm text-teal-600 font-semibold">
                {t.about.specialty}
              </p>
            </div>

            {/* Experience Stats - Simplified */}
            <div className="flex items-center gap-6 py-3">
              <div className="flex items-center gap-2">
                <div className="bg-teal-50 rounded-lg p-2">
                  <FiAward className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">8+</div>
                  <div className="text-xs text-gray-500">Years</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-50 rounded-lg p-2">
                  <FiSmile className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">2200+</div>
                  <div className="text-xs text-gray-500">Smile Makeovers</div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">
              {t.about.description}
            </p>

            {/* Specialties - Cleaner */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Doctor Photo - Right Side */}
          <div className="relative order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-teal-100 via-green-100 to-teal-50">
                <Image
                  src="/Dr_Padmavathi.JPG"
                  alt="Dr. Padmavathi Devi - Specialist Pedodontist"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Subtle decorative element */}
            <div className="absolute -z-10 -bottom-3 -left-3 w-full h-full bg-gradient-to-br from-teal-200 to-green-200 rounded-2xl opacity-15 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
