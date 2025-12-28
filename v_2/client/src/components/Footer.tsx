import React from 'react';
import { locations } from '@/data/menuData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-deep py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-display text-2xl text-foreground">
              Celestial Palate
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              A global fine dining experience where tradition meets innovation.
            </p>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <h4 className="mb-6 font-body text-xs uppercase tracking-[0.2em] text-primary">
              Our Locations
            </h4>
            <div className="grid gap-6 sm:grid-cols-3">
              {locations.map((location) => (
                <div key={location.id}>
                  <h5 className="mb-2 font-display text-lg text-foreground">
                    {location.name}
                  </h5>
                  <p className="font-body text-sm text-muted-foreground">
                    {location.country}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-body text-xs uppercase tracking-[0.2em] text-primary">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:reservations@celestialpalate.com"
                className="block font-body text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                reservations@celestialpalate.com
              </a>
              <a
                href="tel:+1234567890"
                className="block font-body text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                +1 234 567 890
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            © {currentYear} Celestial Palate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground transition-colors duration-300 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground transition-colors duration-300 hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
