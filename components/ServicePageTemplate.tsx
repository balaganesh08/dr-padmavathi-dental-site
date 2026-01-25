'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { FiCheck, FiHome, FiPhone } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  benefits: string[];
  procedure: {
    title: string;
    steps: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  icon?: IconType;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  description,
  benefits,
  procedure,
  faqs,
}: ServicePageProps) {
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
            <Link
              href="/"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <FiHome className="mr-2" />
              Back to Home
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-xl text-white/90 mb-8">{subtitle}</p>

                <a
                  href="tel:8501802222"
                  className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  <FiPhone className="mr-2" />
                  Book Appointment: 85018 02222
                </a>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Benefits of {title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-teal-500 to-green-500 rounded-full p-2 flex-shrink-0">
                      <FiCheck className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedure Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {procedure.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {procedure.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-teal-500"
                  >
                    <div className="bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium text-lg">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Dr. Padmavathi's Dental Clinic?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-teal-600">8+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Years Experience</h3>
                <p className="text-gray-600 text-sm">Expert dental care</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-teal-600">10K+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Happy Patients</h3>
                <p className="text-gray-600 text-sm">Trust & satisfaction</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-teal-600">100%</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sterilization</h3>
                <p className="text-gray-600 text-sm">Highest hygiene standards</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-teal-600">4.8★</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Patient Rating</h3>
                <p className="text-gray-600 text-sm">Excellent reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your appointment today and experience world-class dental care in Kakinada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8501802222"
                className="inline-flex items-center justify-center bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <FiPhone className="mr-2" />
                Call: 85018 02222
              </a>
              <a
                href="https://wa.me/918501802222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg"
              >
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
