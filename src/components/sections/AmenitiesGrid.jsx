import React, { useState } from 'react';

const Amenities = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: 'fitness',
      title: 'Fitness',
      subtitle: 'Center',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgColor: 'from-blue-600/80 to-purple-700/80',
    },
    {
      id: 'dining',
      title: 'On-Site',
      subtitle: 'Dining',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgColor: 'from-orange-500/80 to-red-600/80',
    },
    {
      id: 'wellness',
      title: 'Wellness Center',
      subtitle: '& Spa',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgColor: 'from-gray-800/80 to-black/80',
    },
  ];

  return (
    <div className="w-full h-[100dvh] flex">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`relative flex-1 cursor-pointer transition-all duration-700 ease-in-out overflow-hidden group ${hoveredSection === section.id
              ? 'flex-[1.5] brightness-110'
              : hoveredSection
                ? 'flex-[0.8] brightness-75'
                : 'flex-1'
            }`}
          onMouseEnter={() => setHoveredSection(section.id)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${section.image})` }}
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${section.bgColor} transition-opacity duration-500 ${hoveredSection === section.id ? 'opacity-60' : 'opacity-70'
              }`}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-8">
            <div
              className={`transform transition-all duration-500 ${hoveredSection === section.id
                  ? 'translate-y-0 scale-110'
                  : hoveredSection
                    ? 'translate-y-2 scale-95'
                    : 'translate-y-0'
                }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-2 tracking-wide">
                {section.title}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
                {section.subtitle}
              </h3>
            </div>
          </div>

          {/* Dining Button Toggle Image */}
          {section.id === 'dining' && (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <img
                src={
                  hoveredSection === 'dining'
                    ? '/assets/Grid/arow.png'
                    : '/assets/Grid/spa btn.png'
                }
                alt="Explore Dining"
                className="w-[150px] h-auto transition-all duration-300 ease-in-out"
              />
            </div>
          )}

          {/* Border */}
          <div
            className={`absolute inset-0 border-2 border-white/20 transition-all duration-500 ${hoveredSection === section.id
                ? 'border-white/40 shadow-2xl'
                : 'border-transparent'
              }`}
          />

          {/* Light overlay */}
          <div
            className={`absolute inset-0 bg-white/5 transition-opacity duration-300 ${hoveredSection === section.id ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Amenities;
