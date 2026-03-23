'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-32 lg:pt-24 lg:pb-20 overflow-hidden bg-linear-gradient-to-r from-pastel-blue to-pastel-pink">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-pastel-blue/30 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-20 left-10 -z-10 w-24 h-24 bg-pastel-pink/40 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-1/4 -z-10 w-32 h-32 bg-pastel-yellow/40 rounded-full blur-2xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-green text-green-700 rounded-full text-sm font-bold font-poppins shadow-soft"
            >
              <Sparkles size={16} />
              <span>Inscripciones Abiertas 2026</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-poppins text-gray-800 leading-tight"
            >
              Donde cada día es una <span className="text-primary italic">aventura</span> mágica
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Ofrecemos un espacio seguro, creativo y lleno de amor para el desarrollo integral de tus pequeños. Descubre por qué somos la guardería favorita de las familias.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="#contact">
                <Button size="lg" className="w-full sm:w-auto">Agendar Visita</Button>
              </Link>
              
              <Link href="#gallery">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Ver Galería</Button>
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-card border-8 border-white transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/home.webp"
                alt="Logo de la guardería"
                width={1000}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute z-10 -top-6 -right-6 bg-white p-4 rounded-2xl shadow-card animate-float hidden sm:block">
              <p className="text-secondary font-bold font-poppins text-sm italic">¡Aprender es divertido!</p>
            </div>
            <div className="absolute z-10 -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-card animate-float delay-1000 hidden sm:block">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-pastel-yellow rounded-full" />)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
