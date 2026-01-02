export type Language = 'en' | 'te';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    gallery: string;
    contact: string;
    callNow: string;
  };
  hero: {
    headline: string;
    subtext: string;
    bookAppointment: string;
    callNow: string;
  };
  about: {
    title: string;
    name: string;
    qualifications: string;
    specialty: string;
    description: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  timings: {
    title: string;
    weekdays: string;
    sunday: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  instagram: {
    title: string;
    followUs: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    address: string;
    quickLinks: string;
    socialMedia: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Doctor',
      services: 'Services',
      testimonials: 'Testimonials',
      gallery: 'Gallery',
      contact: 'Contact',
      callNow: 'Call Now',
    },
    hero: {
      headline: 'Your Smile, Our Priority',
      subtext: 'Advanced Dental Care | Implants | Cosmetic Dentistry',
      bookAppointment: 'Book Appointment',
      callNow: 'Call Now',
    },
    about: {
      title: 'About Doctor',
      name: 'Dr. Padmavathi Devi',
      qualifications: 'BDS, MDS, FAGE',
      specialty: 'Specialist Pedodontist',
      description:
        'With years of experience in pediatric dentistry and advanced dental procedures, Dr. Padmavathi Devi is committed to providing exceptional dental care. Her patient-focused approach ensures comfortable treatments and beautiful smiles for patients of all ages.',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Dental Care for You and Your Family',
      items: {
        implants: {
          title: 'Dental Implants',
          description: 'Permanent tooth replacement solution for a natural-looking smile.',
        },
        braces: {
          title: 'Braces',
          description: 'Traditional orthodontic treatment for straightening teeth.',
        },
        clearAligners: {
          title: 'Clear Aligners',
          description: 'Invisible braces for discreet teeth straightening.',
        },
        rootCanal: {
          title: 'Root Canal Treatment',
          description: 'Pain-free root canal therapy to save your natural teeth.',
        },
        kidsDentistry: {
          title: 'Kids Dentistry',
          description: 'Specialized dental care for children in a friendly environment.',
        },
        smileDesigning: {
          title: 'Smile Designing',
          description: 'Custom smile makeovers to enhance your confidence.',
        },
        nightGuard: {
          title: 'Night Guard',
          description: 'Protective devices for teeth grinding and TMJ disorders.',
        },
        teethWhitening: {
          title: '1 Hour Teeth Whitening',
          description: 'Quick and effective teeth whitening in just one hour.',
        },
        dentures: {
          title: 'Complete Dentures',
          description: 'Full and partial dentures for comfortable tooth replacement.',
        },
        scaling: {
          title: 'Scaling & Deep Cleaning',
          description: 'Professional cleaning to maintain healthy gums and teeth.',
        },
        fillings: {
          title: 'Composite (White) Fillings',
          description: 'Aesthetic tooth-colored fillings for natural appearance.',
        },
        gumTreatment: {
          title: 'Cosmetic Gum Treatment',
          description: 'Advanced gum treatments for a perfect smile.',
        },
        bridge: {
          title: 'Dental Bridge',
          description: 'Fixed bridgework to replace missing teeth.',
        },
        veneers: {
          title: 'Ceramic Veneers',
          description: 'Porcelain veneers for a flawless smile transformation.',
        },
        crowns: {
          title: 'Dental Crowns',
          description: 'Durable crowns to restore damaged or weakened teeth.',
        },
        gapClosure: {
          title: 'Gap Closure (Midline)',
          description: 'Specialized treatment to close gaps between teeth.',
        },
      },
    },
    timings: {
      title: 'Clinic Timings',
      weekdays: 'Weekdays: 5:00 PM – 9:00 PM',
      sunday: 'Sunday: 10:00 AM – 2:00 PM',
    },
    testimonials: {
      title: 'What Our Patients Say',
      subtitle: 'Real experiences from our satisfied patients',
    },
    instagram: {
      title: 'Follow Us on Instagram',
      followUs: 'Follow Us on Instagram',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us for your dental care needs',
      phone: 'Phone',
      email: 'Email',
      form: {
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Thank you! We will get back to you soon.',
      },
    },
    footer: {
      address: 'Address',
      quickLinks: 'Quick Links',
      socialMedia: 'Social Media',
      copyright: '© 2026 Dr. Padmavathi\'s Dental Hospital & Implant Centre. All Rights Reserved.',
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      about: 'డాక్టర్ గురించి',
      services: 'సేవలు',
      testimonials: 'సాక్ష్యాలు',
      gallery: 'గ్యాలరీ',
      contact: 'సంప్రదింపు',
      callNow: 'ఇప్పుడే కాల్ చేయండి',
    },
    hero: {
      headline: 'మీ చిరునవ్వు, మా ప్రాధాన్యత',
      subtext: 'అధునాతన దంత సంరక్షణ | ఇంప్లాంట్‌లు | కాస్మెటిక్ డెంటిస్ట్రీ',
      bookAppointment: 'నియామకం బుక్ చేయండి',
      callNow: 'ఇప్పుడే కాల్ చేయండి',
    },
    about: {
      title: 'డాక్టర్ గురించి',
      name: 'డాక్టర్ పద్మావతి దేవి',
      qualifications: 'BDS, MDS, FAGE',
      specialty: 'స్పెషలిస్ట్ పెడోడోంటిస్ట్',
      description:
        'పీడియాట్రిక్ డెంటిస్ట్రీ మరియు అధునాతన దంత చికిత్సలలో సంవత్సరాల అనుభవంతో, డాక్టర్ పద్మావతి దేవి అనుకూలమైన దంత సంరక్షణను అందించడానికి కట్టుబడి ఉన్నారు. ఆమె రోగి-కేంద్రీకృత విధానం అన్ని వయస్సుల రోగులకు సౌకర్యవంతమైన చికిత్సలు మరియు అందమైన చిరునవ్వులను నిర్ధారిస్తుంది.',
    },
    services: {
      title: 'మా సేవలు',
      subtitle: 'మీకు మరియు మీ కుటుంబానికి సమగ్ర దంత సంరక్షణ',
      items: {
        implants: {
          title: 'దంత ఇంప్లాంట్‌లు',
          description: 'సహజమైన చిరునవ్వుకు శాశ్వత దంత ప్రతిస్థాపన పరిష్కారం.',
        },
        braces: {
          title: 'బ్రేసెస్',
          description: 'దంతాలను నిటారుగా చేయడానికి సాంప్రదాయ ఆర్థోడాంటిక్ చికిత్స.',
        },
        clearAligners: {
          title: 'క్లియర్ అలైనర్‌లు',
          description: 'దంతాలను నిటారుగా చేయడానికి అదృశ్య బ్రేసెస్.',
        },
        rootCanal: {
          title: 'రూట్ కెనాల్ చికిత్స',
          description: 'మీ సహజ దంతాలను కాపాడడానికి నొప్పి లేని రూట్ కెనాల్ థెరపీ.',
        },
        kidsDentistry: {
          title: 'పిల్లల దంత సంరక్షణ',
          description: 'స్నేహపూర్వక వాతావరణంలో పిల్లలకు ప్రత్యేక దంత సంరక్షణ.',
        },
        smileDesigning: {
          title: 'చిరునవ్వు డిజైనింగ్',
          description: 'మీ ఆత్మవిశ్వాసాన్ని పెంచడానికి అనుకూల చిరునవ్వు మేక్ఓవర్‌లు.',
        },
        nightGuard: {
          title: 'నైట్ గార్డ్',
          description: 'దంతాలను పెట్టడం మరియు TMJ రుగ్మతలకు రక్షణ పరికరాలు.',
        },
        teethWhitening: {
          title: '1 గంట దంతాల తెల్లగా చేయడం',
          description: 'కేవలం ఒక గంటలో వేగవంతమైన మరియు ప్రభావవంతమైన దంతాల తెల్లగా చేయడం.',
        },
        dentures: {
          title: 'పూర్తి డెంచర్‌లు',
          description: 'సౌకర్యవంతమైన దంత ప్రతిస్థాపన కోసం పూర్తి మరియు పాక్షిక డెంచర్‌లు.',
        },
        scaling: {
          title: 'స్కేలింగ్ & లోతైన శుభ్రత',
          description: 'ఆరోగ్యకరమైన చిగుళ్ళు మరియు దంతాలను నిర్వహించడానికి ప్రొఫెషనల్ శుభ్రత.',
        },
        fillings: {
          title: 'కాంపోజిట్ (తెల్లని) ఫిల్లింగ్‌లు',
          description: 'సహజ రూపానికి సౌందర్య దంత-రంగు ఫిల్లింగ్‌లు.',
        },
        gumTreatment: {
          title: 'కాస్మెటిక్ చిగుళ్ళు చికిత్స',
          description: 'పరిపూర్ణ చిరునవ్వుకు అధునాతన చిగుళ్ళు చికిత్సలు.',
        },
        bridge: {
          title: 'దంత వంతెన',
          description: 'లేని దంతాలను భర్తీ చేయడానికి స్థిర వంతెన పని.',
        },
        veneers: {
          title: 'సిరామిక్ వెనీర్‌లు',
          description: 'నిర్దోషమైన చిరునవ్వు రూపాంతరం కోసం పోర్సిలైన్ వెనీర్‌లు.',
        },
        crowns: {
          title: 'దంత కిరీటాలు',
          description: 'పాడైన లేదా బలహీనమైన దంతాలను పునరుద్ధరించడానికి మన్నికైన కిరీటాలు.',
        },
        gapClosure: {
          title: 'గ్యాప్ క్లోజర్ (మిడ్‌లైన్)',
          description: 'దంతాల మధ్య ఖాళీలను మూసివేయడానికి ప్రత్యేక చికిత్స.',
        },
      },
    },
    timings: {
      title: 'క్లినిక్ సమయాలు',
      weekdays: 'వారపు రోజులు: 5:00 PM – 9:00 PM',
      sunday: 'ఆదివారం: 10:00 AM – 2:00 PM',
    },
    testimonials: {
      title: 'మా రోగులు ఏమి చెబుతున్నారు',
      subtitle: 'మా సంతృప్తి చెందిన రోగుల నిజమైన అనుభవాలు',
    },
    instagram: {
      title: 'ఇన్‌స్టాగ్రామ్‌లో మమ్మల్ని ఫాలో చేయండి',
      followUs: 'ఇన్‌స్టాగ్రామ్‌లో మమ్మల్ని ఫాలో చేయండి',
    },
    contact: {
      title: 'మమ్మల్ని సంప్రదించండి',
      subtitle: 'మీ దంత సంరక్షణ అవసరాల కోసం మమ్మల్ని సంప్రదించండి',
      phone: 'ఫోన్',
      email: 'ఇమెయిల్',
      form: {
        name: 'పేరు',
        phone: 'ఫోన్',
        email: 'ఇమెయిల్',
        message: 'సందేశం',
        submit: 'సందేశం పంపండి',
        success: 'ధన్యవాదాలు! మేము త్వరలో మీకు తిరిగి సంప్రదిస్తాము.',
      },
    },
    footer: {
      address: 'చిరునామా',
      quickLinks: 'త్వరిత లింక్‌లు',
      socialMedia: 'సామాజిక మాధ్యమం',
      copyright: '© 2026 డాక్టర్ పద్మావతి దంత ఆసుపత్రి & ఇంప్లాంట్ సెంటర్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    },
  },
};

