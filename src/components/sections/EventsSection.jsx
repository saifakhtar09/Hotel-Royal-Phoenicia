import React, { useState, useEffect, useRef } from 'react';

const EventsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollTimeout = useRef(null);

  const slides = [
    {
      id: 1,
      bgImage: '/assets/hotel/image.png',
      leftText: 'Corporate',
      rightText: 'Events',
      cardTitle: 'For companies',
      cardDescription:
        'We specialize in corporate events that inspire teams and strengthen bonds. From elegant banquets and award ceremonies to team-building activities, we create experiences that elevate every professional gathering.',
      cardIcon: 'C',
    },
    {
      id: 2,
      bgImage: '/assets/hotel/image.png',
      leftText: 'Family',
      rightText: 'Gatherings',
      cardTitle: 'Family gatherings',
      cardDescription:
        "We know how much your event means to you—be it a jubilee, anniversary, or wedding, we're here to make every detail count with elegance, care, and unforgettable experiences tailored just for you.",
      cardIcon: 'F',
    },
    {
      id: 3,
      bgImage: '/assets/hotel/image.png',
      leftText: 'Social',
      rightText: 'Celebrations',
      cardTitle: 'Special occasions',
      cardDescription:
        'From intimate gatherings to grand celebrations, we craft memorable social events that bring people together. Every detail is thoughtfully planned to create moments that will be cherished forever.',
      cardIcon: 'S',
    },
  ];

  const handleScroll = (e) => {
    e.preventDefault();
    if (isTransitioning || scrollTimeout.current) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    triggerSlide(direction);

    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 800);
  };

  const triggerSlide = (direction) => {
    setIsTransitioning(true);
    setCardVisible(false);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (isTransitioning) return;
    if (e.key === 'ArrowRight') triggerSlide(1);
    else if (e.key === 'ArrowLeft') triggerSlide(-1);
  };

  const handleCardClick = () => {
    if (!isTransitioning) triggerSlide(1);
  };

  useEffect(() => {
    setCardVisible(false);
    const timer = setTimeout(() => setCardVisible(true), 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div
      className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-100 to-blue-200"
      onWheel={handleScroll}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img
          src={slides[currentSlide].bgImage}
          alt="Events Background"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Scrolling Text Layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
        <div className="flex items-center whitespace-nowrap">
          <div className="flex items-center animate-slide-right-to-left">
            {[...slides, ...slides].map((slide, index) => (
              <div key={`${slide.id}-${index}`} className="flex items-center mx-16">
                <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-light text-white mr-8">
                  {slide.leftText}
                </h1>
                <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-light text-white">
                  {slide.rightText}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-right-to-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide-right-to-left {
          animation: slide-right-to-left 20s linear infinite;
        }
      `}</style>

      {/* Card Layer */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <div
            className={`transform transition-all duration-700 ease-out ${cardVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-90'
              }`}
          >
            <div
              className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md mx-auto cursor-pointer hover:shadow-3xl hover:scale-105 transition-all duration-300"
              onClick={handleCardClick}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-xl">
                    {slides[currentSlide].cardIcon}
                  </span>
                </div>
                <h2 className="text-2xl font-light text-gray-800 mb-4">
                  {slides[currentSlide].cardTitle}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {slides[currentSlide].cardDescription}
                </p>
                <button className="border border-gray-400 text-gray-700 px-8 py-2 rounded-full hover:bg-gray-50 transition-colors duration-300">
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => !isTransitioning && setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
