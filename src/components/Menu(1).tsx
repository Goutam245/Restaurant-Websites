
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'starters' | 'mains' | 'desserts';
}

interface MenuProps {
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ className }) => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls with wild mushrooms and truffle oil",
      price: "$16",
      image: "https://images.unsplash.com/photo-1635146037526-e37b162252d1?q=80&w=1974",
      category: "starters"
    },
    {
      id: 2,
      name: "Tuna Tartare",
      description: "Fresh tuna with avocado, citrus, and wasabi aioli",
      price: "$18",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2069",
      category: "starters"
    },
    {
      id: 3,
      name: "Coq au Vin",
      description: "Classic French chicken braised with wine, lardons, and mushrooms",
      price: "$32",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070",
      category: "mains"
    },
    {
      id: 4,
      name: "Herb Crusted Salmon",
      description: "Wild salmon with herbed breadcrumbs and lemon beurre blanc",
      price: "$34",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070",
      category: "mains"
    },
    {
      id: 5,
      name: "Crème Brûlée",
      description: "Vanilla custard with caramelized sugar crust and fresh berries",
      price: "$12",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974",
      category: "desserts"
    },
    {
      id: 6,
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      price: "$14",
      image: "https://images.unsplash.com/photo-1623246123320-0d6636755796?q=80&w=1974",
      category: "desserts"
    },
  ];

  const starters = menuItems.filter(item => item.category === 'starters');
  const mains = menuItems.filter(item => item.category === 'mains');
  const desserts = menuItems.filter(item => item.category === 'desserts');

  const MenuCategory = ({ title, items }: { title: string; items: MenuItem[] }) => (
    <div className="mb-16">
      <AnimatedSection animation="fade-up" className="mb-8">
        <h3 className="text-2xl font-display font-semibold relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent1 after:bottom-0 after:left-0 pb-2">
          {title}
        </h3>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <AnimatedSection 
            key={item.id} 
            animation="fade-up" 
            delay={index % 2 === 0 ? 'delay-200' : 'delay-400'} 
            className="menu-card bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-display font-semibold">{item.name}</h4>
                <span className="text-accent1 font-medium">{item.price}</span>
              </div>
              <p className="text-restaurant-500 text-sm">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );

  return (
    <section 
      id="menu" 
      className={cn(
        'py-20 md:py-28 lg:py-32 bg-restaurant-100',
        className
      )}
    >
      <div className="container px-6 lg:px-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-accent1/10 text-accent1 text-xs tracking-widest uppercase rounded-full mb-6">
            Culinary Delights
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Seasonal Menu</h2>
          <p className="max-w-2xl mx-auto text-restaurant-600">
            Showcasing the finest seasonal ingredients transformed through classic techniques and contemporary inspiration.
          </p>
        </AnimatedSection>

        <MenuCategory title="Starters" items={starters} />
        <MenuCategory title="Main Courses" items={mains} />
        <MenuCategory title="Desserts" items={desserts} />

        <AnimatedSection animation="fade-up" className="text-center mt-12">
          <a href="#reservations" className="btn-hover inline-block px-8 py-3 bg-accent1 text-white font-medium rounded-md transition-all hover:bg-accent1/90">
            Reserve a Table
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Menu;
