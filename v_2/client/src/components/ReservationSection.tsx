import React, { useState } from 'react';
import { useLocation } from '@/contexts/LocationContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
}

const ReservationSection: React.FC = () => {
  const { locationInfo } = useLocation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Reservation Confirmed",
      description: `Thank you, ${formData.name}. Your table for ${formData.guests} at our ${locationInfo.name} location has been reserved for ${formData.date} at ${formData.time}.`,
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      occasion: '',
      requests: '',
    });
    setIsSubmitting(false);
  };

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const occasions = [
    'None',
    'Birthday',
    'Anniversary',
    'Business Dinner',
    'Date Night',
    'Special Celebration',
  ];

  return (
    <section id="reservation" className="bg-background py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-[0.3em] text-primary">
            {locationInfo.name} • {locationInfo.country}
          </span>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl elegant-underline inline-block">
            Reserve Your Table
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
            Experience the finest in culinary artistry. Reserve your table at our {locationInfo.name} location 
            and embark on an unforgettable gastronomic journey.
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="glass-dark p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div className="space-y-2">
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-border bg-transparent py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-border bg-transparent py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b border-border bg-transparent py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="+1 234 567 8900"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full border-b border-border bg-transparent py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Preferred Time *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border-b border-border bg-transparent py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
              >
                <option value="" className="bg-card">Select time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time} className="bg-card">{time}</option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Number of Guests *
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full border-b border-border bg-transparent py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num} className="bg-card">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
                <option value="9+" className="bg-card">9+ Guests (Contact us)</option>
              </select>
            </div>

            {/* Occasion */}
            <div className="space-y-2 md:col-span-2">
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Special Occasion
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full border-b border-border bg-transparent py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
              >
                {occasions.map(occ => (
                  <option key={occ} value={occ} className="bg-card">{occ}</option>
                ))}
              </select>
            </div>

            {/* Special Requests */}
            <div className="space-y-2 md:col-span-2">
              <label className="block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Special Requests
              </label>
              <textarea
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                rows={3}
                className="w-full border-b border-border bg-transparent py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Dietary requirements, seating preferences, etc."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 text-center">
            <Button
              type="submit"
              variant="gold-outline"
              size="xl"
              disabled={isSubmitting}
              className="min-w-[200px]"
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
            </Button>
          </div>

          {/* Note */}
          <p className="mt-6 text-center font-body text-xs text-muted-foreground">
            By making a reservation, you agree to our cancellation policy. 
            A confirmation will be sent to your email address.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
