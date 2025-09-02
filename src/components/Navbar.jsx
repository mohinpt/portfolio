
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
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
    fixed top-16 left-0 z-40 w-full overflow-hidden transition-all duration-500 ease-in-out bg-white
    ${isOpen ? "max-h-screen" : "max-h-0"}
  `}
      >
        <nav className="flex flex-col gap-4 items-center py-6 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium link-hover"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

    </header >
  );
};

export default Navbar;