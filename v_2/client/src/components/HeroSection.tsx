import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '@/contexts/LocationContext';
import { Location, locations } from '@/data/menuData';
import heroSouthAfrica from '@/assets/hero-south-africa.jpg';
import heroJapan from '@/assets/hero-japan.jpg';
import heroItaly from '@/assets/hero-italy.jpg';

const heroImages: Record<Location, string> = {
  'south-africa': heroSouthAfrica,
  'japan': heroJapan,
  'italy': heroItaly,
};

interface HeroSectionProps {
  onExploreClick: () => void;
  onReserveClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onReserveClick }) => {
  const { selectedLocation, setSelectedLocation, locationInfo } = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedLocation, setDisplayedLocation] = useState(selectedLocation);
  const [previousLocation, setPreviousLocation] = useState<Location | null>(null);
  const animationKey = useRef(0);

  useEffect(() => {
    if (selectedLocation !== displayedLocation) {
      setPreviousLocation(displayedLocation);
      setIsTransitioning(true);
      animationKey.current += 1;
      
      const timeout = setTimeout(() => {
        setDisplayedLocation(selectedLocation);
        setIsTransitioning(false);
        setPreviousLocation(null);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [selectedLocation, displayedLocation]);

  const handleLocationChange = (location: Location) => {
    if (location !== selectedLocation) {
      setSelectedLocation(location);
    }
  };

  const getImageClasses = (loc: string) => {
    const isDisplayed = displayedLocation === loc;
    const isPrevious = previousLocation === loc;
    
    if (isTransitioning) {
      if (loc === selectedLocation) {
        return 'opacity-100 animate-hero-slide-in';
      }
      if (isPrevious) {
        return 'opacity-100 animate-hero-slide-out';
      }
      return 'opacity-0';
    }
    
    return isDisplayed ? 'opacity-100 animate-hero-zoom' : 'opacity-0';
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {Object.entries(heroImages).map(([loc, img]) => (
        <div
          key={`${loc}-${animationKey.current}`}
          className={`absolute inset-0 transition-none ${getImageClasses(loc)}`}
        >
          <img
            src={img}
            alt={`${loc} restaurant`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/60 via-charcoal-deep/40 to-charcoal-deep" />

      {/* Content */}
      <div className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {/* Logo / Brand */}
        <div className="mb-6" style={{ animation: 'fadeUp 0.8s ease-out 0.2s forwards', opacity: 0 }}>
          <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="font-body text-sm uppercase tracking-[0.4em] text-primary">
            Est. 2019
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-4 font-display text-5xl font-light tracking-wide text-foreground md:text-7xl lg:text-8xl" style={{ animation: 'fadeUp 0.8s ease-out 0.4s forwards', opacity: 0 }}>
          Celestial Palate
        </h1>

        {/* Tagline */}
        <p className="mb-2 font-display text-xl italic text-primary md:text-2xl" style={{ animation: 'fadeUp 0.8s ease-out 0.6s forwards', opacity: 0 }}>
          {locationInfo.tagline}
        </p>

        {/* Location Badge */}
        <p className="mb-8 font-body text-sm uppercase tracking-[0.3em] text-muted-foreground" style={{ animation: 'fadeUp 0.8s ease-out 0.7s forwards', opacity: 0 }}>
          {locationInfo.name}, {locationInfo.country}
        </p>

        {/* Location Selector */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8" style={{ animation: 'fadeUp 0.8s ease-out 0.8s forwards', opacity: 0 }}>
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => handleLocationChange(loc.id)}
              className={`group relative px-2 py-1 font-body text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 ${
                selectedLocation === loc.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {loc.country}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  selectedLocation === loc.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row" style={{ animation: 'fadeUp 0.8s ease-out 1s forwards', opacity: 0 }}>
          <button
            onClick={onExploreClick}
            className="group relative overflow-hidden border border-primary bg-transparent px-10 py-4 font-body text-sm uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:text-primary-foreground"
          >
            <span className="absolute inset-0 bg-primary transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
            <span className="relative">Explore Menu</span>
          </button>
          <button
            onClick={onReserveClick}
            className="group relative overflow-hidden border border-primary/50 bg-primary/10 px-10 py-4 font-body text-sm uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:border-primary hover:text-primary"
          >
            <span className="relative">Reserve a Table</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
