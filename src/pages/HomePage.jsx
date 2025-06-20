import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import AmenitiesSection from '../components/sections/AmenitiesSection';
import RoomsSection from '../components/sections/RoomsSection';
import WellnessSection from '../components/sections/WellnessSection';
import Footer from '../components/layout/Footer';
import { Hotel } from 'lucide-react';
import HotelServices from '../components/sections/HotelServices';
import StayPackages from '../components/sections/StayPackages';
import AmenitiesGrid from '../components/sections/AmenitiesGrid';
import ElegantResturant from '../components/sections/ElegantResturant';
import EventsSection from '../components/sections/EventsSection';
import WellnessHotelHero from '../components/sections/WellnessHotelHero';


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WellnessHotelHero />
      <AmenitiesSection />
      <HotelServices />
      <StayPackages />
      <AmenitiesGrid />
      <ElegantResturant />
      <EventsSection />
      <RoomsSection />
      <WellnessSection />
      <Footer />
    </div>
  );
};

export default HomePage;