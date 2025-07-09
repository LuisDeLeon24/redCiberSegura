import React from 'react';
import { Shield, Users, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600 rounded-full p-6 shadow-lg">
              <Shield className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Red<span className="text-blue-600">Ciber</span>Segura
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>"Juntos podemos crear un internet más seguro y empático para todos."</strong>
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Tu plataforma educativa integral para prevenir, identificar y combatir el ciberbullying. 
            Recursos, herramientas y apoyo para adolescentes, padres y educadores.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#que-es"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Conocer más
            </a>
            <a
              href="#ia-interactiva"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Buscar ayuda ahora
            </a>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Para Adolescentes</h3>
              <p className="text-gray-600">Herramientas y recursos para protegerte y ayudar a otros</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Para Padres</h3>
              <p className="text-gray-600">Guías para acompañar y proteger a tus hijos</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Para Educadores</h3>
              <p className="text-gray-600">Recursos para crear entornos educativos seguros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;