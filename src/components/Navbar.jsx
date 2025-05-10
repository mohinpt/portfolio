
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`
        fixed top-0 w-full h-16 px-8 sm:px-18 lg:px-24 z-50 transition-all duration-300 ease-in-out 
        ${scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"}
      `}
    >
      <div className="container flex items-center justify-between">

        <div className="flex-shrink-0">
          <a href="#home" className="text-xl font-bold text-slate-900">
            MoHin
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
        {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="link-hover text-sm font-medium tracking-wide px-1" 
            >
              {item.name}
              </a>
            ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div

        className={(
          "fixed inset-0 z-40 bg-background flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center md:hidden">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;