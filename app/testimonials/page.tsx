'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface InstagramReel {
  url: string;
  embedUrl: string;
}

interface GoogleReview {
  name: string;
  text: string;
  rating: number;
  date: string;
}

const instagramReels: InstagramReel[] = [
  {
    url: 'https://www.instagram.com/reel/DT4dXIAkS7Q/',
    embedUrl: 'https://www.instagram.com/reel/DT4dXIAkS7Q/embed'
  },
  {
    url: 'https://www.instagram.com/reel/DTcipQ6ETU1/',
    embedUrl: 'https://www.instagram.com/reel/DTcipQ6ETU1/embed'
  },
  {
    url: 'https://www.instagram.com/reel/DTKbKeFEXDz/',
    embedUrl: 'https://www.instagram.com/reel/DTKbKeFEXDz/embed'
  },
  {
    url: 'https://www.instagram.com/reel/DQk_VlnCkt3/',
    embedUrl: 'https://www.instagram.com/reel/DQk_VlnCkt3/embed'
  },
  {
    url: 'https://www.instagram.com/reel/DSzY9NukRUz/',
    embedUrl: 'https://www.instagram.com/reel/DSzY9NukRUz/embed'
  },
  {
    url: 'https://www.instagram.com/reel/DQUMA87D1TH/',
    embedUrl: 'https://www.instagram.com/reel/DQUMA87D1TH/embed'
  },
  {
    url: 'https://www.instagram.com/reel/DQMjaplj3yr/',
    embedUrl: 'https://www.instagram.com/reel/DQMjaplj3yr/embed'
  },
  {
    url: 'https://www.instagram.com/reel/DPgdSfeD8Zg/',
    embedUrl: 'https://www.instagram.com/reel/DPgdSfeD8Zg/embed'
  },
  {
    url: 'https://www.instagram.com/reel/DLSX96WzAtG/',
    embedUrl: 'https://www.instagram.com/reel/DLSX96WzAtG/embed'
  }
];

const googleReviews: GoogleReview[] = [
  {
    name: 'Sowjanya Velugubuntla',
    text: 'Best pediatric dentist in Kakinada... I have good experience with doctor and treatment... My kids got treatment here... Thank you',
    rating: 5,
    date: '4 months ago'
  },
  {
    name: 'Baburao Makireddi',
    text: 'One of the best dental clinics I have visited. Professional approach, clear explanation of treatment options, and affordable charges. I trust Padmavathi Dental Clinic completely for my family\'s dental care.😍',
    rating: 5,
    date: 'a week ago'
  },
  {
    name: 'Chinna Kamatam',
    text: 'In this hospital, we taken root canal treatment for my wife. Madam explains procedures clearly, answers questions thoroughly, and keeps the patient informed.',
    rating: 5,
    date: '5 months ago'
  },
  {
    name: 'Capt.B Adi Narayana',
    text: 'Cozy place if you require dental treatment. Should visit if any dental issue needs to be addressed. Very nice. The Doctor is very homely.',
    rating: 5,
    date: '2 months ago'
  },
  {
    name: 'Ditya Sri Matsa',
    text: 'Nice service just got my teeth clean up done and it was really good by Dr.Padmavathi',
    rating: 5,
    date: '4 months ago'
  },
  {
    name: 'Sagar Bandaru',
    text: 'Excellent treatment. Very good doctor. Good ambience. Finally I have found a good dentist.',
    rating: 5,
    date: '4 months ago'
  },
  {
    name: 'Lanka Kasi Annapurna',
    text: 'Good service well equipped lab for all dental treatment',
    rating: 5,
    date: '4 months ago'
  },
  {
    name: 'Lavanya Vantu',
    text: 'The clinic is well-maintained and hygienic. Dentist is knowledgeable, experienced, and uses the latest techniques.',
    rating: 5,
    date: '5 months ago'
  },
  {
    name: 'Naga Mahendra',
    text: 'Best dental clinic with a pleasant ambience. Dr. Padmavathi is a highly experienced dentist, and I received the best treatment here. Truly satisfied with the care provided.',
    rating: 5,
    date: '4 months ago'
  },
  {
    name: 'Rajesh Pachala',
    text: 'Thank you so much for the excellent care.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Prabhakar Arasavelli',
    text: 'Thanks Doctor for your care and attention! She did a wonderful job for my root canal treatment and guiding to choose the right option.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Sri Ima',
    text: 'Dr.Padmavathi ma\'am is a very good and known doctor who is 100% recommended to treat any dental issue, she is very co-operative and understanding, she talks to the patient understands the problem in detail.',
    rating: 5,
    date: '2 years ago'
  },
  {
    name: 'Sarath Vaddiparthi',
    text: 'Dr. Padmavati is one of the most experienced dentists in the city. She helped me get rid of my bad breath and has a great knowledge of dental procedures. She\'s been providing excellent care to patients for years.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Sudheer Mahadevu',
    text: 'Dr. Padamavathi is one of the best doctor as a dentist. She treat patients problems as best as possible. And the facilities in hospital also very nice.',
    rating: 5,
    date: '2 years ago'
  },
  {
    name: 'H Sri',
    text: 'Dr Padmavathi is doing her job very dedicatedly and sincerely. She owns our problem until success. Excellent treatment with motivation and experience. She is very great in patience to educate patients.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Sumanth Prakash',
    text: 'For my wife\'s dental checkup, we went to visit Dr. Padmavathi. She\'s polite and friendly. I\'ve recommended this dentist to many of my friends and family, they\'re all happy for me doing so.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Darling Prabhas',
    text: 'Dr. Padmavati Mam is an excellent dentist she took the time to explain every procedure. When I got my teeth whitened, Dr. Padmavathi Mam was very supportive and thorough when explaining the process.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Ruth Esther',
    text: 'Well equipped lab good in service for all treatment for dental',
    rating: 5,
    date: '4 months ago'
  },
  {
    name: 'Padma Gundra',
    text: 'Her treatment is marvelous and treated me as her own mother. She knows everything regarding dental problems and treating accordingly. Price is also very reasonable and low.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Ramu Tirumalanadhuni',
    text: 'Very nice, special care',
    rating: 5,
    date: '4 months ago'
  },
  {
    name: 'Surekha Thattala',
    text: 'Nice and affordable treatment by well experienced Dr Padmavathi mdm... Friendly hospital atmosphere. I highly recommend this clinic.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Chaganti Yesubabu',
    text: 'It\'s been a quite comfortable with doc and good receiving by the Hospital. Treatment is totally affordable.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Gopi Yenamandra',
    text: 'Dr Padmavathi is an excellent Dentist she has treatment skills and treatment is also economical and painless 👌😃🙏',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Pasagadula Gopi',
    text: 'Very best dentist doctor in kakinada Dr. Padmavathi garu, low cost best treatment',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Veer Sagar',
    text: 'I recommend very strong… very friendly doctor… one of best dentist doctor 🦷',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Madhu Y',
    text: 'Technically excellent young doctor had a great future god bless 🙌 her',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Patrudu Ankamreddi',
    text: 'Good Hospital And here Provide All dental Services.',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Lokesh Kumar',
    text: 'Very good treatment, doctor treated as very friendly',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Dr. Manasa',
    text: 'Very experienced doctor....good treatment and explains about the problem very clearly..',
    rating: 5,
    date: '3 years ago'
  },
  {
    name: 'Naram Jyothsnavi',
    text: 'Excellent',
    rating: 5,
    date: '3 months ago'
  }
];

export default function TestimonialsPage() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + googleReviews.length) % googleReviews.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get visible reviews (4 at a time on desktop, 2 on tablet, 1 on mobile)
  const getVisibleReviews = () => {
    const reviews = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % googleReviews.length;
      reviews.push({ ...googleReviews[index], index });
    }
    return reviews;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      <FloatingButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-green-600">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),transparent_50%)]"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0 Rating</span>
            <span className="text-teal-100">•</span>
            <span className="text-teal-100">2000+ Happy Patients</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Patient <span className="text-yellow-300">Testimonials</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-teal-50 max-w-3xl mx-auto mb-8 leading-relaxed">
            Real stories from real patients. See how we've transformed smiles and lives at Dr. Padmavathi's Dental Hospital
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">2000+</div>
              <div className="text-teal-100 text-sm">Happy Patients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">8+</div>
              <div className="text-teal-100 text-sm">Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">16+</div>
              <div className="text-teal-100 text-sm">Specialties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
                Real Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Video Testimonials
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Watch real stories from our satisfied patients sharing their dental transformation journey
            </p>
          </div>

          {/* Instagram Reels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramReels.map((reel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                  <iframe
                    src={reel.embedUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    allow="encrypted-media"
                    title={`Patient Testimonial ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Dental Journey?
            </h3>
            <p className="text-teal-50 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied patients who have transformed their smiles with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:8501802222"
                className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Call Now: 850-180-2222
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Google Reviews Slider */}
          <div className="mt-20 bg-white py-16">
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
                GOOGLE REVIEWS
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Patients Say
              </h3>
              <div className="h-1 w-20 bg-teal-600 mx-auto rounded-full mb-8"></div>
              
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-3xl font-bold text-gray-900">5.0</span>
                <span className="text-gray-600 text-lg">• 93 Google Reviews</span>
              </div>
            </div>

            {/* Slider Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 bg-white hover:bg-gray-50 text-gray-400 hover:text-teal-600 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 bg-white hover:bg-gray-50 text-gray-400 hover:text-teal-600 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>

              {/* Reviews Display */}
              <div className="overflow-hidden">
                {/* Desktop View - 4 cards */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                  {getVisibleReviews().slice(0, 4).map((review, idx) => (
                    <div
                      key={`${review.index}-${idx}`}
                      className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-200 transition-all duration-300 hover:shadow-md"
                    >
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-gray-700 mb-6 text-sm leading-relaxed min-h-[100px]">
                        "{review.text}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="mt-auto">
                        <p className="font-semibold text-gray-900 text-base">{review.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tablet View - 2 cards */}
                <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
                  {getVisibleReviews().slice(0, 2).map((review, idx) => (
                    <div
                      key={`${review.index}-${idx}`}
                      className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-200 transition-all duration-300 hover:shadow-md"
                    >
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-gray-700 mb-6 text-base leading-relaxed min-h-[100px]">
                        "{review.text}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="mt-auto">
                        <p className="font-semibold text-gray-900 text-base">{review.name}</p>
                        <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile View - 1 card */}
                <div className="md:hidden">
                  <div className="bg-white rounded-lg p-8 border border-gray-200">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(googleReviews[currentIndex].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-700 mb-8 text-base leading-relaxed">
                      "{googleReviews[currentIndex].text}"
                    </p>
                    
                    {/* Author Info */}
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{googleReviews[currentIndex].name}</p>
                      <p className="text-sm text-gray-500 mt-1">{googleReviews[currentIndex].date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Review CTA */}
            <div className="text-center mt-16">
              <a
                href="https://www.google.com/maps/place/Dr.padmavathi+Dental+Hospital+and+Implant+Centre/@17.0181097,82.2458495,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3829dff1a629f3:0xcf412cfd01b210e7!8m2!3d17.0181046!4d82.2484244!16s%2Fg%2F11tjpx0n8w?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                View All Reviews on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
