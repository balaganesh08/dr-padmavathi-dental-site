'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useLanguage } from './LanguageProvider';

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === 'en' 
    ? [
        {
          question: 'What are the signs that I might need a root canal?',
          answer: 'Signs include severe toothache, prolonged sensitivity to hot or cold, darkening of the tooth, swelling in the gums, or a recurring pimple on the gums. If you experience any of these symptoms, visit us for a thorough examination.'
        },
        {
          question: 'What is the process for getting dental implants?',
          answer: 'The dental implant process involves initial consultation, implant placement surgery, healing period (3-6 months), and finally placing the crown. We use advanced 3D imaging and ensure a comfortable, pain-free experience throughout the process.'
        },
        {
          question: 'Can I get invisible aligners (clear aligners)?',
          answer: 'Yes! We offer clear aligners for teeth straightening. After an initial consultation and 3D scan, we create a customized treatment plan. Clear aligners are removable, nearly invisible, and perfect for adults and teens who want discreet orthodontic treatment.'
        },
        {
          question: 'How often should I visit the dentist for a check-up?',
          answer: 'We recommend visiting every 6 months for routine check-ups and cleaning. However, if you have specific dental issues or are undergoing treatment, more frequent visits may be necessary. Regular visits help prevent serious dental problems.'
        },
        {
          question: 'What safety measures are in place at the clinic?',
          answer: 'We follow strict sterilization protocols using autoclaves for all instruments. Our clinic maintains high hygiene standards with disposable items where possible, regular sanitization, and adherence to all safety guidelines to ensure patient safety.'
        },
        {
          question: 'Are dental treatments painful?',
          answer: 'Modern dentistry has advanced significantly. We use local anesthesia and advanced techniques to ensure comfortable, pain-free treatments. For anxious patients, we provide gentle care and take extra time to ensure comfort throughout the procedure.'
        },
        {
          question: 'Do you accept insurance or offer payment plans?',
          answer: 'We accept most dental insurance plans. For treatments not covered by insurance, we offer flexible payment options. Please contact our front desk to discuss specific insurance questions or payment arrangements.'
        },
        {
          question: 'What should I expect during my first visit?',
          answer: 'Your first visit includes a comprehensive dental examination, X-rays if needed, discussion of your dental history, and a personalized treatment plan. We take time to address all your concerns and answer any questions you may have.'
        }
      ]
    : [
        {
          question: 'రూట్ కెనాల్ అవసరమవుతుందని సూచించే సంకేతాలు ఏమిటి?',
          answer: 'తీవ్రమైన దంతాల నొప్పి, వేడి లేదా చల్లటికి దీర్ఘకాల సున్నితత్వం, దంతాల నల్లబడటం, చిగుళ్ళలో వాపు, లేదా చిగుళ్ళపై పునరావృత మొటిమలు వంటివి సంకేతాలు. ఈ లక్షణాలలో ఏదైనా అనుభవిస్తే, పూర్తి పరీక్ష కోసం మమ్మల్ని సందర్శించండి.'
        },
        {
          question: 'దంత ఇంప్లాంట్లు పొందే ప్రక్రియ ఏమిటి?',
          answer: 'దంత ఇంప్లాంట్ ప్రక్రియలో ప్రాథమిక సంప్రదింపు, ఇంప్లాంట్ ప్లేస్‌మెంట్ సర్జరీ, వైద్యం కాలం (3-6 నెలలు), మరియు చివరగా కిరీటం అమర్చడం ఉంటుంది. మేము అధునాతన 3D ఇమేజింగ్ ఉపయోగిస్తాము మరియు ప్రక్రియ అంతటా సౌకర్యవంతమైన, నొప్పి లేని అనుభవాన్ని నిర్ధారిస్తాము.'
        },
        {
          question: 'నేను క్లియర్ అలైనర్లు పొందగలనా?',
          answer: 'అవును! మేము దంతాలను నిటారుగా చేయడానికి క్లియర్ అలైనర్లను అందిస్తాము. ప్రాథమిక సంప్రదింపు మరియు 3D స్కాన్ తర్వాత, మేము అనుకూలీకరించిన చికిత్స ప్రణాళికను సృష్టిస్తాము. క్లియర్ అలైనర్లు తొలగించదగినవి, దాదాపు అదృశ్యమైనవి మరియు వివేకవంతమైన ఆర్థోడాంటిక్ చికిత్స కావాలనుకునే పెద్దలు మరియు యువకులకు ఖచ్చితమైనవి.'
        },
        {
          question: 'చెక్-అప్ కోసం నేను ఎంత తరచుగా దంతవైద్యుడిని సందర్శించాలి?',
          answer: 'రొటీన్ చెక్-అప్ మరియు శుభ్రత కోసం ప్రతి 6 నెలలకు ఒకసారి సందర్శించమని మేము సిఫార్సు చేస్తున్నాము. అయితే, మీకు నిర్దిష్ట దంత సమస్యలు ఉంటే లేదా చికిత్స పొందుతున్నట్లయితే, మరింత తరచుగా సందర్శనలు అవసరం కావచ్చు. నియమిత సందర్శనలు తీవ్రమైన దంత సమస్యలను నివారించడంలో సహాయపడతాయి.'
        },
        {
          question: 'క్లినిక్‌లో ఏ భద్రతా చర్యలు అమలులో ఉన్నాయి?',
          answer: 'మేము అన్ని పరికరాల కోసం ఆటోక్లేవ్‌లను ఉపయోగించి కఠినమైన స్టెరిలైజేషన్ ప్రోటోకాల్‌లను అనుసరిస్తాము. మా క్లినిక్ సాధ్యమైన చోట పునర్వినియోగం కాని వస్తువులు, నియమిత శానిటైజేషన్ మరియు రోగి భద్రతను నిర్ధారించడానికి అన్ని భద్రతా మార్గదర్శకాలకు కట్టుబడి ఉండటంతో అధిక పరిశుభ్రత ప్రమాణాలను నిర్వహిస్తుంది.'
        },
        {
          question: 'దంత చికిత్సలు బాధాకరమా?',
          answer: 'ఆధునిక దంతవైద్యం గణనీయంగా అభివృద్ధి చెందింది. మేము సౌకర్యవంతమైన, నొప్పి లేని చికిత్సలను నిర్ధారించడానికి స్థానిక అనస్థీషియా మరియు అధునాతన పద్ధతులను ఉపయోగిస్తాము. ఆత్రేయమైన రోగుల కోసం, మేము సున్నితమైన సంరక్షణను అందిస్తాము మరియు ప్రక్రియ అంతటా సౌకర్యాన్ని నిర్ధారించడానికి అదనపు సమయం తీసుకుంటాము.'
        },
        {
          question: 'మీరు బీమా అంగీకరిస్తారా లేదా చెల్లింపు ప్రణాళికలను అందిస్తారా?',
          answer: 'మేము చాలా దంత బీమా ప్రణాళికలను అంగీకరిస్తాము. బీమా పరిధిలో లేని చికిత్సల కోసం, మేము సౌకర్యవంతమైన చెల్లింపు ఎంపికలను అందిస్తాము. నిర్దిష్ట బీమా ప్రశ్నలు లేదా చెల్లింపు ఏర్పాట్ల గురించి చర్చించడానికి దయచేసి మా ఫ్రంట్ డెస్క్‌ను సంప్రదించండి.'
        },
        {
          question: 'నా మొదటి సందర్శనలో నేను ఏమి ఆశించాలి?',
          answer: 'మీ మొదటి సందర్శనలో సమగ్ర దంత పరీక్ష, అవసరమైతే X-రేలు, మీ దంత చరిత్ర చర్చ మరియు వ్యక్తిగత చికిత్స ప్రణాళిక ఉంటాయి. మేము మీ అన్ని ఆందోళనలను పరిష్కరించడానికి మరియు మీకు ఉన్న ఏవైనా ప్రశ్నలకు సమాధానం ఇవ్వడానికి సమయం తీసుకుంటాము.'
        }
      ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium mb-3">
            {language === 'en' ? 'FAQ' : 'తరచుగా అడిగే ప్రశ్నలు'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">
              {language === 'en' ? 'Frequently Asked Questions' : 'తరచుగా అడిగే ప్రశ్నలు'}
            </span>
          </h2>
          <p className="text-gray-600">
            {language === 'en' 
              ? 'Find answers to common questions about our dental services' 
              : 'మా దంత సేవల గురించి సాధారణ ప్రశ్నలకు సమాధానాలను కనుగొనండి'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-teal-300 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
