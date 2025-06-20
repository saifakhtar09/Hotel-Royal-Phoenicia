import React from 'react';

const HotelServices = () => {
  const services = [
    {
      id: 1,
      title: 'Rooms',
      image: '/assets/servicesimg/image.png',
      alt: 'Luxury hotel room with modern amenities'
    },
    {
      id: 2,
      title: 'Pools',
      image: '/assets/hotel/imag.png',
      alt: 'Beautiful hotel swimming pool with city view'
    },
    {
      id: 3,
      title: 'Dining',
      image: '/assets/servicesimg/image.png',
      alt: 'Elegant hotel dining room setup'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-102"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 lg:h-80">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>

                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-4xl sm:text-5xl font-light tracking-wider transform transition-all duration-500 group-hover:scale-110">
                      {service.title}
                    </h3>
                  </div>


                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 transition-all duration-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accommodation Button */}
        <div className="flex justify-center">
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-light tracking-wide text-sm shadow-sm hover:shadow-md">
            Accommodation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelServices;