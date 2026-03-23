'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María García',
    role: 'Madre de Mateo (3 años)',
    content: 'Estamos encantados con la guardería. El personal es increíblemente profesional y cariñoso. Mateo va feliz cada mañana y ha aprendido muchísimo.',
    avatar: 'https://i.pravatar.cc/150?u=maria'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Padre de Lucía (2 años)',
    content: 'La seguridad y limpieza son excepcionales. Nos da mucha tranquilidad dejar a nuestra hija en manos de personas tan capacitadas.',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    name: 'Elena Martínez',
    role: 'Madre de Sofía (4 años)',
    content: 'Los talleres de arte y música han despertado una curiosidad increíble en Sofía. Es el lugar perfecto para que los niños descubran sus talentos.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-pastel-blue/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <h4 className="text-primary font-bold font-poppins tracking-wider uppercase">Testimonios</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-800">
            Lo que dicen <span className="text-primary">nuestros padres</span>
          </h2>
          <p className="text-lg text-gray-600">
            La confianza de las familias es nuestro mayor orgullo y motivación constante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-soft relative"
            >
              <div className="absolute -top-4 -right-4 bg-pastel-pink p-3 rounded-2xl shadow-soft">
                <Quote className="text-secondary" size={24} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-gray-600 mb-8 italic leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h5 className="font-bold text-gray-800 font-poppins">{t.name}</h5>
                  <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
