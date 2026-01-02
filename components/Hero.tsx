'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { FiPhone, FiCalendar } from 'react-icons/fi';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Process embed when component mounts and re-process periodically
  useEffect(() => {
    const processEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    
    // Initial process
    setTimeout(processEmbed, 500);
    
    // Re-process after a delay to ensure embed is fully loaded
    const timeout = setTimeout(processEmbed, 1500);
    
    return () => clearTimeout(timeout);
  }, []);

  // Video behavior: reduce mobile height and ensure autoplay works; show controls on desktop only
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const updateControls = () => setShowControls(window.innerWidth >= 1024);
    updateControls();
    window.addEventListener('resize', updateControls);

    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }

    return () => window.removeEventListener('resize', updateControls);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 via-green-50/20 to-white"></div>
      
      {/* Static Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-teal-100/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-100/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 shadow-sm">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              <span className="text-xs font-semibold text-teal-700">Expert Dental Care in Kakinada</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[48ch]">
                <span className="gradient-text">{t.hero.headline}</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                {t.hero.subtext}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary flex items-center space-x-2 group px-6 py-3.5 text-base font-semibold"
              >
                <FiCalendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>{t.hero.bookAppointment}</span>
              </button>
              <a
                href="tel:8501802222"
                className="btn-secondary flex items-center space-x-2 group px-6 py-3.5 text-base font-semibold"
              >
                <FiPhone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.hero.callNow}</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">8+</div>
                <div className="text-xs text-gray-500 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">2200+</div>
                <div className="text-xs text-gray-500 font-medium">Smile Makeovers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">16</div>
                <div className="text-xs text-gray-500 font-medium">Services</div>
              </div>
            </div>
          </div>

          {/* Right Video (modern hero) */}
          <div className="relative block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
              {/* Responsive Autoplaying Video - reduced height on mobile, switches to landscape on lg */}
              <div className="relative h-56 sm:h-72 lg:aspect-[16/9] lg:h-auto">
                <video
                  ref={videoRef}
                  src="/videos/clinic.mp4"
                  poster="/Dr_Padmavathi.JPG"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={showControls}
                  preload="metadata"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-teal-200 to-green-200 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 top-1/2 -left-6 w-32 h-32 bg-teal-300 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add TypeScript declaration for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
