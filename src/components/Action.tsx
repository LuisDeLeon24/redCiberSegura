import React from 'react';
import { Phone, FileText, Heart, Shield } from 'lucide-react';

const Action: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "No respondas al agresor",
      description: "No contestes mensajes ofensivos. Esto puede empeorar la situación y dar más poder al acosador."
    },
    {
      number: "2",
      title: "Documenta la evidencia",
      description: "Toma capturas de pantalla de los mensajes, comentarios o publicaciones ofensivas."
    },
    {
      number: "3",
      title: "Bloquea y reporta",
      description: "Bloquea al agresor en todas las plataformas y reporta el comportamiento a las redes sociales."
    },
    {
      number: "4",
      title: "Informa a un adulto",
      description: "Habla con padres, profesores o consejeros sobre lo que está pasando."
    },
    {
      number: "5",
      title: "Busca apoyo profesional",
      description: "Si es necesario, busca ayuda de psicólogos o consejeros especializados."
    }
  ];

  const emergencyContacts = [
    {
      name: "Línea de la Vida",
      number: "106",
      description: "Atención gratuita 24/7 para crisis emocionales",
      icon: <Phone className="h-5 w-5" />
    },
    {
      name: "ANAR (Ayuda a Niños y Adolescentes)",
      number: "900 20 20 10",
      description: "Especializada en menores en situación de riesgo",
      icon: <Heart className="h-5 w-5" />
    },
    {
      name: "Policía Nacional - Delitos Informáticos",
      number: "091",
      description: "Para denunciar delitos cibernéticos",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const resources = [
    {
      name: "Pantallas Amigas",
      description: "Organización especializada en ciberseguridad para menores",
      website: "www.pantallasamigas.net"
    },
    {
      name: "Internet Segura for Kids",
      description: "Centro de Seguridad en Internet para menores",
      website: "www.is4k.es"
    },
    {
      name: "Fundación ANAR",
      description: "Ayuda a niños y adolescentes en riesgo",
      website: "www.anar.org"
    },
    {
      name: "Save the Children",
      description: "Protección infantil y prevención del acoso",
      website: "www.savethechildren.es"
    }
  ];

  return (
    <section id="actuar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Qué Hacer si Sufres Ciberbullying?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Si estás siendo víctima de ciberbullying, no estás solo. Aquí tienes pasos claros para actuar 
            y recursos donde encontrar ayuda inmediata.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pasos a Seguir</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-red-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Phone className="h-8 w-8 text-red-600 mr-3" />
              Contactos de Emergencia
            </h3>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="text-red-600 mr-3">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                      <p className="text-lg font-bold text-red-600">{contact.number}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              Recursos de Apoyo
            </h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-1">{resource.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                  <a 
                    href={`https://${resource.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    {resource.website}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Recuerda: No Estás Solo</h3>
          <p className="text-lg mb-6">
            El ciberbullying es un problema serio, pero con la ayuda adecuada puedes superarlo. 
            Hay personas dispuestas a ayudarte las 24 horas del día.
          </p>
          <a
            href="#contacto"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Contactar con Nosotros
          </a>
        </div>
      </div>
    </section>
  );
};

export default Action;