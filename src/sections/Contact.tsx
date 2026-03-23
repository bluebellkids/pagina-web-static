'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const contactInfo = [
  { 
    icon: <Phone />, 
    title: 'WhatsApp', 
    content: '+593 967975759', 
    link: 'https://wa.me/593967975759',
    color: 'bg-pastel-blue'
  },
  { 
    icon: <Mail />, 
    title: 'Correo', 
    content: 'bluebellkids@gmail.com', 
    link: 'mailto:bluebellkids@gmail.com',
    color: 'bg-pastel-pink'
  },
  { 
    icon: <MapPin />, 
    title: 'Ubicación', 
    content: 'Norte de Riobamba, Benjamin Carrión y Victor Emilio Estrada',
    link: 'https://maps.app.goo.gl/vhH5YLS9mLXnbSfHA',
    color: 'bg-pastel-yellow'
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-4">
              <h4 className="text-secondary font-bold font-poppins tracking-wider uppercase">Contacto</h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-800">
                ¡Hablemos de tus <span className="text-secondary">pequeños!</span>
              </h2>
              <p className="text-lg text-gray-600">
                Estamos aquí para resolver todas tus dudas y recibirte en nuestra gran familia.
              </p>
            </div>
            <div className="space-y-6">
               {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target = "_blank"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`${item.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 font-poppins">{item.title}</h5>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-soft"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 font-poppins ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre aquí"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 font-poppins ml-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@correo.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 font-poppins ml-1">Asunto</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm appearance-none">
                  <option>Información sobre Matricula</option>
                  <option>Agendar una Visita</option>
                  <option>Consulta de Servicios</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 font-poppins ml-1">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm resize-none"
                />
              </div>

              <Button size="lg" className="w-full flex gap-2">
                Enviar Mensaje <Send size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
        <div className="mt-10 rounded-3xl overflow-hidden border border-gray-300 shadow-soft">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.0856553060778!2d-78.6657903!3d-1.6463573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d307fc442e70dd%3A0xe74c5eb4f65efde0!2sBLUEBELL%20KIDS!5e0!3m2!1ses!2sec!4v1773628306324!5m2!1ses!2sec"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
