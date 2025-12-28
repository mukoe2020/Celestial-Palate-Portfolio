import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-background py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block font-body text-sm uppercase tracking-[0.3em] text-primary">
              Our Story
            </span>
            <h2 className="mb-6 font-display text-4xl font-light text-foreground md:text-5xl">
              A Journey Through<br />
              <span className="text-primary">Culinary Excellence</span>
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Founded in 2019, Celestial Palate emerged from a singular vision: 
                to create dining experiences that transcend borders while honoring 
                the rich culinary traditions of each location we call home.
              </p>
              <p>
                Our three establishments—nestled in Cape Town, Tokyo, and Florence—
                each tell a unique story through their cuisine, celebrating local 
                ingredients and time-honored techniques with contemporary artistry.
              </p>
              <p>
                Every dish is a testament to our commitment to excellence, crafted 
                by world-renowned chefs who share our passion for creating memorable 
                moments around the table.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <span className="block font-display text-4xl text-primary">3</span>
                <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Locations
                </span>
              </div>
              <div>
                <span className="block font-display text-4xl text-primary">15+</span>
                <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Michelin Stars
                </span>
              </div>
              <div>
                <span className="block font-display text-4xl text-primary">50+</span>
                <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Master Chefs
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto relative">
              {/* Decorative frame */}
              <div className="absolute inset-8 border border-primary/30" />
              <div className="absolute inset-4 border border-primary/20" />
              <div className="absolute inset-0 border border-primary/10" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <span className="font-display text-6xl text-primary">CP</span>
                  <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-primary to-transparent" />
              <div className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
              <div className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b from-primary to-transparent" />
              <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-primary to-transparent" />
              <div className="absolute bottom-0 left-0 h-16 w-px bg-gradient-to-t from-primary to-transparent" />
              <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
              <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-primary to-transparent" />
              <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-primary to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
