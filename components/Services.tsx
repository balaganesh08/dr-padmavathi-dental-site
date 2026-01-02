'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import {
  ImplantIcon,
  BracesIcon,
  AlignersIcon,
  RootCanalIcon,
  KidsDentistryIcon,
  SmileDesignIcon,
  NightGuardIcon,
  WhiteningIcon,
  DenturesIcon,
  ScalingIcon,
  FillingsIcon,
  GumTreatmentIcon,
  BridgeIcon,
  VeneersIcon,
  CrownsIcon,
  GapClosureIcon,
} from './DentalIcons';

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  implants: ImplantIcon,
  braces: BracesIcon,
  clearAligners: AlignersIcon,
  rootCanal: RootCanalIcon,
  kidsDentistry: KidsDentistryIcon,
  smileDesigning: SmileDesignIcon,
  nightGuard: NightGuardIcon,
  teethWhitening: WhiteningIcon,
  dentures: DenturesIcon,
  scaling: ScalingIcon,
  fillings: FillingsIcon,
  gumTreatment: GumTreatmentIcon,
  bridge: BridgeIcon,
  veneers: VeneersIcon,
  crowns: CrownsIcon,
  gapClosure: GapClosureIcon,
};

export default function Services() {
  const { t } = useLanguage();

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
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key];
            const service = t.services.items[key];
            
            return (
              <div
                key={key}
                className="card group hover:border-teal-300 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:from-teal-600 group-hover:to-green-600 transition-all duration-300 shadow-md group-hover:shadow-lg">
                  <Icon className="w-10 h-10 text-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
