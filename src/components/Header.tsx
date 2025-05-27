import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-primary-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="font-display text-xl md:text-2xl font-semibold text-white">
          Italy at the Crossroads
        </h1>
        
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`
          fixed md:static top-[56px] left-0 w-full md:w-auto 
          bg-primary-900 md:bg-transparent 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}
          z-30 md:z-auto
        `}>
          <ul className="flex flex-col md:flex-row p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6">
            <li><a href="#introduction" className="text-white hover:text-accent-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Introduction</a></li>
            <li><a href="#perilous-passage" className="text-white hover:text-accent-300 transition-colors" onClick={() => setIsMenuOpen(false)}>The Journey</a></li>
            <li><a href="#traffickers" className="text-white hover:text-accent-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Traffickers</a></li>
            <li><a href="#experiences" className="text-white hover:text-accent-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Experiences</a></li>
            <li><a href="#conclusion" className="text-white hover:text-accent-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Conclusion</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;