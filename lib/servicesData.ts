export interface ServiceData {
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
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const servicesData: Record<string, ServiceData> = {
  braces: {
    title: 'Dental Braces in Kakinada',
    subtitle: 'Straighten your teeth with traditional metal or ceramic braces',
    heroImage: '/services/Braces.jpg',
    description: 'Dental braces are orthodontic devices used to straighten and align teeth, correct bite issues, and improve overall oral health. At Dr. Padmavathi\'s Dental Clinic in Kakinada, we offer both traditional metal braces and aesthetic ceramic braces tailored to your specific needs. Our experienced orthodontic team ensures comfortable treatment with excellent results.',
    benefits: [
      'Straightens crooked and misaligned teeth effectively',
      'Corrects bite problems and jaw alignment issues',
      'Improves overall oral health and hygiene',
      'Boosts confidence with a beautiful smile',
      'Prevents future dental complications',
      'Available in metal and ceramic options',
    ],
    procedure: {
      title: 'Braces Treatment Process',
      steps: [
        'Initial Consultation: Comprehensive examination and X-rays to assess your dental alignment',
        'Treatment Planning: Custom orthodontic plan designed for your specific needs',
        'Braces Placement: Careful attachment of brackets and wires to your teeth',
        'Regular Adjustments: Monthly visits for wire tightening and progress monitoring',
        'Treatment Duration: Typically 12-24 months depending on case complexity',
        'Braces Removal: Removal of braces and fitting of retainers to maintain results',
      ],
    },
    faqs: [
      {
        question: 'How long do I need to wear braces?',
        answer: 'Treatment duration varies based on individual cases but typically ranges from 12 to 24 months. Complex cases may require longer treatment. Dr. Padmavathi will provide a personalized timeline during your consultation.',
      },
      {
        question: 'Are braces painful?',
        answer: 'You may experience mild discomfort for a few days after braces are placed or adjusted. This is normal and can be managed with over-the-counter pain relievers. The discomfort typically subsides within a week.',
      },
      {
        question: 'What\'s the difference between metal and ceramic braces?',
        answer: 'Metal braces are more visible but highly effective and durable. Ceramic braces are tooth-colored and blend with your teeth for a more aesthetic appearance. Both work equally well; the choice depends on your preference.',
      },
      {
        question: 'How much do braces cost in Kakinada?',
        answer: 'The cost varies based on the type of braces and treatment complexity. We offer affordable pricing and flexible payment plans. Contact us at 85018 02222 for a personalized quote.',
      },
    ],
    metaTitle: 'Dental Braces in Kakinada | Metal & Ceramic Braces | Dr. Padmavathi',
    metaDescription: 'Get affordable dental braces in Kakinada. Metal & ceramic braces for teeth straightening. Expert orthodontic care. 12-24 months treatment. Call 8501802222',
    keywords: 'braces Kakinada, dental braces, teeth braces, metal braces, ceramic braces, orthodontic treatment Kakinada',
  },

  bridge: {
    title: 'Dental Bridge in Kakinada',
    subtitle: 'Replace missing teeth with permanent dental bridges',
    heroImage: '/services/dental-bridge.jpg',
    description: 'A dental bridge is a fixed prosthetic device used to replace one or more missing teeth. It literally "bridges" the gap created by missing teeth by anchoring to adjacent natural teeth or implants. At our Kakinada clinic, we provide high-quality, natural-looking dental bridges that restore both function and aesthetics to your smile.',
    benefits: [
      'Restores ability to chew and speak properly',
      'Maintains facial shape and prevents bone loss',
      'Prevents remaining teeth from shifting',
      'Natural-looking and aesthetically pleasing',
      'Permanent solution that lasts 10-15 years',
      'More affordable than dental implants',
    ],
    procedure: {
      title: 'Bridge Placement Procedure',
      steps: [
        'Consultation: Examination of teeth and discussion of bridge options',
        'Tooth Preparation: Adjacent teeth are reshaped to accommodate the bridge',
        'Impressions: Detailed molds taken to create your custom bridge',
        'Temporary Bridge: Placed to protect prepared teeth during fabrication',
        'Bridge Fabrication: Custom bridge created in dental laboratory (1-2 weeks)',
        'Final Placement: Permanent bridge cemented into place and adjusted for comfort',
      ],
    },
    faqs: [
      {
        question: 'How long does a dental bridge last?',
        answer: 'With proper care and oral hygiene, a dental bridge can last 10-15 years or even longer. Regular dental checkups and good home care are essential for longevity.',
      },
      {
        question: 'Is getting a dental bridge painful?',
        answer: 'The procedure is performed under local anesthesia, so you won\'t feel pain during treatment. Some sensitivity may occur afterward but typically subsides within a few days.',
      },
      {
        question: 'How do I care for my dental bridge?',
        answer: 'Brush twice daily, floss carefully around the bridge using special floss threaders, avoid hard or sticky foods, and visit your dentist regularly for checkups.',
      },
      {
        question: 'What\'s the cost of a dental bridge in Kakinada?',
        answer: 'Cost depends on the number of teeth being replaced and materials used. We offer competitive pricing in Kakinada. Contact us for a detailed quote.',
      },
    ],
    metaTitle: 'Dental Bridge in Kakinada | Tooth Replacement | Dr. Padmavathi Clinic',
    metaDescription: 'Replace missing teeth with dental bridges in Kakinada. Permanent, natural-looking solution. 10-15 years durability. Affordable prices. Call 8501802222',
    keywords: 'dental bridge Kakinada, tooth replacement, missing teeth, fixed bridge, dental restoration Kakinada',
  },

  'clear-aligners': {
    title: 'Clear Aligners in Kakinada',
    subtitle: 'Invisible orthodontic treatment for a perfect smile',
    heroImage: '/services/clear-aligners.jpg',
    description: 'Clear aligners are a modern, virtually invisible alternative to traditional braces. These custom-made, removable trays gradually shift your teeth into the desired position. Perfect for adults and teens who want to straighten their teeth discreetly. Dr. Padmavathi offers advanced clear aligner treatment in Kakinada with digital planning and precision.',
    benefits: [
      'Virtually invisible - no one will notice you\'re wearing them',
      'Removable for eating, brushing, and special occasions',
      'More comfortable than traditional braces',
      'No dietary restrictions or food limitations',
      'Easier to maintain oral hygiene',
      'Fewer dental visits required',
    ],
    procedure: {
      title: 'Clear Aligner Treatment Process',
      steps: [
        '3D Scan: Digital impressions of your teeth for precise treatment planning',
        'Treatment Plan: Virtual simulation shows your teeth movement journey',
        'Custom Aligners: Series of aligners custom-made for your teeth',
        'Wear Schedule: Each aligner worn for 1-2 weeks, 20-22 hours daily',
        'Progress Monitoring: Regular checkups every 6-8 weeks',
        'Treatment Completion: Retainers provided to maintain your new smile',
      ],
    },
    faqs: [
      {
        question: 'How long does clear aligner treatment take?',
        answer: 'Treatment typically takes 6-18 months depending on the complexity of your case. Many patients see results in as little as 6 months for minor corrections.',
      },
      {
        question: 'Are clear aligners as effective as braces?',
        answer: 'Yes! Clear aligners can treat most orthodontic issues including crowding, spacing, and bite problems. However, very complex cases may still require traditional braces.',
      },
      {
        question: 'Can I eat and drink with clear aligners?',
        answer: 'You should remove aligners while eating or drinking anything except water. This prevents staining and damage to the aligners.',
      },
      {
        question: 'How much do clear aligners cost in Kakinada?',
        answer: 'Cost varies based on treatment complexity. We offer affordable pricing and EMI options. Schedule a consultation for a personalized quote.',
      },
    ],
    metaTitle: 'Clear Aligners Kakinada | Invisible Braces | Dr. Padmavathi Dental',
    metaDescription: 'Get invisible clear aligners in Kakinada. Modern alternative to braces. Removable, comfortable. 6-18 months treatment. Book consultation: 8501802222',
    keywords: 'clear aligners Kakinada, invisible braces, Invisalign, teeth straightening, orthodontic treatment Kakinada',
  },

  crowns: {
    title: 'Dental Crowns in Kakinada',
    subtitle: 'Restore damaged teeth with beautiful, durable crowns',
    heroImage: 'https://images.pexels.com/photos/6528840/pexels-photo-6528840.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Dental crowns, also called caps, are custom-made covers that fit over damaged, decayed, or aesthetically compromised teeth. They restore the tooth\'s shape, size, strength, and appearance. We offer various crown materials including porcelain, ceramic, and zirconia at our Kakinada clinic, ensuring natural-looking and long-lasting results.',
    benefits: [
      'Protects and strengthens weak or damaged teeth',
      'Restores normal tooth function and appearance',
      'Natural-looking with color-matched materials',
      'Durable and long-lasting (15-30 years)',
      'Improves overall smile aesthetics',
      'Prevents further tooth damage or decay',
    ],
    procedure: {
      title: 'Crown Placement Process',
      steps: [
        'Examination: Assessment of tooth condition and X-rays',
        'Tooth Preparation: Removal of decay and shaping of tooth',
        'Impressions: Precise molds taken for custom crown fabrication',
        'Temporary Crown: Placed to protect tooth during lab work',
        'Crown Creation: Custom crown made in dental lab (1-2 weeks)',
        'Final Fitting: Permanent crown cemented and adjusted for perfect fit',
      ],
    },
    faqs: [
      {
        question: 'How long do dental crowns last?',
        answer: 'With proper care, dental crowns can last 15-30 years. Porcelain and zirconia crowns are especially durable. Regular dental checkups and good oral hygiene extend crown lifespan.',
      },
      {
        question: 'Do crowns look natural?',
        answer: 'Yes! Modern ceramic and porcelain crowns are color-matched to your natural teeth and virtually indistinguishable. We ensure your crown blends seamlessly with your smile.',
      },
      {
        question: 'Is the crown procedure painful?',
        answer: 'No, the procedure is performed under local anesthesia. You may experience slight sensitivity after the anesthesia wears off, but this is temporary and manageable.',
      },
      {
        question: 'What\'s the cost of a dental crown in Kakinada?',
        answer: 'Cost varies based on material (ceramic, porcelain, zirconia). We offer competitive pricing. Contact us at 85018 02222 for specific pricing.',
      },
    ],
    metaTitle: 'Dental Crowns Kakinada | Porcelain & Zirconia Caps | Dr. Padmavathi',
    metaDescription: 'Get durable dental crowns in Kakinada. Natural-looking porcelain & zirconia crowns. Restore damaged teeth. 15-30 years lifespan. Call 8501802222',
    keywords: 'dental crowns Kakinada, tooth caps, porcelain crowns, zirconia crowns, dental restoration Kakinada',
  },

  dentures: {
    title: 'Dentures in Kakinada',
    subtitle: 'Complete and partial dentures for missing teeth',
    heroImage: 'https://images.pexels.com/photos/8853489/pexels-photo-8853489.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Dentures are removable replacements for missing teeth and surrounding tissues. We provide both complete dentures (for all missing teeth) and partial dentures (for some missing teeth) at our Kakinada clinic. Our custom-fitted dentures restore your ability to eat, speak, and smile with confidence.',
    benefits: [
      'Restores ability to chew and eat comfortably',
      'Improves speech and pronunciation',
      'Supports facial muscles and prevents sagging',
      'Natural-looking and aesthetically pleasing',
      'More affordable than implants or bridges',
      'Can be adjusted or relined as needed',
    ],
    procedure: {
      title: 'Denture Fitting Process',
      steps: [
        'Consultation: Comprehensive oral examination and treatment planning',
        'Impressions: Detailed molds of your gums and remaining teeth',
        'Bite Registration: Recording proper jaw relationship',
        'Try-In: Test fitting with wax denture for adjustments',
        'Final Fabrication: Custom denture created in dental laboratory',
        'Delivery & Adjustment: Final fitting and instructions for care',
      ],
    },
    faqs: [
      {
        question: 'How long does it take to get used to dentures?',
        answer: 'Most patients adjust to dentures within 4-8 weeks. Initially, you may experience increased saliva, difficulty eating, and speaking. These issues resolve with practice and time.',
      },
      {
        question: 'How do I care for my dentures?',
        answer: 'Remove and rinse dentures after eating, brush daily with denture cleaner, soak overnight in denture solution, and handle carefully to avoid damage.',
      },
      {
        question: 'How long do dentures last?',
        answer: 'Dentures typically last 5-10 years with proper care. As your gums and bone change shape over time, dentures may need adjustment or replacement.',
      },
      {
        question: 'What\'s the cost of dentures in Kakinada?',
        answer: 'Cost varies based on whether you need complete or partial dentures and the materials used. We offer affordable options. Contact us for pricing details.',
      },
    ],
    metaTitle: 'Dentures Kakinada | Complete & Partial Dentures | Dr. Padmavathi',
    metaDescription: 'Get comfortable dentures in Kakinada. Complete & partial options. Natural-looking, affordable. Replace missing teeth. Book consultation: 8501802222',
    keywords: 'dentures Kakinada, false teeth, complete dentures, partial dentures, removable dentures Kakinada',
  },

  fillings: {
    title: 'Dental Fillings in Kakinada',
    subtitle: 'Tooth-colored fillings for cavities and decay',
    heroImage: '/services/Dental-Fillings.jpg',
    description: 'Dental fillings are used to repair teeth damaged by decay or cavities. We specialize in tooth-colored composite fillings that blend naturally with your teeth, providing both functional restoration and aesthetic appeal. Our pain-free filling procedures in Kakinada ensure your comfort throughout treatment.',
    benefits: [
      'Stops cavity progression and prevents further decay',
      'Restores tooth structure and function',
      'Natural appearance with tooth-colored materials',
      'Preserves maximum healthy tooth structure',
      'Quick and painless procedure',
      'Long-lasting and durable results',
    ],
    procedure: {
      title: 'Filling Procedure',
      steps: [
        'Examination: Detection of cavities through visual exam and X-rays',
        'Anesthesia: Local numbing for comfortable, pain-free treatment',
        'Decay Removal: Careful cleaning of decayed tooth material',
        'Tooth Preparation: Shaping cavity for optimal filling placement',
        'Filling Application: Tooth-colored composite placed in layers',
        'Shaping & Polishing: Final adjustments for comfortable bite',
      ],
    },
    faqs: [
      {
        question: 'How long do tooth fillings last?',
        answer: 'Composite fillings typically last 5-10 years with proper care. Longevity depends on location, size, oral hygiene, and dietary habits.',
      },
      {
        question: 'Is getting a filling painful?',
        answer: 'No, we use local anesthesia to numb the area completely. You may feel slight pressure but no pain during the procedure. Some sensitivity may occur afterward but resolves quickly.',
      },
      {
        question: 'Can I eat immediately after a filling?',
        answer: 'With composite fillings, you can eat immediately as they harden instantly. However, it\'s best to wait until the anesthesia wears off to avoid biting your cheek or tongue.',
      },
      {
        question: 'How much does a filling cost in Kakinada?',
        answer: 'Cost varies based on cavity size and location. We offer affordable pricing for quality fillings. Contact us at 85018 02222 for details.',
      },
    ],
    metaTitle: 'Dental Fillings Kakinada | Tooth-Colored Cavities Treatment | Dr. Padmavathi',
    metaDescription: 'Get painless dental fillings in Kakinada. Tooth-colored composite fillings for cavities. Same-day treatment. Affordable prices. Call 8501802222',
    keywords: 'dental fillings Kakinada, cavity filling, tooth filling, composite filling, tooth decay treatment Kakinada',
  },

  'gap-closure': {
    title: 'Gap Closure Treatment in Kakinada',
    subtitle: 'Close spaces between teeth for a confident smile',
    heroImage: 'https://images.pexels.com/photos/6502307/pexels-photo-6502307.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Tooth gaps or spaces (diastema) can affect your smile\'s appearance and self-confidence. We offer multiple gap closure solutions including braces, clear aligners, dental bonding, and veneers at our Kakinada clinic. Dr. Padmavathi will recommend the best treatment based on your specific needs and preferences.',
    benefits: [
      'Improves smile aesthetics and confidence',
      'Prevents food trapping between teeth',
      'Reduces risk of gum disease',
      'Creates harmonious tooth alignment',
      'Multiple treatment options available',
      'Quick results with cosmetic options',
    ],
    procedure: {
      title: 'Gap Closure Treatment Options',
      steps: [
        'Consultation: Evaluation of gap size, cause, and oral health',
        'Treatment Planning: Discussion of options (braces, aligners, bonding, veneers)',
        'Orthodontic Route: Braces or clear aligners for gradual gap closure (6-18 months)',
        'Cosmetic Route: Dental bonding or veneers for instant results (1-2 visits)',
        'Treatment Execution: Based on chosen method',
        'Retention: Retainers or maintenance to preserve results',
      ],
    },
    faqs: [
      {
        question: 'What causes gaps between teeth?',
        answer: 'Gaps can result from genetics, thumb sucking, missing teeth, oversized jaw, undersized teeth, or gum disease. Dr. Padmavathi will identify the cause during your consultation.',
      },
      {
        question: 'Which gap closure method is best?',
        answer: 'It depends on gap size, your budget, and timeline. Braces/aligners are best for multiple gaps. Bonding/veneers work well for small gaps and provide instant results.',
      },
      {
        question: 'How long does gap closure take?',
        answer: 'Orthodontic treatment takes 6-18 months. Cosmetic bonding can close gaps in a single visit. Treatment duration depends on the method chosen.',
      },
      {
        question: 'Will gaps reappear after treatment?',
        answer: 'With proper retention (wearing retainers as directed), orthodontic results are permanent. Bonding and veneers provide long-lasting results with proper care.',
      },
    ],
    metaTitle: 'Gap Closure Treatment Kakinada | Tooth Gap Solutions | Dr. Padmavathi',
    metaDescription: 'Close tooth gaps in Kakinada. Braces, aligners, bonding & veneers. Quick & permanent solutions. Boost your confidence. Call 8501802222',
    keywords: 'gap closure Kakinada, tooth gap, diastema closure, teeth spacing, cosmetic dentistry Kakinada',
  },

  'gum-treatment': {
    title: 'Gum Treatment in Kakinada',
    subtitle: 'Expert care for healthy gums and beautiful smiles',
    heroImage: '/services/Gum-Treatment.jpg',
    description: 'Gum disease (periodontal disease) affects millions and can lead to tooth loss if untreated. At Dr. Padmavathi\'s Clinic in Kakinada, we provide comprehensive gum treatments including deep cleaning, scaling, root planing, and laser gum therapy. Early treatment is key to preserving your natural teeth and overall oral health.',
    benefits: [
      'Prevents tooth loss from gum disease',
      'Eliminates bad breath and bleeding gums',
      'Reduces inflammation and infection',
      'Prevents bone loss around teeth',
      'Improves overall oral and systemic health',
      'Painless treatment with modern techniques',
    ],
    procedure: {
      title: 'Gum Treatment Process',
      steps: [
        'Examination: Comprehensive gum health assessment and probing',
        'Diagnosis: Identifying stage of gum disease (gingivitis or periodontitis)',
        'Deep Cleaning: Scaling to remove plaque and tartar buildup',
        'Root Planing: Smoothing tooth roots to prevent bacteria accumulation',
        'Laser Therapy: Advanced laser treatment for severe cases (if needed)',
        'Maintenance: Regular follow-ups and professional cleanings',
      ],
    },
    faqs: [
      {
        question: 'What are signs of gum disease?',
        answer: 'Warning signs include bleeding gums, persistent bad breath, receding gums, loose teeth, swollen or tender gums, and pain while chewing. See a dentist immediately if you notice these symptoms.',
      },
      {
        question: 'Is gum treatment painful?',
        answer: 'We use local anesthesia and modern techniques to minimize discomfort. Most patients experience little to no pain during treatment. Some sensitivity may occur afterward but resolves quickly.',
      },
      {
        question: 'How long does gum disease treatment take?',
        answer: 'Treatment duration depends on disease severity. Mild cases may require 1-2 visits for scaling and root planing. Advanced cases may need multiple sessions over several weeks.',
      },
      {
        question: 'Can gum disease be cured?',
        answer: 'Early-stage gum disease (gingivitis) can be reversed with professional treatment and good oral hygiene. Advanced periodontitis can be controlled and stabilized but requires ongoing maintenance.',
      },
    ],
    metaTitle: 'Gum Treatment Kakinada | Periodontal Care | Dr. Padmavathi Dental',
    metaDescription: 'Expert gum treatment in Kakinada. Cure bleeding gums, gum disease. Scaling, root planing, laser therapy. Save your teeth. Call 8501802222',
    keywords: 'gum treatment Kakinada, periodontal treatment, gum disease, bleeding gums, pyorrhea treatment Kakinada',
  },

  implants: {
    title: 'Dental Implants in Kakinada',
    subtitle: 'Permanent tooth replacement with dental implants',
    heroImage: '/services/Dental-Implant.jpg',
    description: 'Dental implants are the gold standard for replacing missing teeth. These titanium posts are surgically placed into the jawbone and act as artificial tooth roots. At Dr. Padmavathi\'s Dental Clinic in Kakinada, we offer advanced implant solutions that look, feel, and function like natural teeth with a 98% success rate.',
    benefits: [
      'Most natural-looking and permanent solution',
      'Prevents bone loss and preserves jaw structure',
      'No damage to adjacent healthy teeth',
      'Comfortable and functions like natural teeth',
      'Lasts a lifetime with proper care',
      'Improves chewing ability and speech',
    ],
    procedure: {
      title: 'Implant Placement Process',
      steps: [
        'Consultation: 3D imaging and comprehensive treatment planning',
        'Implant Surgery: Titanium post placed into jawbone under local anesthesia',
        'Healing Period: 3-6 months for osseointegration (bone fusion)',
        'Abutment Placement: Connector piece attached to implant',
        'Crown Fabrication: Custom crown created to match natural teeth',
        'Final Restoration: Crown permanently attached to abutment',
      ],
    },
    faqs: [
      {
        question: 'How long do dental implants last?',
        answer: 'With proper care and oral hygiene, dental implants can last a lifetime. The implant crown may need replacement after 15-20 years, but the implant itself remains permanent.',
      },
      {
        question: 'Is implant surgery painful?',
        answer: 'The procedure is performed under local anesthesia, so you won\'t feel pain during surgery. Post-operative discomfort is mild and manageable with prescribed medications.',
      },
      {
        question: 'Am I a candidate for dental implants?',
        answer: 'Most adults with good overall health and adequate jawbone are candidates. Dr. Padmavathi will assess your suitability through examination and 3D scans.',
      },
      {
        question: 'What\'s the cost of dental implants in Kakinada?',
        answer: 'Cost includes implant, abutment, and crown. We offer competitive pricing and payment plans. Contact us at 85018 02222 for a detailed quote.',
      },
    ],
    metaTitle: 'Dental Implants Kakinada | Permanent Tooth Replacement | Dr. Padmavathi',
    metaDescription: 'Best dental implants in Kakinada. Permanent tooth replacement. 98% success rate. Lifetime solution. Advanced technology. Call 8501802222',
    keywords: 'dental implants Kakinada, tooth implant, missing tooth replacement, dental surgery, implant dentist Kakinada',
  },

  'kids-dentistry': {
    title: 'Pediatric Dentistry in Kakinada',
    subtitle: 'Gentle dental care for children with specialized expertise',
    heroImage: '/services/pediatric-dentistry.jpg',
    description: 'Dr. Padmavathi is a specialist pediatric dentist (MDS Pedodontist) providing child-friendly dental care in Kakinada. We create a comfortable, fun environment where children feel safe and relaxed. From first dental visit to teenage years, we ensure your child develops healthy oral habits and maintains a beautiful smile.',
    benefits: [
      'Specialist MDS Pedodontist with FAGE certification',
      'Child-friendly clinic with play area',
      'Gentle, pain-free treatments for kids',
      'Preventive care to avoid future dental issues',
      'Education on proper oral hygiene habits',
      'Early detection and treatment of dental problems',
    ],
    procedure: {
      title: 'Kids Dental Visit Process',
      steps: [
        'Friendly Introduction: Making your child comfortable and relaxed',
        'Gentle Examination: Checking teeth, gums, and oral development',
        'Cleaning & Fluoride: Professional cleaning and fluoride application',
        'Education: Teaching proper brushing and flossing techniques',
        'Treatment Planning: Discussing any needed treatments (fillings, sealants, etc.)',
        'Follow-Up: Regular checkups every 6 months for optimal oral health',
      ],
    },
    faqs: [
      {
        question: 'When should my child first visit the dentist?',
        answer: 'The first dental visit should occur by age 1 or within 6 months of the first tooth appearing. Early visits help establish good oral health habits and prevent future problems.',
      },
      {
        question: 'How do you make dental visits comfortable for children?',
        answer: 'We use child-friendly language, show-tell-do techniques, positive reinforcement, and create a fun environment with our play area. Dr. Padmavathi specializes in pediatric care and knows how to put children at ease.',
      },
      {
        question: 'Are dental treatments painful for children?',
        answer: 'We use gentle techniques and age-appropriate anesthesia to ensure pain-free treatments. Our goal is to make every visit positive so children don\'t develop dental anxiety.',
      },
      {
        question: 'What services do you offer for children?',
        answer: 'We provide checkups, cleanings, fluoride treatments, dental sealants, cavity fillings, space maintainers, orthodontic assessments, and emergency dental care for kids.',
      },
    ],
    metaTitle: 'Pediatric Dentist Kakinada | Kids Dentistry | Dr. Padmavathi MDS',
    metaDescription: 'Best kids dentist in Kakinada. Specialist pediatric care by MDS Pedodontist. Child-friendly, gentle treatment. Play area. Book appointment: 8501802222',
    keywords: 'kids dentist Kakinada, pediatric dentist, children dentist, child dental care, kids dental clinic Kakinada',
  },

  'laser-dentistry': {
    title: 'Laser Dentistry in Kakinada',
    subtitle: 'Advanced, painless dental treatments with laser technology',
    heroImage: 'https://images.pexels.com/photos/6528842/pexels-photo-6528842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Laser dentistry represents the future of dental care, offering precise, minimally invasive treatments with faster healing. At our Kakinada clinic, we use advanced dental lasers for gum treatments, cavity removal, teeth whitening, and oral surgeries. Experience painless dentistry with minimal bleeding and faster recovery.',
    benefits: [
      'Virtually painless procedures',
      'Minimal or no bleeding during treatment',
      'Faster healing and recovery time',
      'Reduced need for anesthesia',
      'Greater precision and accuracy',
      'Lower risk of infection',
    ],
    procedure: {
      title: 'Laser Treatment Applications',
      steps: [
        'Consultation: Assessment of condition suitable for laser treatment',
        'Preparation: Protective eyewear provided for safety',
        'Laser Application: Targeted treatment of affected area',
        'Minimal Discomfort: Most procedures require little to no anesthesia',
        'Quick Recovery: Immediate tissue sealing reduces healing time',
        'Follow-Up: Monitoring healing progress',
      ],
    },
    faqs: [
      {
        question: 'What dental procedures can be done with lasers?',
        answer: 'Lasers can be used for gum disease treatment, cavity removal, teeth whitening, gum reshaping, frenectomy, lesion removal, and root canal disinfection.',
      },
      {
        question: 'Is laser dentistry safe?',
        answer: 'Yes, laser dentistry is FDA-approved and completely safe when performed by trained professionals. We use protective eyewear and follow strict safety protocols.',
      },
      {
        question: 'Does laser treatment hurt?',
        answer: 'Laser procedures are typically painless. The precision of lasers means less trauma to surrounding tissues, resulting in minimal discomfort during and after treatment.',
      },
      {
        question: 'Is laser dentistry more expensive?',
        answer: 'Costs are competitive with traditional methods. The benefits of reduced pain, faster healing, and fewer visits often outweigh any cost difference.',
      },
    ],
    metaTitle: 'Laser Dentistry Kakinada | Painless Dental Treatment | Dr. Padmavathi',
    metaDescription: 'Advanced laser dentistry in Kakinada. Painless gum treatment, cavity removal. Fast healing, minimal bleeding. Modern technology. Call 8501802222',
    keywords: 'laser dentistry Kakinada, painless dental treatment, laser gum treatment, modern dentistry Kakinada',
  },

  'night-guard': {
    title: 'Night Guard in Kakinada',
    subtitle: 'Custom mouth guards for teeth grinding and TMJ',
    heroImage: '/services/night-guard.jpg',
    description: 'Night guards (occlusal guards) protect your teeth from grinding and clenching during sleep (bruxism). Custom-fitted at our Kakinada clinic, these appliances prevent tooth wear, jaw pain, and headaches. If you wake up with jaw soreness or have worn-down teeth, a night guard can provide relief and protection.',
    benefits: [
      'Prevents tooth wear and damage from grinding',
      'Reduces jaw pain and TMJ disorders',
      'Alleviates morning headaches',
      'Improves sleep quality',
      'Custom-fitted for maximum comfort',
      'Durable and long-lasting',
    ],
    procedure: {
      title: 'Night Guard Creation Process',
      steps: [
        'Consultation: Evaluation of grinding habits and jaw alignment',
        'Impressions: Precise molds taken of upper and lower teeth',
        'Custom Fabrication: Night guard created to fit your teeth perfectly',
        'Fitting Appointment: Adjustments made for optimal comfort',
        'Usage Instructions: Guidance on wearing and caring for your guard',
        'Follow-Up: Regular checkups to ensure proper fit and function',
      ],
    },
    faqs: [
      {
        question: 'How do I know if I need a night guard?',
        answer: 'Signs include waking with jaw pain, headaches, worn-down teeth, tooth sensitivity, or if your partner hears you grinding at night. Dr. Padmavathi can diagnose bruxism during examination.',
      },
      {
        question: 'How long does a night guard last?',
        answer: 'With proper care, a custom night guard typically lasts 3-5 years. Lifespan depends on grinding severity and maintenance. We\'ll check it during regular dental visits.',
      },
      {
        question: 'Is a custom night guard better than store-bought?',
        answer: 'Yes! Custom guards fit precisely, are more comfortable, provide better protection, and don\'t interfere with breathing. They\'re worth the investment for long-term use.',
      },
      {
        question: 'Will I be able to sleep comfortably with a night guard?',
        answer: 'Most patients adjust within a few nights. Custom guards are thin and comfortable. Any initial awkwardness quickly disappears as you get used to wearing it.',
      },
    ],
    metaTitle: 'Night Guard Kakinada | Teeth Grinding Protection | Dr. Padmavathi',
    metaDescription: 'Custom night guards in Kakinada for teeth grinding (bruxism). Prevent tooth wear, jaw pain. Comfortable fit. TMJ relief. Call 8501802222',
    keywords: 'night guard Kakinada, teeth grinding, bruxism, mouth guard, TMJ treatment Kakinada',
  },

  'root-canal': {
    title: 'Root Canal Treatment in Kakinada',
    subtitle: 'Painless root canal therapy to save your natural teeth',
    heroImage: '/services/Root_Canal.svg',
    description: 'Root canal treatment (RCT) is a procedure that saves severely decayed or infected teeth from extraction. Using advanced techniques and technology, Dr. Padmavathi provides painless root canal treatment in Kakinada. We remove infected pulp, clean the canal, and seal it to preserve your natural tooth for years to come.',
    benefits: [
      'Saves your natural tooth from extraction',
      'Eliminates pain from infected tooth',
      'Prevents spread of infection to surrounding teeth',
      'Painless procedure with modern anesthesia',
      'Single or two-visit treatment',
      'More affordable than tooth replacement',
    ],
    procedure: {
      title: 'Root Canal Procedure',
      steps: [
        'Diagnosis: X-rays and examination to confirm need for RCT',
        'Anesthesia: Complete numbing for pain-free treatment',
        'Access Opening: Small opening created in tooth crown',
        'Cleaning: Infected pulp removed and canals thoroughly cleaned',
        'Shaping & Filling: Canals shaped and filled with biocompatible material',
        'Crown Placement: Tooth restored with crown for strength and protection',
      ],
    },
    faqs: [
      {
        question: 'Is root canal treatment painful?',
        answer: 'No! Modern anesthesia and techniques make root canals painless. The procedure actually relieves the pain caused by infection. You may feel slight pressure but no pain.',
      },
      {
        question: 'How long does a root canal take?',
        answer: 'Most root canals are completed in 1-2 visits, each lasting 60-90 minutes. Complex cases may require additional visits.',
      },
      {
        question: 'How long will my tooth last after root canal?',
        answer: 'With proper care and a crown, a root canal-treated tooth can last a lifetime. Regular checkups ensure long-term success.',
      },
      {
        question: 'What\'s the cost of root canal treatment in Kakinada?',
        answer: 'Cost varies based on tooth location (front/back) and complexity. We offer affordable pricing. Contact us at 85018 02222 for details.',
      },
    ],
    metaTitle: 'Root Canal Treatment Kakinada | Painless RCT | Dr. Padmavathi Dental',
    metaDescription: 'Painless root canal treatment in Kakinada. Save infected teeth. Modern technology, expert care. Single visit RCT. Affordable. Call 8501802222',
    keywords: 'root canal Kakinada, RCT, root canal treatment, painless RCT, endodontic treatment Kakinada',
  },

  scaling: {
    title: 'Teeth Scaling in Kakinada',
    subtitle: 'Professional dental cleaning for healthy teeth and gums',
    heroImage: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Teeth scaling and polishing is a professional deep cleaning procedure that removes plaque, tartar, and stains from your teeth. Essential for maintaining oral health, scaling prevents gum disease, cavities, and bad breath. At our Kakinada clinic, we provide gentle, thorough scaling using ultrasonic technology for optimal results.',
    benefits: [
      'Prevents gum disease and tooth decay',
      'Removes stubborn plaque and tartar buildup',
      'Eliminates bad breath (halitosis)',
      'Brightens teeth by removing stains',
      'Promotes overall oral and systemic health',
      'Quick, painless procedure',
    ],
    procedure: {
      title: 'Scaling Procedure',
      steps: [
        'Examination: Assessment of plaque, tartar, and gum health',
        'Ultrasonic Scaling: Removal of hard tartar using ultrasonic scaler',
        'Manual Scaling: Fine cleaning of stubborn deposits',
        'Polishing: Teeth polished to smooth surface and remove stains',
        'Fluoride Treatment: Optional fluoride application for added protection',
        'Home Care Instructions: Guidance on maintaining clean teeth',
      ],
    },
    faqs: [
      {
        question: 'How often should I get teeth scaling done?',
        answer: 'We recommend professional scaling every 6 months for most patients. Those with gum disease or heavy tartar buildup may need more frequent cleanings.',
      },
      {
        question: 'Is scaling painful?',
        answer: 'Scaling is generally painless. If you have sensitive gums, you might feel mild discomfort. We can apply topical anesthetic gel if needed for your comfort.',
      },
      {
        question: 'Does scaling damage tooth enamel?',
        answer: 'No! Professional scaling is safe and does not damage enamel. It actually protects teeth by removing harmful bacteria and preventing decay and gum disease.',
      },
      {
        question: 'Can I eat after scaling?',
        answer: 'Yes, you can eat immediately after scaling. However, avoid very hot, cold, or spicy foods for a few hours if you experience any sensitivity.',
      },
    ],
    metaTitle: 'Teeth Scaling Kakinada | Professional Dental Cleaning | Dr. Padmavathi',
    metaDescription: 'Get professional teeth scaling in Kakinada. Remove plaque, tartar, stains. Prevent gum disease. Painless cleaning. Book now: 8501802222',
    keywords: 'teeth scaling Kakinada, dental cleaning, teeth polishing, tartar removal, oral hygiene Kakinada',
  },

  'smile-designing': {
    title: 'Smile Designing in Kakinada',
    subtitle: 'Transform your smile with cosmetic dentistry',
    heroImage: 'https://images.pexels.com/photos/6502307/pexels-photo-6502307.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Smile designing is a comprehensive cosmetic approach to creating your perfect smile. Combining multiple treatments like veneers, crowns, whitening, and orthodontics, we craft a customized plan to address all aesthetic concerns. Dr. Padmavathi uses digital smile design technology to preview your new smile before treatment begins.',
    benefits: [
      'Complete smile transformation',
      'Customized treatment plan for your goals',
      'Digital preview of final results',
      'Boosts confidence and self-esteem',
      'Addresses multiple cosmetic issues simultaneously',
      'Natural-looking, beautiful results',
    ],
    procedure: {
      title: 'Smile Designing Process',
      steps: [
        'Consultation: Discussion of your smile goals and concerns',
        'Digital Analysis: Photos and digital smile design software',
        'Treatment Planning: Customized combination of procedures',
        'Preview: Virtual simulation of your new smile',
        'Phased Treatment: Step-by-step execution of plan',
        'Final Result: Your dream smile revealed',
      ],
    },
    faqs: [
      {
        question: 'What procedures are included in smile designing?',
        answer: 'Smile designing can include teeth whitening, veneers, crowns, orthodontics, gum contouring, implants, and bonding - customized based on your needs.',
      },
      {
        question: 'How long does smile designing take?',
        answer: 'Duration varies based on treatments needed. Simple makeovers may take 2-4 weeks, while comprehensive transformations can take 3-6 months.',
      },
      {
        question: 'Is smile designing permanent?',
        answer: 'Many procedures like veneers and crowns are long-lasting (10-20 years). With proper care and maintenance, results can last for decades.',
      },
      {
        question: 'How much does smile designing cost in Kakinada?',
        answer: 'Cost depends on procedures included in your custom plan. We offer flexible payment options. Schedule a consultation for a personalized quote.',
      },
    ],
    metaTitle: 'Smile Designing Kakinada | Cosmetic Dentistry | Dr. Padmavathi',
    metaDescription: 'Transform your smile in Kakinada. Complete smile makeover with veneers, whitening, crowns. Digital preview. Expert cosmetic dentist. Call 8501802222',
    keywords: 'smile designing Kakinada, cosmetic dentistry, smile makeover, dental aesthetics, beautiful smile Kakinada',
  },

  'teeth-whitening': {
    title: 'Teeth Whitening in Kakinada',
    subtitle: 'Professional teeth whitening for a brighter smile',
    heroImage: '/services/teeth-whitening.jpg',
    description: 'Professional teeth whitening safely and effectively removes stains and discoloration, giving you a brighter, more confident smile. We offer both in-office laser whitening (instant results) and take-home whitening kits at our Kakinada clinic. Achieve 3-8 shades whiter teeth with our expert whitening treatments.',
    benefits: [
      'Dramatically whiter teeth (3-8 shades)',
      'Safe, effective, dentist-supervised',
      'Instant results with in-office treatment',
      'Removes coffee, tea, tobacco stains',
      'Boosts confidence and appearance',
      'Long-lasting results with proper care',
    ],
    procedure: {
      title: 'Teeth Whitening Process',
      steps: [
        'Consultation: Evaluation of stain type and treatment suitability',
        'Shade Assessment: Recording current tooth shade',
        'Cleaning: Professional cleaning to remove surface stains',
        'Protection: Gums protected with barrier material',
        'Whitening Application: Professional-grade gel applied to teeth',
        'Activation: Laser/LED light activates whitening gel (15-20 mins, 2-3 cycles)',
      ],
    },
    faqs: [
      {
        question: 'How long does teeth whitening last?',
        answer: 'Results typically last 1-3 years depending on lifestyle. Avoiding staining foods/drinks and good oral hygiene extend results. Touch-ups can maintain brightness.',
      },
      {
        question: 'Is teeth whitening safe?',
        answer: 'Yes! Professional whitening under dental supervision is completely safe. We use FDA-approved products that don\'t damage enamel when used correctly.',
      },
      {
        question: 'Will my teeth be sensitive after whitening?',
        answer: 'Some patients experience temporary sensitivity for 24-48 hours. We provide desensitizing gel and recommendations to minimize discomfort.',
      },
      {
        question: 'Who is not suitable for teeth whitening?',
        answer: 'Pregnant/nursing women, children under 16, those with severe gum disease or very sensitive teeth should postpone whitening. Consult Dr. Padmavathi for assessment.',
      },
    ],
    metaTitle: 'Teeth Whitening Kakinada | Professional Bleaching | Dr. Padmavathi',
    metaDescription: 'Professional teeth whitening in Kakinada. Laser whitening, 3-8 shades brighter. Instant results. Safe, effective. Book consultation: 8501802222',
    keywords: 'teeth whitening Kakinada, laser whitening, teeth bleaching, dental whitening, bright smile Kakinada',
  },

  veneers: {
    title: 'Dental Veneers in Kakinada',
    subtitle: 'Transform your smile with porcelain veneers',
    heroImage: '/services/porcelain-veneers.jpg',
    description: 'Dental veneers are thin shells of porcelain or composite bonded to the front of teeth to improve appearance. Perfect for correcting discoloration, chips, gaps, or misshapen teeth, veneers provide a natural-looking, dramatic smile transformation. Our Kakinada clinic offers premium quality veneers with expert craftsmanship.',
    benefits: [
      'Instant smile transformation',
      'Natural-looking, beautiful results',
      'Corrects multiple cosmetic issues',
      'Stain-resistant and durable',
      'Minimal tooth preparation required',
      'Long-lasting (10-20 years)',
    ],
    procedure: {
      title: 'Veneer Placement Process',
      steps: [
        'Consultation: Assessment and discussion of desired results',
        'Smile Design: Digital planning of your new smile',
        'Tooth Preparation: Minimal enamel removal (0.5mm)',
        'Impressions: Precise molds for custom veneer creation',
        'Temporary Veneers: Placed during lab fabrication (1-2 weeks)',
        'Final Bonding: Permanent veneers bonded with special adhesive',
      ],
    },
    faqs: [
      {
        question: 'How long do veneers last?',
        answer: 'Porcelain veneers typically last 10-20 years with proper care. Composite veneers last 5-7 years. Longevity depends on oral hygiene and habits.',
      },
      {
        question: 'Do veneers look natural?',
        answer: 'Yes! Modern porcelain veneers are incredibly natural-looking. We customize color, shape, and translucency to match your natural teeth perfectly.',
      },
      {
        question: 'Can veneers fix gaps between teeth?',
        answer: 'Absolutely! Veneers are an excellent solution for closing small to moderate gaps between teeth, providing instant results without orthodontics.',
      },
      {
        question: 'Are veneers painful to get?',
        answer: 'No, the procedure is minimally invasive and performed with local anesthesia if needed. Most patients experience no discomfort during or after treatment.',
      },
    ],
    metaTitle: 'Dental Veneers Kakinada | Porcelain Veneers | Dr. Padmavathi Clinic',
    metaDescription: 'Get beautiful porcelain veneers in Kakinada. Instant smile makeover. Natural-looking, durable. Fix gaps, stains, chips. Call 8501802222',
    keywords: 'dental veneers Kakinada, porcelain veneers, cosmetic veneers, smile makeover, tooth veneers Kakinada',
  },
};
