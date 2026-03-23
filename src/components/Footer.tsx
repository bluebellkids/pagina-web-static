'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, MessageCircle, X } from 'lucide-react';

const Footer = () => {

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showDev, setShowDev] = useState(false);

  return (
    <>
      <footer className="bg-gray-50 pt-16 pb-8">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div className="space-y-4">

              <Link href="/" className="flex items-center gap-2">
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

              <p className="text-gray-600 leading-relaxed">
                Centro infantil enfocado en el desarrollo integral de los niños
                mediante programas de estimulación, aprendizaje y cuidado
                profesional en un ambiente seguro y lleno de amor.
              </p>

              <div className="flex gap-4">

                <a
                  href="https://www.facebook.com/BLUEBELLKIDS.142"
                  target="_blank"
                  className="bg-white p-2 rounded-full shadow-soft text-gray-600 hover:text-primary transition-colors"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://www.instagram.com/bluebellkids2026/"
                  target="_blank"
                  className="bg-white p-2 rounded-full shadow-soft text-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://wa.me/593967975759"
                  target="_blank"
                  className="bg-green-500 p-2 rounded-full shadow-soft text-white hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={20} />
                </a>

              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-bold font-poppins mb-6 text-gray-800">
                Enlaces Rápidos
              </h4>

              <ul className="space-y-3">
                <li><Link href="#home" className="text-gray-600 hover:text-primary transition-colors">Inicio</Link></li>
                <li><Link href="#about" className="text-gray-600 hover:text-primary transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="#services" className="text-gray-600 hover:text-primary transition-colors">Servicios</Link></li>
                <li><Link href="#gallery" className="text-gray-600 hover:text-primary transition-colors">Galería</Link></li>
                <li><Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contacto</Link></li>
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-lg font-bold font-poppins mb-6 text-gray-800">
                Nuestros Servicios
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li>Estimulación Temprana</li>
                <li>Guardería</li>
                <li>Hidroestimulación</li>
                <li>Hidroterapia</li>
                <li>Estimulación de Lenguaje</li>
                <li>Escolarización</li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-lg font-bold font-poppins mb-6 text-gray-800">
                Contáctanos
              </h4>

              <ul className="space-y-4">

                <li className="flex gap-3 text-gray-600">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <span>Norte de Riobamba, Benjamin Carrión y Victor Emilio Estrada</span>
                </li>

                <li className="flex gap-3 text-gray-600">
                  <Phone className="text-primary shrink-0" size={20} />
                  <span>0967975759</span>
                </li>

                <li className="flex gap-3 text-gray-600">
                  <Mail className="text-primary shrink-0" size={20} />
                  <span>bluebellkids@gmail.com</span>
                </li>

                <li className="flex gap-3 text-gray-600">
                  <Clock className="text-primary shrink-0" size={20} />
                  <span>
                    Lunes a Viernes <br />
                    07:00 - 17:00
                  </span>
                </li>

              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-500 text-sm">

            <p>
              © {new Date().getFullYear()} Bluebell Kids. Todos los derechos reservados.
            </p>

            <button
              onClick={() => setShowDev(true)}
              className="hover:text-gray-800 cursor-pointer"
              >
              Desarrollado por Aphros
            </button>

            <div className="flex gap-6">

              <button
                onClick={() => setShowTerms(true)}
                className="hover:text-gray-800 cursor-pointer"
              >
                Términos y Condiciones
              </button>

              <button
                onClick={() => setShowPrivacy(true)}
                className="hover:text-gray-800 cursor-pointer"
              >
                Política de Privacidad
              </button>

            </div>

          </div>

        </div>
      </footer>

      {/* MODAL TERMINOS */}

      {showTerms && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50">

          <div className="bg-white max-w-2xl rounded-3xl p-8 relative overflow-y-auto max-h-[80vh]">

            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>

            <p className="text-gray-600 mb-4">
              Bluebell Kids es un centro de estimulación y desarrollo infantil
              ubicado en Ecuador. El uso de esta página web implica la
              aceptación de los presentes términos.
            </p>

            <p className="text-gray-600 mb-4">
              Los servicios educativos y de cuidado infantil ofrecidos se
              encuentran orientados al desarrollo integral de los niños,
              respetando las normativas vigentes del sistema educativo
              ecuatoriano y las disposiciones de protección de la niñez.
            </p>

            <p className="text-gray-600 mb-4">
              La información presentada en esta página tiene fines informativos
              y puede actualizarse sin previo aviso. La matrícula y acceso a los
              servicios está sujeto a disponibilidad y procesos internos del
              centro infantil.
            </p>

          </div>
        </div>
      )}

      {/* MODAL PRIVACIDAD */}

      {showPrivacy && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50">

          <div className="bg-white max-w-2xl rounded-3xl p-8 relative overflow-y-auto max-h-[80vh]">

            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-4">Política de Privacidad</h2>

            <p className="text-gray-600 mb-4">
              En Bluebell Kids respetamos la privacidad de las familias y
              protegemos la información personal proporcionada a través de
              nuestro sitio web.
            </p>

            <p className="text-gray-600 mb-4">
              Los datos recolectados mediante formularios o medios de contacto
              serán utilizados únicamente con fines de comunicación,
              información sobre servicios educativos y coordinación de visitas
              al centro infantil.
            </p>

            <p className="text-gray-600 mb-4">
              Conforme a la legislación ecuatoriana y principios de protección
              de datos personales, la información proporcionada no será
              compartida con terceros sin autorización previa de los padres o
              representantes legales.
            </p>

          </div>
        </div>
      )}

      {/* MODAL DEV */}

      {showDev && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50">

        <div className="bg-white max-w-md rounded-3xl p-8 relative">

        <button
        onClick={() => setShowDev(false)}
        className="absolute top-4 right-4 cursor-pointer"
        >
        <X />
        </button>

        <h2 className="text-2xl font-bold mb-4">Aphros</h2>

        <p className="text-gray-600 mb-4">
        Desarrollador web freelance especializado en desarrollo de páginas
        web modernas, landing pages y sistemas web personalizados.
        </p>

        <div className="space-y-2 text-gray-600">

        <p>
        <strong>WhatsApp:</strong> 0995549141
        </p>

        <p>
        <strong>Email:</strong> adjrmz23@gmail.com
        </p>

        </div>

        </div>
        </div>
        )}

    </>
  );
};

export default Footer;