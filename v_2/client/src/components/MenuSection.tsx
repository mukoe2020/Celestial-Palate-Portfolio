import React, { useState } from 'react';
import { useLocation } from '@/contexts/LocationContext';
import { MenuItem } from '@/data/menuData';

type Category = 'all' | 'starter' | 'main' | 'dessert';

const MenuSection: React.FC = () => {
  const { menu, locationInfo } = useLocation();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Courses' },
    { id: 'starter', label: 'Starters' },
    { id: 'main', label: 'Main Courses' },
    { id: 'dessert', label: 'Desserts' },
  ];

  const filteredMenu = activeCategory === 'all' 
    ? menu 
    : menu.filter(item => item.category === activeCategory);

  const groupedMenu = filteredMenu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const categoryOrder = ['starter', 'main', 'dessert'];

  return (
    <section id="menu" className="bg-card py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-[0.3em] text-primary">
            {locationInfo.name} • {locationInfo.country}
          </span>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl elegant-underline inline-block">
            Our Menu
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
            Each dish is crafted with the finest ingredients, celebrating the culinary heritage of {locationInfo.country}.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4 md:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-3 py-2 font-body text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.label}
              <span
                className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-primary transition-all duration-300 ${
                  activeCategory === category.id ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-16">
          {categoryOrder.map((category) => {
            const items = groupedMenu[category];
            if (!items || items.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="mb-8 text-center font-display text-2xl capitalize text-primary">
                  {category === 'main' ? 'Main Courses' : `${category}s`}
                </h3>
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="group border-b border-border/50 pb-4 sm:pb-6 transition-all duration-300 hover:border-primary/30"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="mb-1 sm:mb-2 flex flex-wrap items-baseline gap-2 sm:gap-3">
                            <h4 className="font-display text-base sm:text-xl text-foreground transition-colors duration-300 group-hover:text-primary">
                              {item.name}
                            </h4>
                            <span className="border border-primary/30 px-1.5 py-0.5 font-body text-[10px] sm:text-xs uppercase tracking-wider text-primary/70 whitespace-nowrap">
                              {item.cuisine}
                            </span>
                          </div>
                          <p className="font-body text-xs sm:text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <div className="shrink-0">
                          <span className="font-display text-lg sm:text-xl text-primary whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Seasonal ingredients • Dietary accommodations available upon request
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
