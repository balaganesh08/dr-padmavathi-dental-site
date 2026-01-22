'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { FiAward, FiSmile, FiHeart, FiUsers, FiHome } from 'react-icons/fi';
import { FaGraduationCap, FaTrophy, FaCertificate, FaStar } from 'react-icons/fa';

export default function AboutDoctorPage() {
  const qualifications = [
    {
      degree: 'BDS',
      title: 'Bachelor of Dental Surgery',
      icon: FaGraduationCap,
    },
    {
      degree: 'MDS',
      title: 'Master of Dental Surgery',
      icon: FaGraduationCap,
    },
    {
      degree: 'FAGE',
      title: 'Fellowship in Advanced General Education',
      icon: FaCertificate,
    },
  ];

  const specializations = [
    'Pediatric Dentistry (Kids Dental Care)',
    'Dental Implants',
    'Smile Designing',
    'Clear Aligners & Orthodontics',
    'Root Canal Treatment',
    'Laser Dentistry',
    'Cosmetic Dentistry',
    'Full Mouth Rehabilitation',
  ];

  const achievements = [
    {
      icon: FiSmile,
      number: '2200+',
      label: 'Smile Makeovers',
    },
    {
      icon: FiUsers,
      number: '10,000+',
      label: 'Happy Patients',
    },
    {
      icon: FiAward,
      number: '8+',
      label: 'Years Experience',
    },
    {
      icon: FiHeart,
      number: '100%',
      label: 'Patient Satisfaction',
    },
  ];

  const awards = [
    {
      title: 'Excellence in Pediatric Dentistry',
      organization: 'Indian Dental Association',
      year: '2023',
      description: 'Recognized for outstanding contribution to pediatric dental care',
    },
    {
      title: 'Best Dental Implant Specialist',
      organization: 'Andhra Pradesh Dental Council',
      year: '2022',
      description: 'Award for excellence in dental implant procedures',
    },
    {
      title: 'Patient Care Excellence Award',
      organization: 'Healthcare Excellence Forum',
      year: '2021',
      description: 'Honored for exceptional patient care and service',
    },
    {
      title: 'Innovative Dental Practices',
      organization: 'National Dental Conference',
      year: '2020',
      description: 'Recognition for implementing advanced dental technologies',
    },
  ];

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
            <Link href="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
              <FiHome className="mr-2" />
              Back to Home
            </Link>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                About Dr. Padmavathi Devi
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Specialist Pedodontist | Expert in Dental Implants & Cosmetic Dentistry
              </p>
            </div>
          </div>
        </section>

        {/* Doctor Profile Section */}
        <section className="py-16 -mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Profile Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Doctor Image Side */}
                <div className="lg:col-span-2 relative">
                  <div className="relative h-full min-h-[500px] bg-gradient-to-br from-teal-600 via-teal-500 to-green-500 p-8">
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                      <Image
                        src="/Dr_Padmavathi.JPG"
                        alt="Dr. Padmavathi Devi - Specialist Pedodontist"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  </div>
                </div>

                {/* Doctor Information Side */}
                <div className="lg:col-span-3 p-8 lg:p-12">
                  <div className="space-y-8">
                    {/* Name & Title */}
                    <div>
                      <div className="inline-block px-4 py-2 bg-teal-50 rounded-full mb-4">
                        <span className="text-teal-700 font-semibold text-sm">Specialist Pedodontist</span>
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                        <span className="gradient-text">Dr. Padmavathi Devi</span>
                      </h2>
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-full text-sm font-semibold">
                          BDS
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-full text-sm font-semibold">
                          MDS
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-full text-sm font-semibold">
                          FAGE
                        </span>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-4 text-center">
                        <div className="text-3xl font-bold gradient-text">8+</div>
                        <div className="text-xs text-gray-600 mt-1">Years Exp.</div>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-4 text-center">
                        <div className="text-3xl font-bold gradient-text">2200+</div>
                        <div className="text-xs text-gray-600 mt-1">Smiles</div>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-4 text-center">
                        <div className="text-3xl font-bold gradient-text">10K+</div>
                        <div className="text-xs text-gray-600 mt-1">Patients</div>
                      </div>
                    </div>

                    {/* Qualifications */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FaGraduationCap className="text-teal-600" />
                        Educational Qualifications
                      </h3>
                      <div className="grid gap-3">
                        {qualifications.map((qual, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-green-50 transition-all duration-300 group">
                            <div className="bg-gradient-to-br from-teal-600 to-green-600 rounded-xl p-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                              <qual.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{qual.degree}</p>
                              <p className="text-sm text-gray-600">{qual.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Profile Description */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-green-600 rounded-xl flex items-center justify-center">
                      <FiHeart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Professional Profile</h3>
                  </div>
                  <div className="space-y-5 text-gray-700 leading-relaxed text-base lg:text-lg">
                    <p className="relative pl-6 border-l-4 border-teal-200">
                      Dr. Padmavathi Devi is a highly skilled and compassionate dentist with over 8 years of 
                      experience in providing comprehensive dental care. As a specialist pedodontist, she has 
                      a particular expertise in treating children and making their dental visits comfortable 
                      and anxiety-free.
                    </p>
                    <p className="relative pl-6 border-l-4 border-green-200">
                      With advanced training in dental implants, cosmetic dentistry, and smile designing, 
                      Dr. Padmavathi has transformed thousands of smiles across Kakinada and surrounding areas. 
                      Her patient-focused approach ensures that every individual receives personalized treatment 
                      plans tailored to their specific needs.
                    </p>
                    <p className="relative pl-6 border-l-4 border-teal-200">
                      Dr. Padmavathi believes in staying updated with the latest advancements in dentistry 
                      and regularly attends national and international conferences. She has invested in 
                      state-of-the-art dental equipment and technology to provide world-class treatment 
                      to her patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-teal-900 to-green-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-teal-300 font-semibold text-sm">Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Areas of Expertise
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive dental care with specialized expertise in multiple areas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializations.map((specialty, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-teal-400 to-green-400 rounded-xl p-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FaStar className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white font-medium text-sm leading-relaxed">{specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-teal-50 rounded-full mb-4">
                <span className="text-teal-700 font-semibold text-sm">Success Metrics</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Achievements & Milestones
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Committed to excellence in dental care
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-400 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-5xl font-bold gradient-text mb-3">
                      {achievement.number}
                    </h3>
                    <p className="text-gray-700 font-semibold">{achievement.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full mb-4">
                <span className="text-orange-700 font-semibold text-sm">Recognition</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Awards & Recognition
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Honored for excellence in dental care and patient service
              </p>
            </div>
            
            {/* Awards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 rounded-2xl p-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <FaTrophy className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors leading-tight">
                            {award.title}
                          </h3>
                          <span className="text-sm font-bold bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-4 py-1.5 rounded-full whitespace-nowrap">
                            {award.year}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <FaCertificate className="w-4 h-4 text-teal-600" />
                          <p className="text-sm font-semibold text-gray-700">
                            {award.organization}
                          </p>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards Gallery Images */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/clinic-images/Awards.jpeg"
                    alt="Awards and Certifications"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <FaCertificate className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-2xl">Professional Certifications</h3>
                    </div>
                    <p className="text-white/90 text-sm">Recognized excellence in dental practice</p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/clinic-images/Awards Gallery.jpeg"
                    alt="Awards Gallery Display"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <FaTrophy className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-2xl">Awards & Honors Gallery</h3>
                    </div>
                    <p className="text-white/90 text-sm">Collection of achievements and accolades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule Your Appointment Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience personalized dental care with Dr. Padmavathi Devi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Book Appointment
              </Link>
              <a
                href="tel:8501802222"
                className="bg-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition-colors inline-block border-2 border-white"
              >
                Call: 85018 02222
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
