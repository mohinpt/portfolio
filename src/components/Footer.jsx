

import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900  text-white py-8 px-8 sm:px-18 lg:px-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold text-xl">
            MoHin
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            <a href="#home" className="text-slate-400 hover:text-white transition-colors text-sm">Home</a>
            <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>© {year} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;