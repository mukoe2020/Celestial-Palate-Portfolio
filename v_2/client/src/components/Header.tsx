import React, { useState, useEffect } from 'react';
import { useLocation } from '@/contexts/LocationContext';
import { locations, Location } from '@/data/menuData';

interface HeaderProps {
  onMenuClick: () => void;
  onReserveClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onReserveClick }) => {
  const { selectedLocation, setSelectedLocation } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="group">
          <span className="font-display text-2xl tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
            Celestial Palate
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Location Selector */}
          <div className="flex items-center gap-6 border-r border-border/50 pr-8">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`font-body text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                  selectedLocation === loc.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {loc.country}
              </button>
            ))}
          </div>

          {/* Nav Links */}
          <button
            onClick={onMenuClick}
            className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            Menu
          </button>
          <button
            onClick={onReserveClick}
            className="border border-primary/50 px-6 py-2 font-body text-xs uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Reserve
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full glass-dark transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          {/* Location Selector */}
          <div className="flex flex-wrap gap-4 border-b border-border/50 pb-4">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  setSelectedLocation(loc.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`font-body text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                  selectedLocation === loc.id
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {loc.country}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              onMenuClick();
              setIsMobileMenuOpen(false);
            }}
            className="py-2 text-left font-body text-sm uppercase tracking-[0.15em] text-foreground"
          >
            Menu
          </button>
          <button
            onClick={() => {
              onReserveClick();
              setIsMobileMenuOpen(false);
            }}
            className="py-2 text-left font-body text-sm uppercase tracking-[0.15em] text-primary"
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
