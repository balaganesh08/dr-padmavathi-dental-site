'use client';

import React, { useState } from 'react';
import { FiPhone, FiMessageCircle, FiX } from 'react-icons/fi';

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 mb-2 animate-slide-up">
          <a
            href="tel:8501802222"
            className="flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-green-600 text-white px-5 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform text-sm font-medium"
          >
            <FiPhone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/918501802222"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-xl shadow-xl hover:shadow-lg transition-all duration-300 hover:scale-105 transform text-sm font-medium"
          >
            <FiMessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-glow-lg transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'rotate-45' : ''
        }`}
        aria-label="Contact options"
      >
        {isOpen ? (
          <FiX className="w-5 h-5" />
        ) : (
          <FiPhone className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
