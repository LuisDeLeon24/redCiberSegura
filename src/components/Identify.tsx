import React from 'react';
import { UserCheck, UserX, AlertCircle } from 'lucide-react';

const Identify: React.FC = () => {
  const victimSigns = [
    "Cambios repentinos en el comportamiento o estado de ánimo",
    "Evitar el uso de dispositivos electrónicos o redes sociales",
    "Mostrar ansiedad cuando recibe mensajes o notificaciones",
    "Aislamiento social y pérdida de interés en actividades",
    "Problemas para dormir o pesadillas",
    "Cambios en el rendimiento académico",
    "Expresiones de tristeza, depresión o pensamientos suicidas",
    "Evidencia de cuentas falsas o mensajes crueles"
  ];

  const bullyBehaviors = [
    "Enviar mensajes agresivos o amenazantes repetidamente",
    "Crear perfiles falsos para acosar",
    "Compartir información privada o embarazosa",
    "Excluir intencionalmente a otros de grupos",
    "Difundir rumores o mentiras en línea",
    "Usar lenguaje ofensivo o discriminatorio",
    "Organizar ataques coordinados contra una persona",
    "Mostrar falta de empatía hacia las víctimas"
  ];

  const testimonials = [
    {
      name: "María, 16 años",
      text: "Empezó con comentarios en mis fotos, luego crearon un grupo para burlarse de mí. Me sentía sola y tenía miedo de ir al colegio."
    },
    {
      name: "Carlos, 15 años",
      text: "Mis compañeros compartían memes crueles sobre mí. Dejé de usar redes sociales por meses, pero el daño ya estaba hecho."
    },
    {
      name: "Ana, 17 años",
      text: "Alguien robó mi identidad en línea y enviaba mensajes ofensivos a mis contactos. Perdí muchas amistades antes de descubrir la verdad."
    }
  ];

  return (
    <section id="identificar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cómo Identificar el Ciberbullying?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reconocer las señales temprano es crucial para poder actuar. Aquí te mostramos cómo identificar 
            si alguien está siendo víctima o perpetrando ciberbullying.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-6">
              <UserCheck className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Señales en las Víctimas</h3>
            </div>
            <ul className="space-y-3">
              {victimSigns.map((sign, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-6">
              <UserX className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Comportamientos del Acosador</h3>
            </div>
            <ul className="space-y-3">
              {bullyBehaviors.map((behavior, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{behavior}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-12">
          <div className="flex items-center">
            <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-orange-800">Importante para Padres y Educadores</h3>
              <p className="text-orange-700 mt-1">
                Los jóvenes rara vez reportan el ciberbullying por miedo, vergüenza o temor a que les quiten el acceso a internet. 
                Mantén comunicación abierta y observa cambios en el comportamiento.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Testimonios Reales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identify;