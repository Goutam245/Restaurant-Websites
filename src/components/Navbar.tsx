
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10',
        scrolled ? 'py-3 glass-morphism' : 'py-6 bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-display font-bold tracking-tight text-white z-10">
            SAVOR
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-12">
            {['Home', 'About', 'Menu', 'Reservations', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden z-10 text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <div 
            className={cn(
              'fixed inset-0 bg-black/95 flex flex-col items-center justify-center lg:hidden transition-transform duration-500 ease-in-out',
              isOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="flex flex-col items-center space-y-8">
              {['Home', 'About', 'Menu', 'Reservations', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-2xl font-medium tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
