
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface ReservationProps {
  className?: string;
}

const Reservation: React.FC<ReservationProps> = ({ className }) => {
  return (
    <section 
      id="reservations" 
      className={cn(
        'py-20 md:py-28 lg:py-32 bg-restaurant-900 text-white relative overflow-hidden',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent1 rounded-full blur-[100px]"></div>
        <div className="absolute left-0 top-0 w-96 h-96 bg-accent1 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs tracking-widest uppercase rounded-full mb-6">
              Join Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Reserve Your Experience
            </h2>
            <p className="text-white/80">
              Make a reservation and immerse yourself in an unforgettable culinary journey.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay="delay-200">
            <form className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-white/80 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-white/80 mb-2">
                    Time
                  </label>
                  <select
                    id="time"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                  >
                    <option value="" className="bg-restaurant-900">Select a time</option>
                    <option value="17:00" className="bg-restaurant-900">5:00 PM</option>
                    <option value="17:30" className="bg-restaurant-900">5:30 PM</option>
                    <option value="18:00" className="bg-restaurant-900">6:00 PM</option>
                    <option value="18:30" className="bg-restaurant-900">6:30 PM</option>
                    <option value="19:00" className="bg-restaurant-900">7:00 PM</option>
                    <option value="19:30" className="bg-restaurant-900">7:30 PM</option>
                    <option value="20:00" className="bg-restaurant-900">8:00 PM</option>
                    <option value="20:30" className="bg-restaurant-900">8:30 PM</option>
                    <option value="21:00" className="bg-restaurant-900">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-white/80 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                  >
                    <option value="" className="bg-restaurant-900">Select party size</option>
                    <option value="1" className="bg-restaurant-900">1 person</option>
                    <option value="2" className="bg-restaurant-900">2 people</option>
                    <option value="3" className="bg-restaurant-900">3 people</option>
                    <option value="4" className="bg-restaurant-900">4 people</option>
                    <option value="5" className="bg-restaurant-900">5 people</option>
                    <option value="6" className="bg-restaurant-900">6 people</option>
                    <option value="7" className="bg-restaurant-900">7 people</option>
                    <option value="8" className="bg-restaurant-900">8+ people</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="special" className="block text-sm font-medium text-white/80 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="special"
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                  placeholder="Any dietary restrictions or special occasions?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-hover w-full bg-accent1 hover:bg-accent1/90 text-white font-medium py-3 px-4 rounded-md transition-all duration-300"
              >
                Confirm Reservation
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
