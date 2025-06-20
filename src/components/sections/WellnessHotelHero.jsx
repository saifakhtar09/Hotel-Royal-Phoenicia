import React from 'react';

const WellnessHotelHero = () => {
  return (
    <section className="w-full bg-stone-50 py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-800 leading-relaxed">
          <span className="font-semibold">Wellness & Pool Hotel</span>
          <br />
          <span className="font-semibold">RoyalPhoenicia</span> means enjoying every moment.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-stone-600">
          Relax. Find inspiration. Be fascinated.
        </p>

        {/* CTA Button */}
        <div>
          <button className="inline-flex items-center px-8 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-full hover:bg-stone-100 transition duration-200">
            Explore Hotel
          </button>
        </div>
      </div>
    </section>
  );
};

export default WellnessHotelHero;
