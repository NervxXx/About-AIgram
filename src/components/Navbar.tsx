
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Characters', path: '/characters' },
    { name: 'Tools', path: '/tools' },
    { name: 'Models', path: '/models' },
    { name: 'Channels', path: '/channels' },
    { name: 'Docs', path: '/docs' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 px-4 md:px-8',
        scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <div className="h-10 w-auto md:h-14 relative">
            <img 
              src="/lovable-uploads/Icon.png" 
              alt="PSK Services Logo" 
              className="h-full w-auto object-contain" 
            />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-green-400 transition-colors duration-300 link-hover text-sm font-medium tracking-wide',
                  isActive && 'text-green-500 after:w-full'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white hover:text-green-400 transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 glassmorphism pt-16 px-6 transition-all duration-300 ease-in-out transform md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-green-400 py-2 text-xl transition-colors duration-300',
                  isActive && 'text-green-500'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
