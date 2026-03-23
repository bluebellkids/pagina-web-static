'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Baby, Blocks, Waves, Droplets, MessageCircle, School } from 'lucide-react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const services = [
  {
    icon: <Baby className="w-10 h-10 text-primary" />,
    title: 'Estimulación Temprana',
    color: 'bg-pastel-blue',
    description: 'Actividades diseñadas para potenciar el desarrollo psicomotriz, cognitivo y sensorial en los primeros meses.',
    details: 'Nuestro programa de estimulación temprana incluye sesiones guiadas de masajes, juegos de texturas, sonidos y ejercicios motores adaptados a cada etapa del desarrollo del bebé.'
  },
  {
    icon: <Blocks className="w-10 h-10 text-secondary" />,
    title: 'Guardería',
    color: 'bg-pastel-pink',
    description: 'Espacio seguro y lleno de cariño donde los niños pueden aprender, jugar y socializar.',
    details: 'Brindamos un ambiente cálido y seguro donde los pequeños desarrollan habilidades sociales, emocionales y cognitivas mediante juegos, actividades grupales y acompañamiento profesional.'
  },
  {
    icon: <Waves className="w-10 h-10 text-blue-600" />,
    title: 'Hidroestimulación',
    color: 'bg-pastel-blue',
    description: 'Actividades acuáticas diseñadas para estimular el desarrollo físico y sensorial del bebé.',
    details: 'La hidroestimulación ayuda a mejorar la coordinación motora, fortalecer músculos y generar confianza en el agua mediante ejercicios guiados y juegos acuáticos.'
  },
  {
    icon: <Droplets className="w-10 h-10 text-cyan-600" />,
    title: 'Hidroterapia',
    color: 'bg-pastel-green',
    description: 'Terapia acuática que favorece el desarrollo físico y la relajación muscular.',
    details: 'Mediante ejercicios en el agua se promueve la movilidad, la relajación y el bienestar físico de los niños, siempre bajo supervisión profesional especializada.'
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-purple-600" />,
    title: 'Estimulación de Lenguaje',
    color: 'bg-pastel-purple',
    description: 'Actividades enfocadas en el desarrollo de la comunicación y el lenguaje infantil.',
    details: 'Trabajamos mediante juegos, canciones, cuentos y ejercicios especializados que ayudan a fortalecer la pronunciación, comprensión y expresión verbal de los niños.'
  },
  {
    icon: <School className="w-10 h-10 text-yellow-600" />,
    title: 'Escolarización',
    color: 'bg-pastel-yellow',
    description: 'Preparación educativa integral para el ingreso a la etapa escolar.',
    details: 'Nuestro programa de escolarización fortalece habilidades cognitivas, sociales y emocionales para facilitar la adaptación de los niños al entorno escolar formal.'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-primary font-bold font-poppins tracking-wider uppercase">Nuestros Servicios</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-800">
            Programas diseñados para <span className="text-primary">crecer felices</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos una amplia gama de actividades y cuidados adaptados a las necesidades individuales de cada niño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className={`${service.color} p-5 rounded-2xl mb-6 group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-8 grow leading-relaxed">
                {service.description}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedService(service)}
              >
                Saber más
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        <div className="space-y-6">
          <div className={`${selectedService?.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
            {selectedService?.icon}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center italic">
            &quot;{selectedService?.description}&quot;
          </p>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="font-bold font-poppins text-gray-800 mb-3 text-center">¿Qué incluye este servicio?</h4>
            <p className="text-gray-600 leading-relaxed text-center">
              {selectedService?.details}
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setSelectedService(null)}>Entendido</Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Services;
