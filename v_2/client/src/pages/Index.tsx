import React, { useRef } from 'react';
import { LocationProvider } from '@/contexts/LocationContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LocationCards from '@/components/LocationCards';
import MenuSection from '@/components/MenuSection';
import FeaturedDishes from '@/components/FeaturedDishes';
import ReviewsSection from '@/components/ReviewsSection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';
import { Location } from '@/data/menuData';
import { Helmet } from 'react-helmet-async';

const Index: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const reservationRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReservation = () => {
    reservationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLocationSelect = (location: Location) => {
    setTimeout(scrollToMenu, 300);
  };

  return (
    <LocationProvider>
      <Helmet>
        <title>Celestial Palate | Luxury Fine Dining - South Africa, Japan, Italy</title>
        <meta 
          name="description" 
          content="Experience world-class fine dining at Celestial Palate. Three exclusive locations in Cape Town, Tokyo, and Florence. Reserve your table for an unforgettable culinary journey." 
        />
        <meta name="keywords" content="fine dining, luxury restaurant, Cape Town restaurant, Tokyo restaurant, Florence restaurant, Michelin star, gourmet cuisine" />
        <link rel="canonical" href="https://celestialpalate.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header 
          onMenuClick={scrollToMenu} 
          onReserveClick={scrollToReservation} 
        />
        
        <main>
          <HeroSection 
            onExploreClick={scrollToMenu} 
            onReserveClick={scrollToReservation} 
          />
          
          <AboutSection />
          
          <LocationCards onLocationSelect={handleLocationSelect} />
          
          <div ref={menuRef}>
            <MenuSection />
          </div>
          
          <FeaturedDishes />
          
          <ReviewsSection />
          
          <div ref={reservationRef}>
            <ReservationSection />
          </div>
        </main>
        
        <Footer />
      </div>
    </LocationProvider>
  );
};

export default Index;
