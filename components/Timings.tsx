'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import { FiClock } from 'react-icons/fi';

export default function Timings() {
  const { t } = useLanguage();

  return (
    <section className="section-container bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="gradient-text">{t.timings.title}</span>
          </h2>
          <p className="text-gray-600 text-sm">We're here when you need us</p>
        </div>

        {/* Timings Display */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Weekdays */}
            <div className="p-8 border-b border-gray-100 last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center shadow-md">
                    <FiClock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Monday - Saturday</h3>
                    <p className="text-xs text-gray-500">Weekdays</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <p className="text-xl sm:text-2xl font-bold gradient-text">{t.timings.weekdays}</p>
                  <p className="text-xs text-gray-500 mt-1">Evening hours</p>
                </div>
              </div>
            </div>

            {/* Sunday */}
            <div className="p-8 bg-gradient-to-r from-teal-50/50 to-green-50/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                    <FiClock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sunday</h3>
                    <p className="text-xs text-gray-500">Weekend</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <p className="text-xl sm:text-2xl font-bold gradient-text">{t.timings.sunday}</p>
                  <p className="text-xs text-gray-500 mt-1">Morning hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-50 to-green-50 rounded-full border border-teal-100">
              <span className="text-sm text-gray-600">Need an appointment?</span>
              <a
                href="tel:8501802222"
                className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                Call 85018 02222
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
