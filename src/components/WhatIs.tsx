import React from 'react';
import { AlertTriangle, MessageCircle, User, Eye, Smartphone } from 'lucide-react';

const WhatIs: React.FC = () => {
  const types = [
    {
      icon: <MessageCircle className="h-8 w-8 text-red-500" />,
      title: "Acoso por Mensajes",
      description: "Envío repetitivo de mensajes ofensivos, amenazas o insultos a través de redes sociales, WhatsApp, etc."
    },
    {
      icon: <User className="h-8 w-8 text-orange-500" />,
      title: "Suplantación de Identidad",
      description: "Crear perfiles falsos para hacerse pasar por otra persona con fines maliciosos."
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-500" />,
      title: "Exclusión Digital",
      description: "Aislar intencionalmente a alguien de grupos, chats o actividades en línea."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      title: "Difusión de Contenido",
      description: "Compartir fotos, videos o información privada sin consentimiento para avergonzar."
    }
  ];

  return (
    <section id="que-es" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Qué es el Ciberbullying?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            El ciberbullying es el uso de tecnologías digitales para intimidar, acosar o humillar a otra persona 
            de forma repetida y deliberada. Conocer sus formas nos ayuda a identificarlo y prevenirlo.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">Datos Importantes</h3>
              <p className="text-yellow-700 mt-1">
                <strong>37% de los jóvenes</strong> han sido víctimas de ciberbullying y <strong>15%</strong> admiten haber acosado a otros en línea.
                El <strong>95%</strong> de los adolescentes que presencian ciberbullying no denuncian los incidentes.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {types.map((type, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {type.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Definición Completa</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El ciberbullying incluye comportamientos como enviar mensajes hirientes, difundir rumores, 
            compartir fotos o videos embarazosos, crear páginas web ofensivas, o excluir a alguien de grupos en línea.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Características clave:</strong> Es repetitivo, intencional, implica un desequilibrio de poder, 
            y ocurre a través de medios digitales como redes sociales, mensajería instantánea, correos electrónicos, 
            videojuegos en línea, etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;