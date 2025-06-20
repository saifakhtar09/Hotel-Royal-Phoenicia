import React from 'react';
import Button from '../ui/Button';
import Section from '../ui/Section';

const WellnessSection = () => {
  const features = [
    'Olympic-sized swimming pool',
    'Full-service spa treatments',
    'Modern fitness facilities',
    'Wellness consultation services'
  ];

  const images = [
    {
      url: 'https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Spa Treatment',
      className: 'h-40'
    },
    {
      url: 'https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      alt: 'Swimming Pool',
      className: 'h-56'
    },
    {
      url: 'https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      alt: 'Wellness Center',
      className: 'h-56'
    },
    {
      url: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Fitness Center',
      className: 'h-40'
    }
  ];

  return (
    <Section id="wellness" background="gradient">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Content */}
        <div className="space-y-6 lg:space-y-8">
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
            Famous Pools Health
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
            Wellness & Spa
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
            Indulge in our world-renowned spa facilities featuring state-of-the-art wellness amenities. Our famous pools and health center provide the perfect sanctuary for relaxation and rejuvenation.
          </p>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <Button className="hover:scale-105 transform shadow-lg">
            Book Spa Session
          </Button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            {images.slice(0, 2).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`w-full ${image.className} object-cover transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          <div className="space-y-4 pt-8">
            {images.slice(2, 4).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`w-full ${image.className} object-cover transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WellnessSection;