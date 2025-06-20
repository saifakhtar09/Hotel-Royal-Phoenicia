import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row text-white font-serif min-h-[300px] lg:min-h-[400px]">
      {/* Mobile Layout - Single Column */}
      <div className="lg:hidden bg-[#2c4a66] px-6 py-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <img
            src="/assets/menu/logo.png"
            alt="Logo"
            className="w-16 h-16 rounded-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-16 h-16 rounded-full bg-gray-600 hidden items-center justify-center text-xs">
            ROYAL
          </div>
        </div>

        {/* Hotel Name */}
        <h3 className="mb-4 text-center font-[Crimson_Text] font-semibold text-lg leading-tight">
          Wellness & Pools<br />
          Hotel Royal Phoenicia
        </h3>

        {/* Address */}
        <div className="mb-4 text-center text-gray-300 font-[Poppins] font-medium text-sm leading-relaxed space-y-1">
          <p>Building 128</p>
          <p>Road # 831, Block 338</p>
          <p>Um al Hassam - Manama</p>
          <p>Bahrain</p>
        </div>

        {/* Contact Info */}
        <div className="mb-4 space-y-2 text-center">
          <div className="text-sm text-gray-300">
            +973 1730 7337
          </div>
          <div className="text-sm text-gray-300 break-all">
            info@royalphoeniciahotel.com
          </div>
        </div>

        {/* Contacts Link */}
        <a
          href="#"
          className="text-sm underline hover:text-gray-300 transition mb-6"
        >
          Contacts →
        </a>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-6">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
        </div>


      </div>
      {/* Desktop Layout - Two Columns */}
      <div className="hidden lg:flex lg:flex-row w-full">
        {/* Left Section - Navigation Menu */}
        <div className="bg-[#4a7288] flex-1 px-16 py-12 flex flex-col justify-center">
          <div className="space-y-8 text-left max-w-[280px]">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-white font-serif text-lg">I</span>
                <span className="text-white font-serif text-lg hover:text-gray-300 transition-colors cursor-pointer">Rooms</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white font-serif text-lg">II</span>
                <span className="text-white font-serif text-lg hover:text-gray-300 transition-colors cursor-pointer">Wellness</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white font-serif text-lg">III</span>
                <span className="text-white font-serif text-lg hover:text-gray-300 transition-colors cursor-pointer">Gastro</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white font-serif text-lg">IV</span>
                <span className="text-white font-serif text-lg hover:text-gray-300 transition-colors cursor-pointer">Hotel</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white font-serif text-lg">V</span>
                <span className="text-white font-serif text-lg hover:text-gray-300 transition-colors cursor-pointer">Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - More About Rooms */}
        <div className="bg-[#4a7288] px-12 py-16 flex flex-col justify-center w-[640px]">
          <div className="max-w-[280px] mx-auto">
            <h4 className="mb-8 text-[32px] leading-[40px] tracking-[0.02em] font-light text-white font-serif text-left relative left-[-30px] ">
              More about rooms
            </h4>

            <div className="text-white text-left space-y-4 font-sans font-light">
              <div className="text-[16px] leading-[24px] tracking-[0.01em] hover:text-gray-200 transition-colors cursor-pointer">
                120 comfortable rooms
              </div>
              <div className="text-[16px] leading-[24px] tracking-[0.01em] hover:text-gray-200 transition-colors cursor-pointer">
                Dinings
              </div>
              <div className="text-[16px] leading-[24px] tracking-[0.01em] hover:text-gray-200 transition-colors cursor-pointer">
                Packages
              </div>
              <div className="text-[16px] leading-[24px] tracking-[0.01em] hover:text-gray-200 transition-colors cursor-pointer">
                Pools
              </div>
            </div>
          </div>
        </div>
        {/* Right Section - Hotel Info */}
        <div className="bg-[#2c4a66] px-12 py-12 flex flex-col justify-center items-center text-center w-[640px]">
          {/* Logo */}
          <div className="w-[74px] h-[74px] rounded-full flex items-center justify-center mb-6">
            <img
              src="/assets/menu/logo.png"
              alt="Logo"
              className="w-[74px] h-[74px] rounded-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-[74px] h-[74px] rounded-full bg-gray-600 hidden items-center justify-center text-xs">
              ROYAL
            </div>
          </div>

          {/* Hotel Name */}
          <h3 className="mb-6 text-center font-[Crimson_Text] font-semibold text-[36px] leading-[80px] tracking-[6%]">
            Wellness & Pools<br />
            Hotel Royal Phoenicia
          </h3>

          {/* Address */}
          <div className="mb-4 text-center text-gray-300 font-[Poppins] font-medium text-[16px] leading-[20px] tracking-[6%]">
            <p>Building 128</p>
            <p>Road # 831, Block 338</p>
            <p>Um al Hassam - Manama</p>
            <p>Bahrain</p>
          </div>

          {/* Contact Info */}
          <div className="mb-4 space-y-2">
            <div className="text-sm text-gray-300 flex items-center justify-center mx-auto px-2 py-1 w-[133px] h-[33px] hover:text-white transition-colors cursor-pointer">
              +973 1730 7337
            </div>
            <div className="text-sm text-gray-300 flex items-center justify-center mx-auto px-2 py-1 w-[276px] h-[32px] hover:text-white transition-colors cursor-pointer">
              info@royalphoeniciahotel.com
            </div>
          </div>

          {/* Contacts Link */}
          <a
            href="#"
            className="text-sm underline hover:text-gray-300 transition flex items-center justify-center px-2 py-1 w-[103px] h-[33px] mb-6"
          >
            Contacts →
          </a>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;