import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/libs/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
  
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
  
    return (
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 lg:px-10",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent"
      )}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-agency-black">
            Lagos<span className="text-agency-red">Dev</span>
          </a>
  
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a href="#services" className="text-agency-black hover:text-agency-red transition-colors">Services</a>
            <a href="#projects" className="text-agency-black hover:text-agency-red transition-colors">Projects</a>
            <a href="#about" className="text-agency-black hover:text-agency-red transition-colors">About</a>
            <a href="#contact" className="text-agency-black hover:text-agency-red transition-colors">Contact</a>
          </div>
  
          {/* Contact Button */}
          <a href="#contact" className="hidden lg:block btn-primary">Get in Touch</a>
  
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-agency-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 lg:hidden flex flex-col transition-all duration-300 ease-in-out transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}>
          <div className="flex flex-col space-y-6 text-center text-xl">
            <a href="#services" onClick={toggleMenu} className="py-2 border-b border-gray-200 text-agency-black">Services</a>
            <a href="#projects" onClick={toggleMenu} className="py-2 border-b border-gray-200 text-agency-black">Projects</a>
            <a href="#about" onClick={toggleMenu} className="py-2 border-b border-gray-200 text-agency-black">About</a>
            <a href="#contact" onClick={toggleMenu} className="py-2 border-b border-gray-200 text-agency-black">Contact</a>
            <a href="#contact" onClick={toggleMenu} className="btn-primary mt-4">Get in Touch</a>
          </div>
        </div>
      </nav>
    );
  };

  
export default Navbar;