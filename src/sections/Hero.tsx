'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-32 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Overlay for readability - Ayuda a que el texto blanco se lea mejor sobre el video */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10" />
        
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/home.webp"
          className="w-full h-full object-cover"
        >
          {/* Opción 1: WebM ultra optimizado (Carga súper rápido en navegadores modernos) */}
          <source src="https://res.cloudinary.com/djulmgwoh/video/upload/q_auto/PresentacionBlueBell_abvh5k.webm" type="video/webm" />
          
          {/* Opción 2: Fallback a MP4 optimizado (Para Safari o navegadores antiguos) */}
          <source src="https://res.cloudinary.com/djulmgwoh/video/upload/q_auto/PresentacionBlueBell_abvh5k.mp4" type="video/mp4" />
          
          Tu navegador no soporta videos.
        </video>
      </div>

      {/* Background Shapes (Reduced opacity to not compete with video) */}
      <div className="absolute top-0 right-0 -z-5 w-1/2 h-full bg-pastel-blue/20 rounded-l-[100px] hidden lg:block" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-green text-green-700 rounded-full text-sm font-bold font-poppins shadow-soft"
            >
              <Sparkles size={16} />
              <span>Inscripciones Abiertas {new Date().getFullYear()}</span>
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
              className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
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
                <Button size="lg" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform">Agendar Visita</Button>
              </Link>
              
              <Link href="#gallery">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm">Ver Galería</Button>
              </Link>
            </motion.div>
          </div>

          {/* Optional: Floating Card instead of full image to keep video visible */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 hidden lg:flex justify-center"
          >
            <div className="relative p-8 bg-white/30 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <Image
                  src="/images/home.webp"
                  alt="Bluebell Kids"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-card animate-float">
                <p className="text-secondary font-bold font-poppins text-sm italic">¡Aprender es divertido!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;