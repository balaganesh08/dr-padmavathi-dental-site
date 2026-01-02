'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { FiInstagram, FiChevronLeft, FiChevronRight, FiRefreshCw } from 'react-icons/fi';

export default function Instagram() {
  const { t } = useLanguage();
  
  // Fallback URLs (used if API is not configured or fails)
  const fallbackUrls = [
    'https://www.instagram.com/p/DSzY9NukRUz/',
    'https://www.instagram.com/p/DSfNu2Cj9gm/',
    'https://www.instagram.com/p/DSaW5ppj7St/',
    'https://www.instagram.com/p/DSNEg_tj_kD/',
    'https://www.instagram.com/p/DSFJTc3ARLs/',
    'https://www.instagram.com/p/DR7LTVPD3Fl/',
  ];

  const [instagramUrls, setInstagramUrls] = useState<string[]>(fallbackUrls);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Responsive items per view
  const [itemsPerView, setItemsPerView] = useState(1);
  
  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 items
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(1); // Mobile: 1 item
      }
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Fetch Instagram posts from API
  const fetchInstagramPosts = async () => {
    try {
      setIsRefreshing(true);
      const response = await fetch('/api/instagram');
      const data = await response.json();
      
      if (data.posts && data.posts.length > 0) {
        setInstagramUrls(data.posts);
      }
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      // Keep using fallback URLs on error
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  // Fetch posts on component mount and set up auto-refresh
  useEffect(() => {
    fetchInstagramPosts();
    
    // Auto-refresh every 30 minutes to get new posts
    const refreshInterval = setInterval(() => {
      fetchInstagramPosts();
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(refreshInterval);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (instagramUrls.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, instagramUrls.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [instagramUrls.length]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, instagramUrls.length - itemsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, instagramUrls.length - itemsPerView);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      window.instgrm?.Embeds.process();
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Process embeds when slides change or URLs update
  useEffect(() => {
    if (instagramUrls.length > 0) {
      setTimeout(() => {
        window.instgrm?.Embeds.process();
      }, 300);
    }
  }, [currentIndex, instagramUrls]);

  // Extract post ID from URL
  const getPostId = (url: string) => {
    const match = url.match(/\/p\/([^/?]+)/);
    return match ? match[1] : null;
  };

  if (isLoading) {
    return (
      <section id="gallery" className="section-container bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <FiRefreshCw className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading Instagram posts...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="section-container bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-green-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">{t.instagram.title}</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Follow us on Instagram to see more of our work, patient transformations, and dental care tips
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Instagram Posts/Reels Carousel */}
          {instagramUrls.length > 0 ? (
            <div className="relative">
              {/* Navigation Buttons */}
              {instagramUrls.length > itemsPerView && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-xl hover:bg-teal-50 transition-all duration-300 hover:scale-110 border-2 border-gray-100"
                    aria-label="Previous"
                  >
                    <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-xl hover:bg-teal-50 transition-all duration-300 hover:scale-110 border-2 border-gray-100"
                    aria-label="Next"
                  >
                    <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  </button>
                </>
              )}

              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl px-2 sm:px-0">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  }}
                >
                  {instagramUrls.map((url, index) => {
                    const postId = getPostId(url);
                    if (!postId) return null;

                    return (
                      <div
                        key={`${postId}-${index}`}
                        className="flex-shrink-0 px-2 sm:px-3"
                        style={{ width: `${100 / itemsPerView}%` }}
                      >
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
                          <blockquote
                            className="instagram-media"
                            data-instgrm-permalink={url}
                            data-instgrm-version="14"
                            style={{
                              background: '#FFF',
                              border: 0,
                              borderRadius: '12px',
                              margin: 0,
                              maxWidth: '100%',
                              minWidth: '100%',
                              padding: 0,
                              width: '100%',
                            }}
                          >
                            <div style={{ padding: '16px' }}>
                              <a
                                href={url}
                                style={{
                                  background: '#FFFFFF',
                                  lineHeight: 0,
                                  padding: '0 0',
                                  textAlign: 'center',
                                  textDecoration: 'none',
                                  width: '100%',
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                  <div
                                    style={{
                                      backgroundColor: '#F4F4F4',
                                      borderRadius: '50%',
                                      flexGrow: 0,
                                      height: 40,
                                      marginRight: 14,
                                      width: 40,
                                    }}
                                  ></div>
                                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                    <div
                                      style={{
                                        backgroundColor: '#F4F4F4',
                                        borderRadius: '4px',
                                        flexGrow: 0,
                                        height: 14,
                                        marginBottom: 6,
                                        width: 100,
                                      }}
                                    ></div>
                                    <div
                                      style={{
                                        backgroundColor: '#F4F4F4',
                                        borderRadius: '4px',
                                        flexGrow: 0,
                                        height: 14,
                                        width: 60,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div style={{ padding: '19% 0' }}></div>
                                <div style={{ display: 'block', height: 50, margin: '0 auto 12px', width: 50 }}>
                                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                        <g>
                                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,53.419 C541,50.232 543.232,48 546.419,48 L561.419,48 C564.606,48 566.838,50.232 566.838,53.419 L566.838,72.419 C566.838,75.606 564.606,77.838 561.419,77.838 L546.419,77.838 C543.232,77.838 541,75.606 541,72.419 L541,53.419 L541,53.419 Z M561.419,20.419 L546.419,20.419 C540.232,20.419 535.148,25.503 535.148,31.689 L535.148,72.419 C535.148,78.605 540.232,83.689 546.419,83.689 L561.419,83.689 C567.606,83.689 572.69,78.605 572.69,72.419 L572.69,31.689 C572.69,25.503 567.606,20.419 561.419,20.419 L561.419,20.419 Z M561.419,20.419 L546.419,20.419 C540.232,20.419 535.148,25.503 535.148,31.689 L535.148,72.419 C535.148,78.605 540.232,83.689 546.419,83.689 L561.419,83.689 C567.606,83.689 572.69,78.605 572.69,72.419 L572.69,31.689 C572.69,25.503 567.606,20.419 561.419,20.419 L561.419,20.419 Z"></path>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <p style={{ margin: '8px 0 0 0', padding: '0 4px' }}>
                                  <a
                                    href={url}
                                    style={{
                                      color: '#000',
                                      fontFamily: 'Arial,sans-serif',
                                      fontSize: '14px',
                                      fontStyle: 'normal',
                                      fontWeight: 550,
                                      lineHeight: '18px',
                                      textDecoration: 'none',
                                      wordWrap: 'break-word',
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View this post on Instagram
                                  </a>
                                </p>
                              </a>
                            </div>
                          </blockquote>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dots Indicator */}
              {instagramUrls.length > itemsPerView && (
                <div className="flex justify-center space-x-2 mt-8">
                  {Array.from({ length: Math.ceil(instagramUrls.length / itemsPerView) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index * itemsPerView)}
                      className={`rounded-full transition-all duration-300 ${
                        Math.floor(currentIndex / itemsPerView) === index
                          ? 'bg-teal-600 w-8 h-3'
                          : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No Instagram posts available at the moment.</p>
            </div>
          )}
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-3 text-sm">
              Follow us on Instagram to see more of our work, patient transformations, and dental care tips
            </p>
            <a
              href="https://www.instagram.com/dr_padmavathisdental/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-teal-600 hover:text-teal-700 font-medium transition-colors text-sm"
            >
              <span>Visit our Instagram profile</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add TypeScript declaration for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
