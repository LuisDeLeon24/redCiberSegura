import React, { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente virtual de RedCiberSegura. Estoy aquí para ayudarte con preguntas sobre ciberbullying, darte consejos personalizados y orientarte hacia los recursos que necesitas. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickActions = [
    "Estoy siendo acosado/a",
    "Cómo reportar ciberbullying",
    "Consejos de privacidad",
    "Ayuda para padres",
    "Recursos de apoyo"
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('acoso') || lowerMessage.includes('bullying') || lowerMessage.includes('siendo')) {
      return "Lamento que estés pasando por esto. Es importante que sepas que no estás solo/a y que hay ayuda disponible. Te recomiendo: 1) No respondas al agresor, 2) Documenta todo con capturas de pantalla, 3) Bloquea y reporta al acosador, 4) Habla con un adulto de confianza. Si necesitas ayuda inmediata, puedes llamar a la Línea de la Vida: 106. ¿Quieres que te ayude con algo específico?";
    }
    
    if (lowerMessage.includes('reportar') || lowerMessage.includes('denuncia')) {
      return "Para reportar ciberbullying: 1) En redes sociales: usa la función 'Reportar' o 'Denunciar' en cada plataforma, 2) Guarda evidencia (capturas de pantalla), 3) Para casos graves: contacta a la Policía Nacional (091) o Guardia Civil (062), 4) Informa a tu centro educativo si involucra compañeros. ¿Necesitas ayuda con alguna plataforma específica?";
    }
    
    if (lowerMessage.includes('privacidad') || lowerMessage.includes('proteger')) {
      return "Consejos de privacidad: 1) Revisa la configuración de privacidad en todas tus redes sociales, 2) No compartas información personal (dirección, teléfono, ubicación), 3) Limita quién puede ver tus publicaciones, 4) Ten cuidado con las fotos que compartes, 5) Usa contraseñas seguras y únicas. ¿Quieres que te ayude con alguna red social específica?";
    }
    
    if (lowerMessage.includes('padre') || lowerMessage.includes('padres') || lowerMessage.includes('familia')) {
      return "Consejos para padres: 1) Mantén comunicación abierta con tus hijos sobre su vida digital, 2) Establece reglas claras sobre el uso de internet, 3) Observa cambios en el comportamiento, 4) Aprende sobre las plataformas que usan, 5) No les quites inmediatamente el acceso a internet si reportan acoso. ¿Necesitas ayuda con algún aspecto específico?";
    }
    
    if (lowerMessage.includes('recurso') || lowerMessage.includes('ayuda') || lowerMessage.includes('apoyo')) {
      return "Recursos de apoyo disponibles: 1) Línea de la Vida: 106 (24/7), 2) ANAR: 900 20 20 10 (especializada en menores), 3) Pantallas Amigas: www.pantallasamigas.net, 4) Internet Segura for Kids: www.is4k.es. También puedes contactar con nosotros en la sección de contacto. ¿Necesitas información sobre algún recurso específico?";
    }
    
    return "Gracias por tu mensaje. Puedo ayudarte con temas relacionados con ciberbullying, incluyendo cómo identificarlo, prevenirlo, reportarlo y encontrar recursos de apoyo. También puedo darte consejos sobre privacidad digital y seguridad en internet. ¿Hay algo específico en lo que te gustaría que te ayude?";
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          text: getAIResponse(inputText),
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
      
      setInputText('');
    }
  };

  const handleQuickAction = (action: string) => {
    setInputText(action);
  };

  return (
    <section id="ia-interactiva" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Asistente Virtual RedCiberSegura
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obtén consejos personalizados, orientación y recursos de apoyo a través de nuestro 
            asistente virtual especializado en ciberbullying.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex items-center">
            <Bot className="h-6 w-6 mr-3" />
            <span className="font-semibold">Asistente RedCiberSegura</span>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isUser 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <div className="flex items-start">
                    {!message.isUser && (
                      <Bot className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    )}
                    {message.isUser && (
                      <User className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser ? 'text-blue-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Acciones rápidas:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;