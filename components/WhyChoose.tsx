'use client';

import React from 'react';
import { FaAward, FaShieldAlt, FaUserMd, FaHeartbeat } from 'react-icons/fa';
import { useLanguage } from './LanguageProvider';

export default function WhyChoose() {
  const { language } = useLanguage();

  const features = [
    {
      icon: FaAward,
      title: language === 'en' ? 'World Class Treatment' : 'ప్రపంచ స్థాయి చికిత్స',
      points: language === 'en' 
        ? [
            'Advanced dental technology',
            'Premium materials & equipment',
            'Laser dentistry & 3D scanning',
            'International quality standards'
          ]
        : [
            'అధునాతన దంత సాంకేతికత',
            'ప్రీమియం పదార్థాలు & పరికరాలు',
            'లేజర్ డెంటిస్ట్రీ & 3D స్కానింగ్',
            'అంతర్జాతీయ నాణ్యత ప్రమాణాలు'
          ],
    },
    {
      icon: FaUserMd,
      title: language === 'en' ? 'Expert Patient Care' : 'నిపుణ రోగి సంరక్షణ',
      points: language === 'en'
        ? [
            'Highly qualified specialists',
            'Personalized treatment plans',
            'Gentle & comfortable procedures',
            'Complete post-treatment support'
          ]
        : [
            'అత్యంత అర్హత కలిగిన నిపుణులు',
            'వ్యక్తిగత చికిత్స ప్రణాళికలు',
            'సౌకర్యవంతమైన చికిత్సలు',
            'పూర్తి అనంతర చికిత్స మద్దతు'
          ],
    },
    {
      icon: FaHeartbeat,
      title: language === 'en' ? '15+ Years Experience' : '15+ సంవత్సరాల అనుభవం',
      points: language === 'en'
        ? [
            'Specialist Pedodontist',
            '10,000+ successful treatments',
            'Expert in implants & cosmetics',
            'Trusted by thousands of families'
          ]
        : [
            'స్పెషలిస్ట్ పెడోడోంటిస్ట్',
            '10,000+ విజయవంతమైన చికిత్సలు',
            'ఇంప్లాంట్స్ & కాస్మెటిక్స్‌లో నిపుణుడు',
            'వేలాది కుటుంబాలు విశ్వసించారు'
          ],
    },
    {
      icon: FaShieldAlt,
      title: language === 'en' ? 'Unmatched Safety' : 'అసమానమైన భద్రత',
      points: language === 'en'
        ? [
            'Strict sterilization protocols',
            'Safe & hygienic environment',
            'Regular safety audits',
            'Patient safety first approach'
          ]
        : [
            'కఠినమైన స్టెరిలైజేషన్ ప్రోటోకాల్స్',
            'సురక్షితమైన & పరిశుభ్రమైన వాతావరణం',
            'నియమిత భద్రతా తనిఖీలు',
            'రోగి భద్రత మొదటి విధానం'
          ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium mb-3">
            {language === 'en' ? 'Why Choose Us' : 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">
              {language === 'en' ? 'Why Trust Dr. Padmavathi\'s Dental Clinic' : 'డాక్టర్ పద్మావతి దంత క్లినిక్‌ను ఎందుకు విశ్వసించాలి'}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-teal-500 to-green-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-teal-500 mr-2 mt-0.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
