'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Stars, Users, Droplet } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <ShieldCheck className="text-primary" />,
    title: 'Ambiente Seguro',
    description: 'Instalaciones diseñadas con los más altos estándares de seguridad infantil.'
  },
  {
    icon: <Users className="text-secondary" />,
    title: 'Personal Calificado',
    description: 'Educadores titulados y con amplia experiencia en el cuidado infantil.'
  },
  {
    icon: <Stars className="text-yellow-500" />,
    title: 'Educación Creativa',
    description: 'Metodologías basadas en el juego y el descubrimiento personal.'
  },
  {
    icon: <Droplet className="text-green-500" />,
    title: 'Hidroterapia',
    description: 'Terapias acuáticas para el desarrollo motor y sensorial de los niños.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Image
                src="/images/servicios.webp"
                alt="Servicios de la guardería"
                width={1000}
                height={500}
                className="rounded-3xl shadow-card h-64 w-full object-cover"
              />
              <div className="bg-pastel-yellow p-8 rounded-3xl text-center">
                <span className="text-4xl font-bold font-poppins text-yellow-700">+1</span>
                <p className="text-yellow-800 font-bold">Año de experiencia</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 pt-12"
            >
              <div className="bg-pastel-purple p-8 rounded-3xl text-center">
                <span className="text-4xl font-bold font-poppins text-purple-700">+5</span>
                <p className="text-purple-800 font-bold">Areas recreativas</p>
              </div>
              <Image
                src="/images/actividades.webp"
                alt="Actividades de la guardería"
                width={1000}
                height={700}
                className="rounded-3xl shadow-card h-64 w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h4 className="text-primary font-bold font-poppins tracking-wider uppercase ">Sobre Nosotros</h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-800 leading-snug md:leading-tight mb-6">
                Más que una guardería, <span className="text-secondary">somos una familia</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                En Bluebell Kids, creemos que los primeros años de vida son fundamentales para el futuro. Nuestra misión es proporcionar un entorno estimulante donde cada niño se sienta valorado, amado y empoderado para explorar sus talentos únicos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:shadow-soft transition-all"
                >
                  <div className="shrink-0 bg-gray-50 p-3 rounded-xl h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1">{feature.title}</h5>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
