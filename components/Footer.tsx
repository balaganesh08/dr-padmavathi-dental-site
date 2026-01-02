'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Clinic Info */}
          <div>
            <div className="mb-5">
              <div className="relative" style={{ width: '88px', height: 'auto', minHeight: '24px' }}>
                <Image
                  src="/logo.png"
                  alt="Dr. Padmavathi's Dental Hospital & Implant Centre"
                  width={88}
                  height={24}
                  className="object-contain w-full h-full"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5 group">
                <div className="bg-teal-500/20 rounded-lg p-1.5 group-hover:bg-teal-500 transition-colors flex-shrink-0">
                  <FiMapPin className="w-4 h-4 text-teal-400" />
                </div>
                <p className="text-gray-300 text-sm pt-0.5">
                  Kakinada, Andhra Pradesh
                </p>
              </div>
              <div className="flex items-center space-x-2.5 group">
                <div className="bg-teal-500/20 rounded-lg p-1.5 group-hover:bg-teal-500 transition-colors flex-shrink-0">
                  <FiPhone className="w-4 h-4 text-teal-400" />
                </div>
                <a
                  href="tel:8501802222"
                  className="text-gray-300 hover:text-teal-400 transition-colors font-medium text-sm"
                >
                  85018 02222
                </a>
              </div>
              <div className="flex items-center space-x-2.5 group">
                <div className="bg-teal-500/20 rounded-lg p-1.5 group-hover:bg-teal-500 transition-colors flex-shrink-0">
                  <FiMail className="w-4 h-4 text-teal-400" />
                </div>
                <a
                  href="mailto:dr.padmavathi25@gmail.com"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm break-all"
                >
                  dr.padmavathi25@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  {t.nav.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">{t.footer.socialMedia}</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/dr_padmavathisdental/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
              >
                <FiInstagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
