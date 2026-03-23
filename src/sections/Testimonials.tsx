'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, UserRound } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Sofía R.',
    role: 'Mamá de Mateo (18 meses)',
    content: 'La evolución motriz de Mateo ha sido increíble. Las sesiones de estimulación temprana y el enfoque en el juego dirigido han despertado una curiosidad y seguridad en él que nos sorprende cada día.',
    color: 'bg-pastel-blue'
  },
  {
    name: 'Javier M.',
    role: 'Papá de Lucía (2 años)',
    content: 'Buscábamos un lugar que no solo cuidara a Lucía, sino que potenciara sus sentidos. El programa de estimulación sensorial y el ambiente lleno de amor en Bluebell Kids superaron todas nuestras expectativas.',
    color: 'bg-pastel-pink'
  },
  {
    name: 'Elena T.',
    role: 'Mamá de Santi (1 año)',
    content: 'Lo que más valoro es el seguimiento personalizado. Cada actividad está pensada para su etapa de desarrollo, fomentando su independencia y socialización de una manera natural y divertida.',
    color: 'bg-pastel-yellow'
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        ease: "easeOut" 
      }}
      whileHover={{ y: -10 }}
      className="relative flex flex-col h-full"
    >
      <div className={`relative flex-1 p-8 rounded-[2.5rem] bg-white shadow-soft border border-gray-50 overflow-hidden`}>
        {/* Decorative background shape */}
        <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10 ${testimonial.color}`} />
        
        {/* Quote Icon */}
        <div className={`inline-flex p-3 rounded-2xl mb-6 shadow-sm ${testimonial.color} bg-opacity-30`}>
          <Quote className="text-gray-700" size={24} />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 font-medium leading-relaxed italic mb-8 relative z-10">
          {testimonial.content}&quot;
        </p>

        {/* Profile */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-white shadow-card overflow-hidden ${testimonial.color} bg-opacity-40`}>
            <UserRound className="text-gray-600 opacity-60" size={30} />
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold text-gray-800 font-poppins text-lg">{testimonial.name}</h5>
            <span className="text-sm text-gray-500 font-semibold">{testimonial.role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-linear-gradient-to-b from-white to-pastel-blue/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-20 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest font-poppins"
          >
            Nuestras Familias
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 leading-tight">
            Confianza que nace de la <br />
            <span className="text-secondary italic">estimulación y el amor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubre por qué las familias eligen nuestro programa de estimulación temprana para los cimientos del futuro de sus pequeños.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} index={index} />
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-soft border border-gray-100">
            <span className="w-2 h-2 rounded-full bg-pastel-green animate-pulse" />
            <p className="text-gray-500 font-medium">Varias familias confían en nosotros este año {new Date().getFullYear()}</p> 
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;