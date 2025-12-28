import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Location, locations, menus, MenuItem, LocationInfo } from '@/data/menuData';

interface LocationContextType {
  selectedLocation: Location;
  setSelectedLocation: (location: Location) => void;
  locationInfo: LocationInfo;
  menu: MenuItem[];
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location>('south-africa');

  const locationInfo = locations.find(loc => loc.id === selectedLocation)!;
  const menu = menus[selectedLocation];

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation, locationInfo, menu }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
