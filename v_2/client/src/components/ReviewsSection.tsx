import React from 'react';
import { useLocation } from '@/contexts/LocationContext';
import { Location } from '@/data/menuData';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviewsData: Record<Location, Review[]> = {
  'south-africa': [
    { id: 'sa1', name: 'Michael van der Berg', rating: 5, text: 'An extraordinary culinary journey through African flavours. The bobotie was divine.', date: 'November 2024' },
    { id: 'sa2', name: 'Sarah Ndlovu', rating: 5, text: 'Impeccable service and breathtaking views. A truly world-class dining experience.', date: 'October 2024' },
    { id: 'sa3', name: 'James Morrison', rating: 4, text: 'The fusion of local ingredients with fine dining techniques is remarkable.', date: 'September 2024' },
  ],
  'japan': [
    { id: 'jp1', name: 'Yuki Tanaka', rating: 5, text: 'The omakase was a masterpiece. Each course told a story of the seasons.', date: 'December 2024' },
    { id: 'jp2', name: 'David Chen', rating: 5, text: 'Authentic kaiseki experience with impeccable attention to detail.', date: 'November 2024' },
    { id: 'jp3', name: 'Emma Williams', rating: 5, text: 'The wagyu melted like butter. An unforgettable evening in Tokyo.', date: 'October 2024' },
  ],
  'italy': [
    { id: 'it1', name: 'Marco Bianchi', rating: 5, text: 'Magnifico! The truffle risotto transported me to my grandmother\'s kitchen.', date: 'December 2024' },
    { id: 'it2', name: 'Sophie Laurent', rating: 5, text: 'Every dish was a love letter to Italian cuisine. Pure elegance.', date: 'November 2024' },
    { id: 'it3', name: 'Alessandro Rossi', rating: 4, text: 'The wine pairing was exceptional. A true celebration of Tuscan heritage.', date: 'October 2024' },
  ],
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= rating ? 'text-primary' : 'text-muted-foreground/30'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  const { selectedLocation, locationInfo } = useLocation();
  const reviews = reviewsData[selectedLocation];

  return (
    <section className="bg-charcoal-deep py-20 px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-block font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-light text-foreground sm:text-4xl md:text-5xl">
            Guest Experiences
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
            Discover what our guests say about their dining journey at {locationInfo.name}.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group relative border border-border/30 bg-card/50 p-6 sm:p-8 transition-all duration-500 hover:border-primary/30 hover:bg-card"
              style={{ animation: `fadeUp 0.6s ease-out ${index * 0.15}s forwards`, opacity: 0 }}
            >
              {/* Quote Mark */}
              <div className="absolute -top-3 left-6 font-display text-5xl text-primary/20 sm:text-6xl">
                "
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Text */}
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground italic sm:text-base">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-border/30 pt-4">
                <p className="font-display text-base text-foreground sm:text-lg">
                  {review.name}
                </p>
                <p className="font-body text-xs uppercase tracking-wider text-primary/70">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Average Rating */}
        <div className="mt-12 text-center sm:mt-16">
          <div className="inline-flex flex-col items-center gap-2 border border-border/30 bg-card/30 px-8 py-4 sm:px-12 sm:py-6">
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="font-display text-2xl text-primary sm:text-3xl">4.9</span>
            </div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
