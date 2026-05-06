'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';
import { FiMenu, FiX, FiPhone, FiGlobe } from 'react-icons/fi';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToSection = (id: string) => {
    handleNavigation(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 group"
          >
            <div className="relative group-hover:scale-105 transition-transform" style={{ 
              width: isScrolled ? '72px' : '88px',
              height: isScrolled ? 'auto' : 'auto',
              minHeight: isScrolled ? '20px' : '24px'
            }}>
              <Image
                src="/logo.png"
                alt="Dr. Padmavathi's Dental Hospital & Implant Centre"
                width={isScrolled ? 72 : 88}
                height={isScrolled ? 20 : 24}
                className="object-contain w-full h-full"
                style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
                priority
              />
            </div>
          </Link>

          {/* Right Side - Navigation & Actions */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 ml-auto">
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-0.5 xl:space-x-1">
              <a
                href="/"
                className="px-3 py-2 text-sm text-gray-700 hover:text-teal-600 font-medium transition-all duration-200 rounded-lg hover:bg-teal-50 whitespace-nowrap"
              >
                {t.nav.home}
              </a>
              <a
                href="/specialties"
                className="px-3 py-2 text-sm text-gray-700 hover:text-teal-600 font-medium transition-all duration-200 rounded-lg hover:bg-teal-50 whitespace-nowrap"
              >
                Specialties
              </a>
              <a
                href="/about"
                className="px-3 py-2 text-sm text-gray-700 hover:text-teal-600 font-medium transition-all duration-200 rounded-lg hover:bg-teal-50 whitespace-nowrap"
              >
                {t.nav.about}
              </a>
              <a
                href="/testimonials"
                className="px-3 py-2 text-sm text-gray-700 hover:text-teal-600 font-medium transition-all duration-200 rounded-lg hover:bg-teal-50 whitespace-nowrap"
              >
                {t.nav.testimonials}
              </a>
              <a
                href="/contact"
                className="px-3 py-2 text-sm text-gray-700 hover:text-teal-600 font-medium transition-all duration-200 rounded-lg hover:bg-teal-50 whitespace-nowrap"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-200"></div>
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-gray-50 rounded-xl p-1 border border-gray-200">
              <FiGlobe className="text-gray-500 ml-1 w-3.5 h-3.5" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  language === 'en'
                    ? 'bg-white text-teal-600 shadow-sm'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  language === 'te'
                    ? 'bg-white text-teal-600 shadow-sm'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                తె
              </button>
            </div>

            {/* Call Button */}
            <a
              href="tel:8501802222"
              className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-medium py-2.5 px-5 xl:px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2 whitespace-nowrap text-sm"
            >
              <FiPhone className="w-4 h-4" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-gray-200 animate-slide-up">
            <a
              href="/"
              className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.home}
            </a>
            <a
              href="/specialties"
              className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Specialties
            </a>
            <a
              href="/about"
              className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              href="/testimonials"
              className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.testimonials}
            </a>
            <a
              href="/contact"
              className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-200 gap-3">
              <div className="flex items-center space-x-1 bg-gray-50 rounded-xl p-1 border border-gray-200 flex-1">
                <FiGlobe className="text-gray-500 ml-1" />
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex-1 ${
                    language === 'en'
                      ? 'bg-white text-teal-600 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('te')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex-1 ${
                    language === 'te'
                      ? 'bg-white text-teal-600 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  తె
                </button>
              </div>
              <a
                href="tel:8501802222"
                className="bg-gradient-to-r from-teal-600 to-green-600 text-white font-medium py-2.5 px-5 rounded-xl shadow-md flex items-center space-x-2 whitespace-nowrap text-sm"
              >
                <FiPhone />
                <span>{t.nav.callNow}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
