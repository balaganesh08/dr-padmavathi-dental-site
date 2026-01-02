'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-3 group-hover:from-teal-600 group-hover:to-green-600 transition-all duration-300 shadow-md">
                    <FiPhone className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{t.contact.phone}</h4>
                    <a
                      href="tel:8501802222"
                      className="text-teal-600 hover:text-teal-700 text-base font-medium transition-colors"
                    >
                      85018 02222
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-3 group-hover:from-teal-600 group-hover:to-green-600 transition-all duration-300 shadow-md">
                    <FiMail className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{t.contact.email}</h4>
                    <a
                      href="mailto:dr.padmavathi25@gmail.com"
                      className="text-teal-600 hover:text-teal-700 text-sm transition-colors break-all"
                    >
                      dr.padmavathi25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-3 group-hover:from-teal-600 group-hover:to-green-600 transition-all duration-300 shadow-md">
                    <FiMapPin className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Address</h4>
                    <p className="text-gray-600 text-sm">
                      Dr. Padmavathi&apos;s Dental Hospital & Implant Centre
                      <br />
                      Kakinada, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.123456789!2d82.2484244!3d17.0181046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAxJzA1LjIiTiA4MsKwMTQnNTQuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Dr. Padmavathi's Dental Hospital Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1.5 text-sm">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all bg-white shadow-sm hover:shadow-md text-sm"
                  placeholder={t.contact.form.name}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1.5 text-sm">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all bg-white shadow-sm hover:shadow-md text-sm"
                  placeholder={t.contact.form.phone}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1.5 text-sm">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all bg-white shadow-sm hover:shadow-md text-sm"
                  placeholder={t.contact.form.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1.5 text-sm">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all resize-none bg-white shadow-sm hover:shadow-md text-sm"
                  placeholder={t.contact.form.message}
                ></textarea>
              </div>

              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-sm font-medium animate-slide-up">
                  {t.contact.form.success}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend className="w-4 h-4" />
                <span>
                  {isSubmitting ? 'Sending...' : t.contact.form.submit}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
