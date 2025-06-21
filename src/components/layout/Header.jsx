// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Search } from 'lucide-react';

const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

const StyledButton = ({ onClick, className = "", imageSrc, alt, width = "120", height = "44" }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-all duration-300 hover:scale-105 hover:opacity-90 ${className}`}
    >
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
      />
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['ROOMS', 'WELLNESS', 'GASTRO', 'HOTEL', 'EVENTS', 'CONTACT'];

  return (
    <header
      className={`w-full transition-all duration-300 ${isScrolled
        ? 'backdrop-blur-md shadow-lg'
        : 'backdrop-blur-sm'
        } border-b border-white/10`}
    >
      {/* Desktop Header */}
      <div className="hidden md:block border-b border-white/10">
        <Container>
          <div className="flex items-center justify-between py-3">
            <StyledButton
              onClick={toggleMenu}
              imageSrc="/assets/menu/Menu.png"
              alt="Menu Button"
              width="112"
              height="54"
              className="group"
            />
            <div className="text-white text-center font-medium w-[67px] h-[50px] flex items-center justify-center" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500', lineHeight: '50px', letterSpacing: '4px' }}>
              2 0 2 2
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-[74px] h-[74px] rounded-full overflow-hidden flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="/assets/menu/logo.png"
                  alt="Hotel Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex items-center w-[82px] h-[16px]" style={{ gap: '6px' }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-white fill-current hover:scale-110 transition-transform cursor-pointer"
                />
              ))}
            </div>
            <StyledButton
              imageSrc="/assets/menu/Booking.png"
              alt="Booking Button"
              width="130"
              height="54"
              className="group"
            />
          </div>
        </Container>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        {/* Top section with year, logo, and stars centered */}
        <div className="flex items-center justify-center px-4 py-4 border-b border-white/10">
          <div className="flex items-center space-x-6">
            <div className="text-white text-xs font-medium tracking-[4px]" style={{ fontFamily: 'Poppins' }}>
              2022
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-white/30">
              <img
                src="/assets/menu/logo.png"
                alt="Hotel Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-white fill-current"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Bar */}
        <div className={`transition-all duration-300 ${isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-sm'} border-t border-white/20`}>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <Menu size={18} className="text-white" />
              <span className="text-white text-base font-medium">Menu</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-200 transition-colors">
                <Search size={18} />
              </button>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <Container>
          <div className="flex items-center justify-center space-x-8 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gray-200 text-sm font-medium tracking-wider transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Sidebar (Blur Only, No BG Color) */}
      {isMenuOpen && (
        <div className="relative  inset-0 z-30 md:hidden">
          {/* Backdrop with heavy blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[10px]"
            onClick={toggleMenu}
          ></div>

          {/* Transparent Sidebar with blur */}
          <div className="absolute top-0 right-0  h-fit max-h-[270px] w-full   backdrop-blur-[12px] bg-white/5 rounded-bl-2xl shadow-2xl p-4 transition-transform duration-300 ease-in-out transform translate-x-0 border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white hover:text-blue-300 transition-colors border-b border-white/10 pb-1"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;