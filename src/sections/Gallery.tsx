'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Función para generar imágenes de la galería
const generateGalleryImages = () => {
  const baseImages = [
    { name: 'actividades.webp', title: 'Actividades Creativas' },
    { name: 'servicios.webp', title: 'Nuestros Servicios' },
    { name: 'home.webp', title: 'Instalaciones Principales' },
    { name: 'BebeHidro.jpg', title: 'Sesiones de Hidroterapia' },
    { name: 'estimulacion.webp', title: 'Estimulación Temprana' },
  ];

  return baseImages.map(img => ({
    url: `/images/${img.name}`,
    title: img.title
  }));
};

const images = generateGalleryImages();

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const selectedImg = currentIndex !== null ? images[currentIndex] : null;

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
              onClick={() => openModal(index)}
            >
              <Image 
                src={img.url} 
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <p className="text-white font-bold font-poppins text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={currentIndex !== null}
        onClose={closeModal}
        title={selectedImg?.title || "Galería"}
      >
        <div className="relative group flex items-center justify-center min-h-75">
          {/* Botones de navegación sobre la imagen */}
          <button 
            onClick={prevImage}
            className="absolute left-2 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all text-gray-800"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-[60vh]"
            >
              <Image 
                src={selectedImg?.url || ''} 
                alt={selectedImg?.title || 'Imagen ampliada'} 
                fill
                priority
                className="object-contain rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={nextImage}
            className="absolute right-2 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all text-gray-800"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicador de posición */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-bold">
            {(currentIndex ?? 0) + 1} / {images.length}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Gallery;