'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const images = [
  { url: 'https://images.unsplash.com/photo-1587653263995-422546a72569?auto=format&fit=crop&q=80&w=800', title: 'Nuestra Aula Principal' },
  { url: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800', title: 'Hora de Juegos' },
  { url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800', title: 'Talleres Creativos' },
  { url: 'https://images.unsplash.com/photo-1502086223501-7ea2eceaf93d?auto=format&fit=crop&q=80&w=800', title: 'Patio Recreativo' },
  { url: 'https://images.unsplash.com/photo-1484981184820-2e84ea0af397?auto=format&fit=crop&q=80&w=800', title: 'Comedor Infantil' },
  { url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800', title: 'Actividades de Lectura' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <h4 className="text-secondary font-bold font-poppins tracking-wider uppercase">Galería</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-800">
            Un vistazo a <span className="text-secondary">nuestro pequeño mundo</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explora nuestras instalaciones diseñadas para el máximo confort y diversión de los niños.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-3xl cursor-pointer group"
              onClick={() => setSelectedImg(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold font-poppins text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        title="Galería"
      >
        <div className="flex flex-col items-center">
          <img 
            src={selectedImg || ''} 
            alt="Imagen ampliada" 
            className="w-full h-auto rounded-2xl shadow-card"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Gallery;
