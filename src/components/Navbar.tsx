'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-whitep-2 rounded-2xl group-hover:rotate-12 transition-transform">
            <Image
              src="/images/icono.svg"
              alt="Icono"
              width={24}
              height={24}
              className="transition-transform group-hover:scale-110"
            />
          </div>
          <span className="text-2xl font-bold font-poppins tracking-tight uppercase">
            {/* BLUE */}
            <span className="text-[#7BB855]">Blu</span>
            
            {/* BELL */}
            <span className="text-[#46C4D8]">ebe</span>
            <span className="text-[#FCE04A]">ll</span>
            
            {/* Espacio entre palabras (puedes usar un espacio normal o ml-1 / ml-2) */}
            <span className="ml-1"></span>

            {/* KIDS */}
            <span className="text-[#F59C47]">K</span>
            <span className="text-[#F66FA6]">I</span>
            <span className="text-[#46C4D8]">D</span>
            <span className="text-[#7BB855]">S</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/593967975759?text=Hola%20quisiera%20informaci%C3%B3n%20sobre%20la%20matr%C3%ADcula%20en%20Bluebell%20Kids"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">
              <MessageCircle size={18} />
              Matricularse
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-6 shadow-card' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-lg text-gray-600 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
            <a
              href="https://wa.me/593967975759?text=Hola%20quisiera%20informaci%C3%B3n%20sobre%20la%20matr%C3%ADcula%20en%20Bluebell%20Kids"
              target="_blank"
              rel="noopener noreferrer"
              className="w-3/4"
            >
              <Button className="mt-2 w-full">
                <MessageCircle size={18} />
                Matricularse
              </Button>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
