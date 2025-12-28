import React from 'react';
import { useLocation } from '@/contexts/LocationContext';
import { Location, locations } from '@/data/menuData';
import heroSouthAfrica from '@/assets/hero-south-africa.jpg';
import heroJapan from '@/assets/hero-japan.jpg';
import heroItaly from '@/assets/hero-italy.jpg';

const locationImages: Record<Location, string> = {
  'south-africa': heroSouthAfrica,
  'japan': heroJapan,
  'italy': heroItaly,
};

interface LocationCardsProps {
  onLocationSelect: (location: Location) => void;
}

const LocationCards: React.FC<LocationCardsProps> = ({ onLocationSelect }) => {
  const { selectedLocation, setSelectedLocation } = useLocation();

  const handleSelect = (location: Location) => {
    setSelectedLocation(location);
    onLocationSelect(location);
  };

  return (
    <section className="bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-[0.3em] text-primary">
            Our Locations
          </span>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl elegant-underline inline-block">
            Three Destinations, One Vision
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
            Each Celestial Palate location offers a unique culinary journey, 
            celebrating local traditions while maintaining our unwavering commitment to excellence.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {locations.map((location, index) => (
            <div
              key={location.id}
              onClick={() => handleSelect(location.id)}
              className={`group relative cursor-pointer overflow-hidden transition-all duration-500 ${
                selectedLocation === location.id ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={locationImages[location.id]}
                  alt={`${location.name}, ${location.country}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <span className="mb-2 inline-block font-body text-xs uppercase tracking-[0.2em] text-primary">
                      {location.country}
                    </span>
                    <h3 className="mb-3 font-display text-3xl text-foreground">
                      {location.name}
                    </h3>
                    <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {location.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {location.cuisineTypes.map((cuisine) => (
                        <span
                          key={cuisine}
                          className="border border-primary/30 px-3 py-1 font-body text-xs uppercase tracking-wider text-primary/80"
                        >
                          {cuisine}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Selected Indicator */}
                {selectedLocation === location.id && (
                  <div className="absolute right-4 top-4">
                    <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationCards;
