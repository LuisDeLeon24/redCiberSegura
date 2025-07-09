import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isAnonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado correctamente! Te responderemos pronto.');
    setFormData({ name: '', email: '', subject: '', message: '', isAnonymous: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      content: "ayuda@redcibersegura.org",
      link: "mailto:ayuda@redcibersegura.org"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Teléfono",
      content: "+34 900 123 456",
      link: "tel:+34900123456"
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: "Dirección",
      content: "Calle de la Ciberseguridad, 123\n28001 Madrid, España",
      link: null
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-orange-600" />,
      title: "Chat en Vivo",
      content: "Lunes a Viernes: 9:00 - 18:00",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", url: "https://facebook.com/redcibersegura" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "https://twitter.com/redcibersegura" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", url: "https://instagram.com/redcibersegura" }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contacto y Ayuda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. No dudes en contactarnos si necesitas apoyo, tienes preguntas 
            o quieres reportar una situación de ciberbullying.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-6">
              <h4 className="font-semibold text-red-800 mb-2">Emergencias</h4>
              <p className="text-red-700 text-sm">
                Si te encuentras en una situación de emergencia o riesgo inmediato, 
                contacta directamente con:
              </p>
              <ul className="mt-2 text-red-700 text-sm space-y-1">
                <li><strong>Línea de la Vida:</strong> 106</li>
                <li><strong>Emergencias:</strong> 112</li>
                <li><strong>Policía Nacional:</strong> 091</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Envíanos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="isAnonymous"
                  checked={formData.isAnonymous}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  Enviar mensaje de forma anónima
                </label>
              </div>

              {!formData.isAnonymous && (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe tu situación o pregunta..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                * Campos obligatorios. Tu privacidad está protegida según nuestra política de datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;