'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { 
  FaTooth, 
  FaChild,
  FaSmile,
  FaMoon,
  FaStar,
  FaUserMd,
  FaHeart,
  FaHeartbeat,
  FaGem,
  FaCrown,
  FaExpand,
  FaLightbulb,
  FaLayerGroup,
  FaSyringe,
  FaBone
} from 'react-icons/fa';
import { 
  GiToothbrush,
  GiLaserBurst,
  GiBridge
} from 'react-icons/gi';
import {
  MdCleaningServices
} from 'react-icons/md';

// Icon files mapping - using local icons where available
const serviceIcons: Record<string, { type: 'icon' | 'image', path?: string, component?: React.ComponentType<{ className?: string }> }> = {
  implants: { type: 'image', path: '/icons/dental-implant.png' },
  braces: { type: 'image', path: '/icons/braces.png' },
  clearAligners: { type: 'image', path: '/icons/aligner.png' },
  rootCanal: { type: 'image', path: '/icons/root-canal.png' },
  kidsDentistry: { type: 'image', path: '/icons/kids-dentistry.webp' },
  smileDesigning: { type: 'image', path: '/icons/happy-tooth.png' },
  nightGuard: { type: 'image', path: '/icons/night-protection.png' },
  teethWhitening: { type: 'image', path: '/icons/tooth-whitening.png' },
  dentures: { type: 'icon', component: FaUserMd },
  scaling: { type: 'icon', component: GiToothbrush },
  fillings: { type: 'icon', component: FaTooth },
  gumTreatment: { type: 'icon', component: FaHeart },
  bridge: { type: 'icon', component: GiBridge },
  veneers: { type: 'icon', component: FaGem },
  crowns: { type: 'icon', component: FaCrown },
  gapClosure: { type: 'icon', component: FaExpand },
  laserDentistry: { type: 'icon', component: GiLaserBurst },
  oralSurgeries: { type: 'icon', component: FaSyringe },
  jawFractures: { type: 'icon', component: FaBone },
};

export default function Services() {
  const { t } = useLanguage();

  // Map service keys to their URL slugs
  const serviceUrlMap: Record<string, string> = {
    implants: '/services/implants',
    braces: '/services/braces',
    clearAligners: '/services/clear-aligners',
    rootCanal: '/services/root-canal',
    kidsDentistry: '/services/kids-dentistry',
    smileDesigning: '/services/smile-designing',
    nightGuard: '/services/night-guard',
    teethWhitening: '/services/teeth-whitening',
    dentures: '/services/dentures',
    scaling: '/services/scaling',
    fillings: '/services/fillings',
    gumTreatment: '/services/gum-treatment',
    bridge: '/services/bridge',
    veneers: '/services/veneers',
    crowns: '/services/crowns',
    gapClosure: '/services/gap-closure',
    laserDentistry: '/services/laser-dentistry',
    oralSurgeries: '/services/oral-surgeries',
    jawFractures: '/services/jaw-fractures',
  };

  const serviceKeys = [
    'implants',
    'braces',
    'clearAligners',
    'rootCanal',
    'kidsDentistry',
    'smileDesigning',
    'nightGuard',
    'teethWhitening',
    'dentures',
    'scaling',
    'fillings',
    'gumTreatment',
    'bridge',
    'veneers',
    'crowns',
    'gapClosure',
    'laserDentistry',
    'oralSurgeries',
    'jawFractures',
  ] as const;

  return (
    <section id="services" className="section-container bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium mb-3">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">{t.services.title}</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {serviceKeys.slice(0, 8).map((key, index) => {
            const serviceConfig = serviceIcons[key];
            const service = t.services.items[key];
            const serviceUrl = serviceUrlMap[key];
            
            return (
              <Link
                key={key}
                href={serviceUrl}
                className="card group hover:border-teal-300 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 50}ms` }}
                title={`Learn more about ${service.title}`}
              >
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:from-teal-600 group-hover:to-green-600 transition-all duration-300 shadow-md group-hover:shadow-lg">
                  {serviceConfig.type === 'image' && serviceConfig.path ? (
                    <Image
                      src={serviceConfig.path}
                      alt={service.title}
                      title={service.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : serviceConfig.component ? (
                    <serviceConfig.component className="w-10 h-10 text-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                  ) : null}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            href="/specialties"
            className="btn-primary inline-block"
            title="View all our dental specialties"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
