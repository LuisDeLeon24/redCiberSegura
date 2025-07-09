import React from 'react';
import { Shield, Heart, Users, Book } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Qué es el Ciberbullying?', href: '#que-es' },
    { name: 'Cómo Identificarlo', href: '#identificar' },
    { name: 'Consejos de Prevención', href: '#prevenir' },
    { name: 'Qué Hacer', href: '#actuar' },
    { name: 'Asistente IA', href: '#ia-interactiva' }
  ];

  const resources = [
    { name: 'Blog y Noticias', href: '#blog' },
    { name: 'Recursos Educativos', href: '#recursos' },
    { name: 'Guías para Padres', href: '#padres' },
    { name: 'Material para Educadores', href: '#educadores' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Investigaciones', href: '#investigaciones' }
  ];

  const legalLinks = [
    { name: 'Política de Privacidad', href: '#privacidad' },
    { name: 'Términos de Uso', href: '#terminos' },
    { name: 'Cookies', href: '#cookies' },
    { name: 'Aviso Legal', href: '#aviso-legal' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">RedCiberSegura</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Plataforma educativa dedicada a la prevención y combate del ciberbullying. 
              Juntos creamos un internet más seguro y empático para todos.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-blue-400">
                <Heart className="h-5 w-5 mr-2" />
                <span className="text-sm">Para Familias</span>
              </div>
              <div className="flex items-center text-green-400">
                <Users className="h-5 w-5 mr-2" />
                <span className="text-sm">Para Educadores</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Emergency */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal y Ayuda</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-200 mb-2">Emergencias</h4>
              <p className="text-red-200 text-sm mb-2">Línea de la Vida: 106</p>
              <p className="text-red-200 text-sm">Emergencias: 112</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Book className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-300">
                © 2024 RedCiberSegura. Todos los derechos reservados.
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                Desarrollado con ❤️ para crear un internet más seguro
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Última actualización: Enero 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;