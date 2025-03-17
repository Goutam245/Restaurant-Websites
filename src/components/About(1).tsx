
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="about" 
      className={cn(
        'py-20 md:py-28 lg:py-32 overflow-hidden bg-restaurant-50',
        className
      )}
    >
      <div className="container px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-3 py-1 bg-accent1/10 text-accent1 text-xs tracking-widest uppercase rounded-full mb-6">
                Our Story
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay="delay-200">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                A Passion for Exceptional Cuisine &amp; Memorable Experiences
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay="delay-400" className="mb-8">
              <p className="text-restaurant-600 mb-4 text-balance">
                Founded in 2010 by Chef Michael Laurent, our restaurant began with a simple philosophy: transform the finest seasonal ingredients into unforgettable dishes that honor tradition while embracing innovation.
              </p>
              <p className="text-restaurant-600 text-balance">
                Every aspect of our restaurant—from the carefully crafted menu to the thoughtfully designed space—reflects our commitment to creating an elevated dining experience that engages all the senses. Our team of dedicated professionals strives to provide impeccable service that complements the culinary journey.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay="delay-600">
              <div className="flex flex-col sm:flex-row gap-6">
                <div>
                  <h3 className="font-display text-5xl font-bold text-accent1 mb-2">12</h3>
                  <p className="text-sm text-restaurant-600 uppercase tracking-wider">Years of Excellence</p>
                </div>
                <div>
                  <h3 className="font-display text-5xl font-bold text-accent1 mb-2">3</h3>
                  <p className="text-sm text-restaurant-600 uppercase tracking-wider">Award-Winning Chefs</p>
                </div>
                <div>
                  <h3 className="font-display text-5xl font-bold text-accent1 mb-2">100+</h3>
                  <p className="text-sm text-restaurant-600 uppercase tracking-wider">Signature Dishes</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <AnimatedSection animation="blur-in">
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070" 
                  alt="Chef preparing food" 
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-700",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-restaurant-200 animate-pulse"></div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
