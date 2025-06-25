import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, Shield, Zap, Heart, CheckCircle, Send, Sparkles, Award, Users } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });
  const [formResponse, setFormResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    ingredients: 0,
    rating: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            
            // Start counters when stats section is visible
            if (entry.target.id === 'stats-section') {
              startCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    // Counter for clients (0 to 1000)
    let clientCount = 0;
    const clientInterval = setInterval(() => {
      clientCount += 25;
      if (clientCount >= 1000) {
        clientCount = 1000;
        clearInterval(clientInterval);
      }
      setCounters(prev => ({ ...prev, clients: clientCount }));
    }, 30);

    // Counter for ingredients (0 to 5)
    let ingredientCount = 0;
    const ingredientInterval = setInterval(() => {
      ingredientCount += 1;
      if (ingredientCount >= 5) {
        ingredientCount = 5;
        clearInterval(ingredientInterval);
      }
      setCounters(prev => ({ ...prev, ingredients: ingredientCount }));
    }, 200);

    // Counter for rating (0 to 4.9)
    let ratingCount = 0;
    const ratingInterval = setInterval(() => {
      ratingCount += 0.1;
      if (ratingCount >= 4.9) {
        ratingCount = 4.9;
        clearInterval(ratingInterval);
      }
      setCounters(prev => ({ ...prev, rating: parseFloat(ratingCount.toFixed(1)) }));
    }, 50);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const response = `Olá, meu nome é ${formData.nome}, meu número é ${formData.telefone} e meu email é ${formData.email}, e minha dúvida é ${formData.mensagem}.`;
    setFormResponse(response);
    setShowResponse(true);
  };

  const whatsappClick = () => {
    window.open('https://wa.me/5562984902077?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Sibucaps', '_blank');
  };

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(formResponse);
    window.open(`https://wa.me/5562984902077?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.08'%3E%3Cpath d='M60 60l30-30v60l-30-30zm-30 30l30-30H0l30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 animate-float-delay"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-20 animate-float"></div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6 animate-fade-in">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Suplemento Premium
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 animate-slide-up">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SIBUCAPS
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-slide-up-delay">
                Suplemento alimentar em cápsulas com 
                <span className="font-bold text-blue-600"> Laranja Moro</span>, 
                <span className="font-bold text-purple-600"> Café Verde</span>, 
                <span className="font-bold text-blue-500"> Psyllium</span>, 
                <span className="font-bold text-purple-500"> Cromo</span> e 
                <span className="font-bold text-blue-700"> Spirulina</span>.
              </p>
              
              <div className="mb-8 animate-slide-up-delay">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border-2 border-blue-200">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="font-bold text-blue-800 text-lg">60 cápsulas de 500mg</span>
                </div>
              </div>
              
              <button 
                onClick={whatsappClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-full text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-4 animate-bounce-in"
              >
                <Phone className="inline-block mr-3" size={28} />
                WhatsApp: +55 62 8490-2077
              </button>
              
              <p className="text-gray-600 text-lg animate-fade-in-delay font-medium">
                "Gostaria de mais informações sobre o Sibucaps"
              </p>
            </div>

            {/* Right Column - Product Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 scale-110"></div>
                <div className="relative z-10 cursor-pointer" onClick={whatsappClick}>
                  <img 
                    src="/ChatGPT_Image_24_06_2025__22_30_06-removebg-preview.png" 
                    alt="Sibucaps" 
                    className="h-80 md:h-96 lg:h-[500px] w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    WhatsApp
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                  NOVO!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats-section"
        data-animate
        className="py-16 px-4 relative z-10 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="animate-fade-in">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-xl opacity-90">Clientes Satisfeitos</div>
            </div>
            <div className="animate-fade-in-delay">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{counters.ingredients}</div>
              <div className="text-xl opacity-90">Ingredientes Premium</div>
            </div>
            <div className="animate-fade-in-delay-2">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{counters.rating}★</div>
              <div className="text-xl opacity-90">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 
            id="benefits-title"
            data-animate
            className={`text-4xl md:text-6xl font-bold text-center text-gray-900 mb-20 transition-all duration-1000 ${
              isVisible['benefits-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Benefícios do <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sibucaps</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-16 h-16 text-blue-500" />,
                title: "Energia Natural",
                description: "Café Verde proporciona energia sustentada sem os picos de cafeína tradicional",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                icon: <Heart className="w-16 h-16 text-purple-500" />,
                title: "Saúde Cardiovascular",
                description: "Laranja Moro rica em antioxidantes para proteção cardiovascular",
                gradient: "from-purple-400 to-purple-600"
              },
              {
                icon: <Shield className="w-16 h-16 text-blue-600" />,
                title: "Controle Glicêmico",
                description: "Cromo auxilia no metabolismo de carboidratos e controle da glicose",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: <Star className="w-16 h-16 text-purple-600" />,
                title: "Digestão Saudável",
                description: "Psyllium e Spirulina promovem saúde digestiva e intestinal",
                gradient: "from-purple-500 to-blue-500"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                id={`benefit-${index}`}
                data-animate
                className={`bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible[`benefit-${index}`] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`text-center mb-6 p-4 bg-gradient-to-br ${benefit.gradient} rounded-2xl inline-block`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 
            id="ingredients-title"
            data-animate
            className={`text-4xl md:text-6xl font-bold text-center text-gray-900 mb-20 transition-all duration-1000 ${
              isVisible['ingredients-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Ingredientes <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Premium</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Laranja Moro",
                description: "Rica em antocianinas e vitamina C, com propriedades antioxidantes excepcionais",
                color: "blue"
              },
              {
                name: "Café Verde",
                description: "Fonte natural de ácido clorogênico, promove energia e metabolismo saudável",
                color: "purple"
              },
              {
                name: "Psyllium",
                description: "Fibra solúvel que auxilia na saúde digestiva e sensação de saciedade",
                color: "blue"
              },
              {
                name: "Cromo",
                description: "Mineral essencial para o metabolismo de carboidratos e proteínas",
                color: "purple"
              },
              {
                name: "Spirulina",
                description: "Superalimento rico em proteínas, vitaminas e minerais essenciais",
                color: "blue"
              }
            ].map((ingredient, index) => (
              <div
                key={index}
                id={`ingredient-${index}`}
                data-animate
                className={`flex items-start space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 border-l-4 border-${ingredient.color}-500 ${
                  isVisible[`ingredient-${index}`] 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${ingredient.color}-400 to-${ingredient.color}-600 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">{ingredient.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{ingredient.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 relative z-10 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto">
          <h2 
            id="contact-title"
            data-animate
            className={`text-4xl md:text-6xl font-bold text-center text-white mb-12 transition-all duration-1000 ${
              isVisible['contact-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Entre em <span className="text-blue-200">Contato</span>
          </h2>
          
          <div 
            id="contact-form"
            data-animate
            className={`bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl transition-all duration-1000 ${
              isVisible['contact-form'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {!showResponse ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-lg font-semibold text-gray-700 mb-3">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 text-lg"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-lg font-semibold text-gray-700 mb-3">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 text-lg"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 text-lg"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-lg font-semibold text-gray-700 mb-3">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 resize-none text-lg"
                    placeholder="Sua dúvida ou mensagem..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-xl"
                >
                  <Send className="mr-3" size={24} />
                  Enviar Mensagem
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Mensagem Criada!</h3>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
                  <p className="text-gray-700 italic text-lg leading-relaxed">{formResponse}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={sendToWhatsApp}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    Enviar via WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setShowResponse(false);
                      setFormData({ nome: '', telefone: '', email: '', mensagem: '' });
                      setFormResponse('');
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
                  >
                    Nova Mensagem
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gallcaps
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sua saúde e bem-estar são nossa prioridade. Produtos de qualidade premium para uma vida melhor.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-400">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span className="text-lg">Goiânia, Goiás</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-lg">+55 62 8490-2077</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-purple-400">Produto</h4>
              <div className="space-y-2 text-gray-400">
                <p>✓ 60 cápsulas de 500mg</p>
                <p>✓ 5 ingredientes premium</p>
                <p>✓ Qualidade garantida</p>
                <p>✓ Resultados comprovados</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2025 Gallcaps. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;