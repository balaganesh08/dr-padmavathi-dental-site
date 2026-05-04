'use client';

import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { useLanguage } from './LanguageProvider';

export default function BookingSection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting booking form with data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          service: formData.service,
          date: formData.date
        }),
      });

      console.log('Booking form response status:', response.status);
      console.log('Booking form response ok:', response.ok);
      
      const data = await response.json();
      console.log('Booking form response data:', data);

      if (data.success) {
        console.log('Booking form successful, redirecting to thank you page');
        // Track conversion in Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submission', {
            event_category: 'lead_generation',
            event_label: 'booking_form',
            value: 1,
          });
        }
        
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        console.error('Booking form failed:', data);
        alert(`Failed: ${data.error || 'Unknown error'}. Check console for details.`);
      }
    } catch (error) {
      console.error('Booking form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'Dental Implants',
    'Braces & Aligners',
    'Root Canal Treatment',
    'Kids Dentistry',
    'Teeth Whitening',
    'Smile Designing',
    'Regular Check-up',
    'Other',
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-teal-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium mb-3">
            {language === 'en' ? 'Get Started' : 'ప్రారంభించండి'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">
              {language === 'en' ? 'Book Your Appointment Today' : 'ఈ రోజే మీ అపాయింట్‌మెంట్ బుక్ చేయండి'}
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Schedule your visit and experience world-class dental care' 
              : 'మీ సందర్శనను షెడ్యూల్ చేయండి మరియు ప్రపంచ స్థాయి దంత సంరక్షణను అనుభవించండి'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Contact Information' : 'సంప్రదింపు సమాచారం'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 rounded-lg p-3">
                    <FiPhone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {language === 'en' ? 'Call Us' : 'మమ్మల్ని కాల్ చేయండి'}
                    </p>
                    <a href="tel:+918501802222" className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                      +91 85018 02222
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 rounded-lg p-3">
                    <FiMail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {language === 'en' ? 'Email Us' : 'ఈమెయిల్ చేయండి'}
                    </p>
                    <a href="mailto:dr.padmavathi25@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                      dr.padmavathi25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 rounded-lg p-3">
                    <FiMapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {language === 'en' ? 'Visit Us' : 'మమ్మల్ని సందర్శించండి'}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      Kakinada, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Clinic Hours' : 'క్లినిక్ సమయాలు'}
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex justify-between">
                    <span>{language === 'en' ? 'Monday - Saturday' : 'సోమవారం - శనివారం'}</span>
                    <span className="font-semibold">5:00 PM - 9:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>{language === 'en' ? 'Sunday' : 'ఆదివారం'}</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Full Name *' : 'పూర్తి పేరు *'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder={language === 'en' ? 'Enter your name' : 'మీ పేరు నమోదు చేయండి'}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Phone Number *' : 'ఫోన్ నంబర్ *'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Email' : 'ఈమెయిల్'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Service Required *' : 'అవసరమైన సేవ *'}
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                >
                  <option value="">
                    {language === 'en' ? 'Select a service' : 'సేవను ఎంచుకోండి'}
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Preferred Date' : 'ఇష్టపడే తేదీ'}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Message' : 'సందేశం'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
                  placeholder={language === 'en' ? 'Any specific concerns or questions...' : 'ఏవైనా నిర్దిష్ట ఆందోళనలు లేదా ప్రశ్నలు...'}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting 
                  ? (language === 'en' ? 'Booking...' : 'బుక్ చేస్తోంది...')
                  : (language === 'en' ? 'Book Appointment' : 'అపాయింట్‌మెంట్ బుక్ చేయండి')
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
