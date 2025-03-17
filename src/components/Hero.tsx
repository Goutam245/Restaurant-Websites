
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070';
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat parallax transition-opacity duration-1000",
          loaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070)' 
        }}
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content Container */}
      <div className="container relative z-10 px-6 lg:px-10 flex flex-col items-center text-center">
        <AnimatedSection animation="fade-down" className="mb-4">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs tracking-widest uppercase mb-6">
            Fine Dining Experience
          </span>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 text-balance">
            An Extraordinary Culinary Journey
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay="delay-200" className="max-w-2xl mb-10">
          <p className="text-lg md:text-xl text-white/80 text-balance">
            Experience the perfect harmony of taste, ambiance, and exceptional service. Every dish tells a story of tradition and innovation.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay="delay-400" className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#menu" 
            className="btn-hover px-8 py-3 bg-white text-black font-medium rounded-md transition-all hover:bg-white/90"
          >
            Explore Menu
          </a>
          <a 
            href="#reservations" 
            className="btn-hover px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md transition-all hover:bg-white/10"
          >
            Book a Table
          </a>
        </AnimatedSection>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="block w-6 h-10 border-2 border-white/60 rounded-full relative mb-2">
          <span className="block w-1 h-2 bg-white/60 absolute left-1/2 top-2 transform -translate-x-1/2 rounded-full animate-fade-in"></span>
        </span>
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
