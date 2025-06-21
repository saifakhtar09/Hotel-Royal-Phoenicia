import React, { useEffect, useState } from 'react';

// Mock Button component
const Button = ({ children, size = "md", variant = "default", className = "" }) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300";
  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3";
  const variantClasses = variant === "outline"
    ? "border-2 border-white text-white hover:bg-white hover:text-black"
    : "bg-white text-black hover:bg-gray-100";

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

// Mock Container component
const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bottom-10 ${className}`}>
      {children}
    </div>
  );
};

const images = ['/assets/img.png', '/assets/imagee.png'];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background Images for entire page - Cover from top including header */}
      <div className="absolute inset-0" style={{ zIndex: -10 }}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url('${img}')`
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/30 to-black/40" />
      </div>

      <section className="relative min-h-screen overflow-hidden scroll-smooth">
        {/* Decorative Effects */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse z-10"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 flex items-center justify-center min-h-screen">
          <Container>
            <div className="text-center text-white px-6 max-w-5xl mx-auto">
              <h1 className="mb-6 animate-fade-in-up w-full max-w-[600px] mx-auto" style={{ fontFamily: 'Crimson Text', fontWeight: '600', fontSize: 'clamp(48px, 8vw, 126.72px)', lineHeight: '0.8', letterSpacing: '0.06em', textAlign: 'center' }}>
                Hotel
                <span className="block text-3xl md:text-5xl lg:text-6xl tracking-widest mt-2" style={{ fontFamily: 'Crimson Text' }}>
                  Royal Phoenicia
                </span>
              </h1>

              <p className="mb-12 text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300" style={{ fontFamily: 'Poppins' }}>
                Your favourite place. Our family story.
              </p>

              <div className="animate-fade-in-up delay-500">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button size="lg" className="hover:scale-105 transform shadow-xl hover:shadow-2xl">
                    Booking
                  </Button>
                  <Button variant="outline" size="lg" className="hidden sm:block hover:scale-105 transform">
                    Explore Rooms
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors cursor-pointer">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        <style>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .delay-300 {
            animation-delay: 0.3s;
          }
          
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;