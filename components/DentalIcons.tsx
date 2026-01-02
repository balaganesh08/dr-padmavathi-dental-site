import React from 'react';

interface IconProps {
  className?: string;
}

export const ImplantIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth crown */}
    <path d="M32 8L28 16L24 24L20 32L24 40L28 48L32 56L36 48L40 40L44 32L40 24L36 16L32 8Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Implant screw */}
    <rect x="30" y="40" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M30 40L32 36L34 40" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const BracesIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left tooth */}
    <rect x="12" y="20" width="14" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Right tooth */}
    <rect x="38" y="20" width="14" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Braces brackets */}
    <rect x="18" y="24" width="4" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="18" y="36" width="4" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="42" y="24" width="4" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="42" y="36" width="4" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Wire */}
    <path d="M26 28L38 28M26 36L38 36" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const AlignersIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Upper aligner */}
    <path d="M8 16L56 16L52 24L56 32L52 40L56 48L8 48L12 40L8 32L12 24L8 16Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="12" y="20" width="40" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
    {/* Lower aligner */}
    <path d="M8 48L56 48L52 56L8 56L12 48L8 48Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
  </svg>
);

export const RootCanalIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth outline */}
    <path d="M32 8L28 16L24 24L20 32L24 40L28 48L32 56L36 48L40 40L44 32L40 24L36 16L32 8Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Pulp chamber */}
    <ellipse cx="32" cy="32" rx="6" ry="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Root canals */}
    <path d="M28 40L28 52M36 40L36 52" stroke="currentColor" strokeWidth="2"/>
    <circle cx="28" cy="48" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="36" cy="48" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const KidsDentistryIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left tooth */}
    <circle cx="18" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="16" cy="30" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="30" r="1.5" fill="currentColor"/>
    <path d="M16 36Q18 38 20 36" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Center tooth */}
    <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="30" cy="22" r="1.5" fill="currentColor"/>
    <circle cx="34" cy="22" r="1.5" fill="currentColor"/>
    <path d="M28 30Q32 34 36 30" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Right tooth */}
    <circle cx="46" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="44" cy="30" r="1.5" fill="currentColor"/>
    <circle cx="48" cy="30" r="1.5" fill="currentColor"/>
    <path d="M44 36Q46 38 48 36" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const SmileDesignIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth with smile */}
    <ellipse cx="32" cy="32" rx="18" ry="22" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Eyes */}
    <circle cx="26" cy="26" r="2.5" fill="currentColor"/>
    <circle cx="38" cy="26" r="2.5" fill="currentColor"/>
    {/* Smile */}
    <path d="M24 40Q32 48 40 40" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Sparkle/glamour */}
    <path d="M20 20L22 18L20 16L18 18L20 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M44 20L46 18L44 16L42 18L44 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const NightGuardIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Guard shape */}
    <path d="M8 28L56 28L52 36L56 44L8 44L12 36L8 28Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="12" y="30" width="40" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
    {/* Texture lines */}
    <path d="M16 34L48 34" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M16 38L48 38" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
  </svg>
);

export const WhiteningIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth */}
    <path d="M32 12L28 20L24 28L20 36L24 44L28 52L32 60L36 52L40 44L44 36L40 28L36 20L32 12Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="32" cy="36" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Sparkles */}
    <circle cx="24" cy="24" r="1.5" fill="currentColor" opacity="0.8"/>
    <circle cx="40" cy="24" r="1.5" fill="currentColor" opacity="0.8"/>
    <circle cx="26" cy="22" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="38" cy="22" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="28" cy="20" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="36" cy="20" r="1" fill="currentColor" opacity="0.6"/>
    {/* Smile */}
    <circle cx="28" cy="32" r="1.5" fill="currentColor"/>
    <circle cx="36" cy="32" r="1.5" fill="currentColor"/>
    <path d="M28 40Q32 44 36 40" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const DenturesIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Denture base */}
    <path d="M4 28L60 28L56 36L60 44L4 44L8 36L4 28Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="8" y="30" width="48" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    {/* Individual teeth */}
    <line x1="16" y1="32" x2="16" y2="40" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="32" y1="32" x2="32" y2="40" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="40" y1="32" x2="40" y2="40" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="48" y1="32" x2="48" y2="40" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ScalingIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth */}
    <path d="M32 8L28 16L24 24L20 32L24 40L28 48L32 56L36 48L40 40L44 32L40 24L36 16L32 8Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Scaling tool/cleaning lines */}
    <path d="M18 28L46 28M18 36L46 36" stroke="currentColor" strokeWidth="2.5"/>
    {/* Cleaning particles */}
    <circle cx="16" cy="28" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="48" cy="28" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="16" cy="36" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="48" cy="36" r="2" fill="currentColor" opacity="0.6"/>
  </svg>
);

export const FillingsIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth */}
    <path d="M32 12L28 20L24 28L20 36L24 44L28 52L32 60L36 52L40 44L44 36L40 28L36 20L32 12Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Fillings */}
    <circle cx="26" cy="32" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
    <circle cx="38" cy="32" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
    <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
  </svg>
);

export const GumTreatmentIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth */}
    <path d="M32 8L28 16L24 24L20 32L24 40L28 48L32 56L36 48L40 40L44 32L40 24L36 16L32 8Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Gum line */}
    <path d="M20 28L44 28" stroke="currentColor" strokeWidth="2.5"/>
    {/* Healthy gum indicators */}
    <path d="M18 26L14 22L18 18L22 22L18 26" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M46 26L50 22L46 18L42 22L46 26" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 26L32 18" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const BridgeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left anchor tooth */}
    <rect x="8" y="20" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Bridge pontic */}
    <rect x="24" y="16" width="16" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Right anchor tooth */}
    <rect x="44" y="20" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Connection lines */}
    <path d="M20 32L24 32M40 32L44 32" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const VeneersIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth base */}
    <path d="M32 12L28 20L24 28L20 36L24 44L28 52L32 60L36 52L40 44L44 36L40 28L36 20L32 12Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Veneer layer */}
    <rect x="24" y="24" width="16" height="24" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15"/>
    <line x1="26" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    <line x1="26" y1="34" x2="38" y2="34" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    <line x1="26" y1="40" x2="38" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

export const CrownsIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth base */}
    <path d="M32 8L28 16L24 24L20 32L24 40L28 48L32 56L36 48L40 40L44 32L40 24L36 16L32 8Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Crown cap */}
    <path d="M24 24L32 18L40 24" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="26" y="24" width="12" height="20" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    {/* Crown details */}
    <path d="M30 28L34 28" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="32" cy="32" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const GapClosureIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left tooth */}
    <rect x="12" y="20" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Right tooth */}
    <rect x="40" y="20" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Gap */}
    <path d="M24 32L40 32" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/>
    {/* Closure indicator */}
    <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M30 32L32 34L34 32" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);
