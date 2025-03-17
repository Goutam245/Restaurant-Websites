
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer 
      id="contact" 
      className={cn(
        'bg-restaurant-950 text-white pt-20 pb-10',
        className
      )}
    >
      <div className="container px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* About */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">SAVOR</h3>
            <p className="text-white/70 mb-6">
              Savor restaurant offers an unforgettable culinary experience, where tradition meets innovation in a sophisticated atmosphere.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent1 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent1 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent1 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent1 mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">123 Gourmet Avenue, Culinary District, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent1 mr-3 flex-shrink-0" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent1 mr-3 flex-shrink-0" />
                <span className="text-white/70">reservations@savorrestaurant.com</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock size={18} className="text-accent1 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Monday - Thursday</p>
                  <p className="text-white/70">5:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-accent1 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Friday - Saturday</p>
                  <p className="text-white/70">5:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-accent1 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-white/70">5:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Reservations', 'Private Events', 'Gift Cards', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/70 hover:text-white transition-colors duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Savor Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
