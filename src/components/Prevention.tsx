import React from 'react';
import { Lock, Eye, Users, BookOpen } from 'lucide-react';

const Prevention: React.FC = () => {
  const digitalPractices = [
    {
      icon: <Lock className="h-6 w-6 text-green-600" />,
      title: "Configura tu Privacidad",
      tips: [
        "Revisa regularmente la configuración de privacidad en todas tus redes sociales",
        "Limita quién puede ver tus publicaciones y información personal",
        "Controla quién puede enviarte mensajes directos",
        "Desactiva la geolocalización en tus publicaciones"
      ]
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Piensa Antes de Compartir",
      tips: [
        "No compartas información personal como dirección, teléfono o ubicación",
        "Evita publicar fotos comprometedoras o íntimas",
        "Piensa si estarías cómodo/a si tus padres o profesores vieran el contenido",
        "Recuerda que internet es permanente: lo que publicas puede durar para siempre"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Interactúa Responsablemente",
      tips: [
        "Trata a otros como te gustaría ser tratado",
        "No respondas a provocaciones o mensajes ofensivos",
        "Reporta comportamientos inapropiados en las plataformas",
        "Apoya a las víctimas de ciberbullying cuando las veas"
      ]
    },
    {
      icon: <BookOpen className="h-6 w-6 text-orange-600" />,
      title: "Edúcate Continuamente",
      tips: [
        "Mantente al día con las nuevas plataformas y riesgos",
        "Participa en talleres sobre seguridad digital",
        "Habla con padres, profesores y amigos sobre experiencias en línea",
        "Conoce los términos y condiciones de las plataformas que usas"
      ]
    }
  ];

  const witnessActions = [
    "No seas un espectador pasivo: actúa cuando veas ciberbullying",
    "Apoya a la víctima con mensajes privados de apoyo",
    "No compartas ni 'likes' contenido que acose a alguien",
    "Reporta el comportamiento a la plataforma correspondiente",
    "Informa a un adulto de confianza sobre la situación",
    "Documenta la evidencia si es necesario (capturas de pantalla)"
  ];

  return (
    <section id="prevenir" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Consejos para Prevenir el Ciberbullying
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La prevención es la mejor defensa. Aprende buenas prácticas digitales y cómo proteger 
            tu privacidad y bienestar en línea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {digitalPractices.map((practice, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-4">
                {practice.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{practice.title}</h3>
              </div>
              <ul className="space-y-2">
                {practice.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Si Eres Testigo de Ciberbullying</h3>
          <p className="text-gray-700 mb-6">
            Los espectadores tienen un papel crucial en detener el ciberbullying. Tu acción puede marcar la diferencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {witnessActions.map((action, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{action}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reglas de Oro para la Convivencia Digital</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="font-semibold text-gray-900 mb-2">Respeto</h4>
              <p className="text-gray-600 text-sm">Trata a otros como quieres ser tratado</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-4">💭</div>
              <h4 className="font-semibold text-gray-900 mb-2">Reflexión</h4>
              <p className="text-gray-600 text-sm">Piensa antes de publicar o comentar</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Protección</h4>
              <p className="text-gray-600 text-sm">Cuida tu privacidad y la de otros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prevention;