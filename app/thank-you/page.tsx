import React from 'react';
import Link from 'next/link';
import { FiPhone, FiCalendar, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';

export default function ThankYouPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back to Home */}
        <Link 
          href="/" 
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>

        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <FiCheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You! <span className="gradient-text">We've Received Your Message</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your inquiry has been successfully sent to Dr. Padmavathi's Dental Clinic in Kakinada. 
            Our team will contact you shortly to discuss your dental care needs.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-4">
              <FiPhone className="w-6 h-6 text-teal-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Need Immediate Assistance?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Call us directly for urgent dental concerns or to schedule your appointment right away.
            </p>
            <a 
              href="tel:8501802222" 
              className="inline-flex items-center bg-gradient-to-r from-teal-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <FiPhone className="mr-2" />
              Call Now: 85018 02222
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-4">
              <FiCalendar className="w-6 h-6 text-teal-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Book Your Appointment</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Schedule your visit at your convenience. We offer flexible timings including evening appointments.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-all"
            >
              <FiCalendar className="mr-2" />
              Schedule Appointment
            </Link>
          </div>
        </div>

        {/* Explore Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Our Dental Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/treatments/dental-implants" className="group">
              <div className="p-6 border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Dental Implants</h3>
                <p className="text-sm text-gray-600">Permanent tooth replacement solution</p>
              </div>
            </Link>
            
            <Link href="/treatments/braces-aligners" className="group">
              <div className="p-6 border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Braces & Aligners</h3>
                <p className="text-sm text-gray-600">Straighten your teeth perfectly</p>
              </div>
            </Link>
            
            <Link href="/treatments/root-canal-treatment" className="group">
              <div className="p-6 border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Root Canal</h3>
                <p className="text-sm text-gray-600">Pain-free root canal therapy</p>
              </div>
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>

        {/* Clinic Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Clinic in Kakinada</h3>
            <div className="text-gray-600 space-y-2">
              <p><strong>Address:</strong> Door no..7-102, suruchi foods upstairs, 7-103, road, Thimmapuram, Timmapuram, Kakinada</p>
              <p><strong>Timings:</strong> Monday - Saturday: 5:00 PM - 9:00 PM | Sunday: 10:00 AM - 1:00 PM</p>
              <p><strong>Phone:</strong> 85018 02222</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
