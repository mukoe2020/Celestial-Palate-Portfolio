import React from 'react';
import bobotieImg from '@/assets/dish-bobotie.jpg';
import burrataImg from '@/assets/dish-burrata.jpg';
import wagyuImg from '@/assets/dish-wagyu.jpg';

const dishes = [
  {
    id: 'south-africa',
    name: 'Bobotie',
    location: 'Cape Town',
    description: 'Traditional South African spiced meat dish with egg-based topping',
    image: bobotieImg,
  },
  {
    id: 'italy',
    name: 'Burrata di Puglia',
    location: 'Florence',
    description: 'Fresh Italian burrata with vine tomatoes and basil',
    image: burrataImg,
  },
  {
    id: 'japan',
    name: 'Wagyu Tataki',
    location: 'Tokyo',
    description: 'Premium seared wagyu beef with ponzu and microgreens',
    image: wagyuImg,
  },
];

const FeaturedDishes: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-accent text-accent text-sm sm:text-base tracking-widest uppercase">
            Culinary Masterpieces
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3">
            Signature Dishes
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A taste of excellence from each of our three world-renowned locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={`${dish.name} - ${dish.location}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <span className="font-accent text-accent text-xs tracking-widest uppercase">
                  {dish.location}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-foreground mt-1">
                  {dish.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm mt-2">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
