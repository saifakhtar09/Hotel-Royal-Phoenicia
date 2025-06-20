import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Dumbbell,
  Waves
} from 'lucide-react';

// UI Components
const Card = ({ children, hover = false, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);

Card.Content = ({ children, className = "" }) => (
  <div className={`p-8 ${className}`}>
    {children}
  </div>
);

const Section = ({ children, background = "white" }) => (
  <section className={`py-20 px-4 ${background === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const Hotel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const slides = [
    {
      image: '/assets/hotel/imag.png',
      amenities: [
        'Favorite hotel',
        'Business and Event Spaces',
        'Diverse Dining Options',
        'Multiple Swimming Pools',
        'Family-Friendly Amenities'
      ]
    },
    {
      image: '/assets/hotel/image.png',
      amenities: [
        'Oceanfront Views',
        'Premium Spa Services',
        'Gourmet Restaurant',
        'Infinity Pool & Bar',
        'Concierge Services'
      ]
    },
    {
      image: '/assets/hotel/img.png',
      amenities: [
        'Modern Design',
        'Conference Facilities',
        'Rooftop Lounge',
        'Fitness & Wellness',
        'Personalized Service'
      ]
    }
  ];

  const amenities = [
    { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet throughout the hotel' },
    { icon: Car, title: 'Valet Parking', description: 'Complimentary valet parking service' },
    { icon: Coffee, title: 'Room Service', description: '24/7 room service available' },
    { icon: Utensils, title: 'Fine Dining', description: 'Multiple award-winning restaurants' },
    { icon: Dumbbell, title: 'Fitness Center', description: 'State-of-the-art gym facilities' },
    { icon: Waves, title: 'Spa & Wellness', description: 'Luxurious spa treatments' }
  ];

  const stopAutoplay = () => {
    setIsAutoPlaying(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    stopAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    stopAutoplay();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    stopAutoplay();
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  return (
    <div className="w-full">
      {/* Hero Slider Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Images with Fade & Zoom */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                loading="lazy"
                src={slide.image}
                alt={`Hotel slide ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-5"></div>

        {/* White Card Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 max-w-md mx-4 text-center transform transition-all duration-700">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}
                style={{ visibility: index === currentSlide ? 'visible' : 'hidden' }}
              >
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-8">
                    Luxury Hotel Experience
                  </h1>
                  {slide.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="text-gray-700 text-lg font-medium leading-relaxed tracking-wide"
                      style={{
                        animationDelay: `${idx * 150}ms`,
                        animation: index === currentSlide ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125 shadow-lg' : 'bg-white/60 hover:bg-white/80'}`}
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>

      {/* Amenities Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">
            Hotel Amenities
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-gray-900 mb-6">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto">
            Experience unparalleled luxury with our comprehensive range of amenities designed for your comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} hover className="group">
              <Card.Content className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110 transform">
                  <amenity.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Hotel;
