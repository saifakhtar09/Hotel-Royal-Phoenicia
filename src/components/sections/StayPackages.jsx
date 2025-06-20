import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const StayPackages = () => {
  const packages = [
    {
      id: 1,
      image: '/assets/staypck/h1.png',
      alt: 'Romantic couple dining in luxury hotel',
      season: 'All season',
      title: 'Royal Weekend Escape Package',
      subtitle: 'From BHD 250 | Per person / 3 Night',
    },
    {
      id: 2,
      image: '/assets/staypck/h2.png',
      alt: 'Family Stay',
      season: 'All season',
      title: 'Family Fun Staycation',
      subtitle: 'From BHD 300 | Family / 4 Nights',
    },
    {
      id: 3,
      image: '/assets/staypck/image.png',
      alt: 'Spa and wellness facilities',
      season: 'All season',
      title: 'Family Fun Staycation',
      subtitle: 'From BHD 150 / 4 person / 2 Night',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-100 to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wide">
            Stay Packages
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative group overflow-hidden rounded-xl border border-white/20 shadow-lg h-[550px]"
            >
              {/* Background Image */}
              <img
                src={pkg.image}
                alt={pkg.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                {/* Season */}
                <p className="absolute top-12 text-sm uppercase tracking-widest">
                  {pkg.season}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-light mb-2 max-w-xs">{pkg.title}</h3>
                <p className="text-sm text-white/90 mb-10 max-w-xs">{pkg.subtitle}</p>

                {/* Bottom Buttons */}
                <div className="absolute bottom-10 flex items-center gap-4">
                  <button className="px-6 py-2 border border-white text-white rounded-full text-sm font-light hover:bg-white hover:text-black transition">
                    MORE
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                    <FaBriefcase size={16} />
                  </button>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-white/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayPackages;
