import React from 'react';

const RestaurantSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="text-center py-8 sm:py-12 lg:py-16 px-4">
        <div className="relative">
          <div className="relative inline-block px-4 sm:px-6 lg:px-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px] 
                         leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[80px] 
                         font-[400] text-gray-800 font-serif"
              style={{
                fontFamily: 'Crimson Text',
                letterSpacing: '0.02em',
                verticalAlign: 'middle',
              }}
            >
              Exceptional gastronomy <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>served in elegant spaces.
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 pb-8 sm:pb-12 lg:pb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Hidden Scrollbar Image Gallery */}
            <div className="relative bg-gray-50 order-1 md:order-none">
              <div
                className="overflow-y-scroll h-full min-h-[250px] sm:min-h-[300px] md:min-h-[300px] 
                           max-h-[300px] sm:max-h-[350px] md:max-h-[400px] snap-y snap-mandatory"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className="snap-start w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[300px] 
                               max-h-[300px] sm:max-h-[350px] md:max-h-[400px] flex items-center justify-center">
                  <img
                    src="/assets/hotel/imae.png"
                    alt="Our Services"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="snap-start w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[300px] 
                               max-h-[300px] sm:max-h-[350px] md:max-h-[400px] flex items-center justify-center">
                  <img
                    src="/assets/hotel/img.png"
                    alt="Hotel Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="snap-start w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[300px] 
                               max-h-[300px] sm:max-h-[350px] md:max-h-[400px] flex items-center justify-center">
                  <img
                    src="/assets/servicesimg/image.png"
                    alt="Hotel Amenities"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
                <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
                <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
              </div>
            </div>

            {/* About Us Section */}
            <div className="p-4 sm:p-6 lg:p-8 order-2 md:order-none">
              <h2 className="text-xl sm:text-2xl font-light text-gray-800 mb-3 sm:mb-4 
                           border-b border-gray-200 pb-2">
                About Us
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Grand Dining is a culinary oasis committed to serving only the finest
                cuisine and providing exceptional hospitality to our valued guests.
                Our carefully curated menu features seasonal ingredients sourced from
                local farms and artisanal producers, ensuring every dish reflects our
                commitment to excellence. Our talented chefs bring years of experience
                from renowned establishments, crafting innovative dishes that honor
                traditional techniques while embracing contemporary flavors. We believe
                that dining is more than just a meal—it's an experience that engages
                all the senses. From our elegant dining rooms to our attentive service
                staff, every detail is designed to create memorable moments for our
                guests. Whether you're celebrating a special occasion or simply
                enjoying an evening out, we are committed to providing an
                extraordinary culinary journey that exceeds your expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Divider Line */}
        <div className="w-full flex justify-center mb-8 sm:mb-12">
          <div
            className="transition-all duration-300 w-full max-w-full sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl"
            style={{
              borderTop: '0.8px solid #777777',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderTop = '0.8px solid #3B82F6';
              e.currentTarget.style.boxShadow = '0 0 8px #3B82F6';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderTop = '0.8px solid #777777';
              e.currentTarget.style.boxShadow = 'none';
            }}
          ></div>
        </div>

        {/* Three Service Sections - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Restaurant */}
          <div className="text-center border border-transparent hover:border-gray-400 
                         transition-all duration-300 p-4 sm:p-6 rounded-md">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 
                           rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-light text-gray-800 mb-2">Restaurant</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Exceptional fine dining experience crafted with passion. Our seasonal
              menu celebrates local ingredients prepared with innovative techniques
              and inspired by culinary traditions.
            </p>
          </div>

          {/* Pool */}
          <div className="text-center border border-transparent hover:border-gray-400 
                         transition-all duration-300 p-4 sm:p-6 rounded-md">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 
                           rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-light text-gray-800 mb-2">POOL</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Elegant poolside dining and refreshments in a tranquil setting.
              Perfect for casual lunches, light bites, and refreshing beverages
              while enjoying our beautiful outdoor spaces.
            </p>
          </div>

          {/* Room */}
          <div className="text-center border border-transparent hover:border-gray-400 
                         transition-all duration-300 p-4 sm:p-6 rounded-md 
                         sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 sm:max-w-md lg:max-w-none">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 
                           rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-light text-gray-800 mb-2">ROOM</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Luxury accommodations featuring modern amenities and elegant design.
              Each room offers a refined retreat with personalized service and
              attention to every detail for your comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSection;