import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "Nueva Herramienta de Instagram para Combatir el Acoso",
      excerpt: "Instagram lanza funciones mejoradas de detección automática de comentarios ofensivos y herramientas para proteger a los usuarios más jóvenes.",
      author: "Equipo RedCiberSegura",
      date: "2024-01-15",
      category: "Tecnología",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Campaña Nacional 'Conecta con Respeto' en Centros Educativos",
      excerpt: "Más de 500 colegios participan en la campaña nacional para promover la convivencia digital saludable entre estudiantes.",
      author: "María González",
      date: "2024-01-10",
      category: "Educación",
      image: "https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Entrevista: Psicóloga Especialista en Ciberbullying Adolescente",
      excerpt: "Conversamos con la Dra. Ana Martínez sobre los efectos psicológicos del ciberbullying y estrategias de recuperación.",
      author: "Carlos Ruiz",
      date: "2024-01-05",
      category: "Psicología",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Guía de Privacidad para Padres: TikTok y Snapchat",
      excerpt: "Aprende a configurar correctamente las opciones de privacidad en las aplicaciones favoritas de tus hijos adolescentes.",
      author: "Elena Sánchez",
      date: "2024-01-02",
      category: "Privacidad",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Testimonio: Cómo Superé el Ciberbullying y Ayudo a Otros",
      excerpt: "La historia inspiradora de Laura, quien transformó su experiencia con el ciberbullying en una misión de ayuda a otros jóvenes.",
      author: "Laura Jiménez",
      date: "2023-12-28",
      category: "Testimonios",
      image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Inteligencia Artificial: Aliada en la Detección de Ciberbullying",
      excerpt: "Cómo los algoritmos de IA están siendo utilizados para identificar y prevenir el acoso digital en tiempo real.",
      author: "Tech Team",
      date: "2023-12-25",
      category: "Innovación",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const categories = ["Todos", "Tecnología", "Educación", "Psicología", "Privacidad", "Testimonios", "Innovación"];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Blog y Noticias
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente informado con las últimas noticias, investigaciones y recursos sobre ciberbullying 
            y seguridad digital.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('es-ES')}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  
                  <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Leer más
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md">
            Ver Más Artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;