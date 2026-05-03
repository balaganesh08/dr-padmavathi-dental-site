'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('Submitting contact page form with data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Contact page response status:', response.status);
      console.log('Contact page response ok:', response.ok);
      
      const data = await response.json();
      console.log('Contact page response data:', data);

      if (data.success) {
        console.log('Contact page form successful, redirecting to thank you page');
        // Track conversion in Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submission', {
            event_category: 'lead_generation',
            event_label: 'contact_page_form',
            value: 1,
          });
        }
        
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        setSubmitMessage(`Failed: ${data.error || 'Unknown error'}. Check console for details.`);
      }
    } catch (error) {
      console.error('Contact page form submission error:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-600 to-green-600 text-white py-20 overflow-hidden mt-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Get in touch with us for appointments, queries, or any dental concerns. We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Visit us at our clinic or reach out through any of the channels below. 
                    Our team is ready to assist you with all your dental needs.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-50 rounded-xl p-3 group-hover:bg-teal-600 transition-colors">
                        <FiPhone className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <a href="tel:8501802222" className="text-teal-600 hover:text-teal-700 font-medium text-lg">
                          85018 02222
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Call us anytime</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-50 rounded-xl p-3 group-hover:bg-green-600 transition-colors">
                        <FaWhatsapp className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                        <a 
                          href="https://wa.me/919849062794" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 font-medium text-lg"
                        >
                          +91 98490 62794
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Quick messaging</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 rounded-xl p-3 group-hover:bg-blue-600 transition-colors">
                        <FiMail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:dr.padmavathi25@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium break-all">
                          dr.padmavathi25@gmail.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Send us an email</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-50 rounded-xl p-3 group-hover:bg-purple-600 transition-colors">
                        <FiMapPin className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-700">
                          Kakinada, Andhra Pradesh
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Visit us at our clinic</p>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-50 rounded-xl p-3 group-hover:bg-orange-600 transition-colors">
                        <FiClock className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-700">
                            <span className="font-medium">Mon - Sat:</span> 10:00 AM - 1:00 PM, 5:00 PM - 9:00 PM
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Sunday:</span> 10:00 AM - 1:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitMessage && (
                    <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Visit Our Clinic
              </h2>
              <p className="text-gray-600">
                Find us easily with the map below
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30589.123456789!2d82.23456789!3d16.98765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU5JzE1LjYiTiA4MsKwMTQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Padmavathi's Dental Clinic Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your appointment today and take the first step towards a healthier, brighter smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8501802222"
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <FiPhone className="w-5 h-5" />
                Call: 85018 02222
              </a>
              <a
                href="https://wa.me/919849062794"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition-colors inline-flex items-center justify-center gap-2 border-2 border-white"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
