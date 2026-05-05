'use client';

import React from 'react';
import { FaUserFriends, FaUserMd, FaClock, FaTooth } from 'react-icons/fa';
import { useLanguage } from './LanguageProvider';

export default function Stats() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: FaUserFriends,
      number: '4200+',
      label: language === 'en' ? 'Happy Patients' : 'సంతృప్తి చెందిన రోగులు',
    },
    {
      icon: FaUserMd,
      number: '8+',
      label: language === 'en' ? 'Years Experience' : 'సంవత్సరాల అనుభవం',
    },
    {
      icon: FaTooth,
      number: '4000+',
      label: language === 'en' ? 'Smile Makeovers' : 'స్మైల్ మేక్ఓవర్స్',
    },
    {
      icon: FaClock,
      number: '1500+',
      label: language === 'en' ? 'Kids Treated' : 'పిల్లలకు చికిత్స',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-teal-600 to-green-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-10 h-10 opacity-90" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
