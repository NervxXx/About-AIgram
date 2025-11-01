import React, { useEffect } from "react";
import { Sparkles, Zap, Brain, MoveRight } from "lucide-react";

const Models = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = [
    {
      id: "gpt",
      name: "GPT-5",
      provider: "OpenAI",
      description: "The most advanced language model from OpenAI. Excels at creative tasks, analysis and text generation.",
      icon: <Brain size={32} />,
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      features: [
        "Creative Writing",
        "Deep Analysis",
        "Coding",
        "Multimodal"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "deepseek",
      name: "DeepSeek",
      provider: "DeepSeek AI",
      description: "Powerful model focused on logic and mathematics. Ideal for technical tasks and programming.",
      icon: <Sparkles size={32} />,
      imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
      features: [
        "Mathematics",
        "Programming",
        "Logical Analysis",
        "Scientific Calculations"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "grok",
      name: "Grok",
      provider: "xAI",
      description: "Model with access to real-time X (Twitter) data. Features up-to-date information and lively communication style.",
      icon: <Zap size={32} />,
      imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
      features: [
        "Real-time Data",
        "Trend Analysis",
        "Lively Style",
        "Social Context"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">AI Models</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Access to the best LLM models with one subscription. GPT-5, DeepSeek, Grok - choose the right model for any task.
            </p>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Available Models</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              One subscription for access to all top AI models
            </p>
          </div>
          
          {models.map((model, index) => (
            <div 
              key={model.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-20`}></div>
                    <img 
                      src={model.imageSrc} 
                      alt={model.name} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`bg-gradient-to-br ${model.color} p-3 rounded-xl text-white`}>
                    {model.icon}
                  </div>
                  <span className="text-sm text-gray-400">{model.provider}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{model.name}</h3>
                <p className="text-gray-300 mb-6 text-lg">{model.description}</p>
                
                <div className="bg-psyco-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">Strengths:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-6 bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-colors btn-glow inline-flex items-center justify-center">
                  Start Using
                  <MoveRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Why Multiple Models?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each model has its own strengths
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glassmorphism p-8 text-center">
              <Brain className="h-12 w-12 text-psyco-green-DEFAULT mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">GPT-5</h3>
              <p className="text-gray-300">For creative tasks and deep analysis</p>
            </div>
            
            <div className="glassmorphism p-8 text-center">
              <Sparkles className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">DeepSeek</h3>
              <p className="text-gray-300">For technical and mathematical tasks</p>
            </div>
            
            <div className="glassmorphism p-8 text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Grok</h3>
              <p className="text-gray-300">For up-to-date information and trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">One Subscription - All Models</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              No need to choose between models. With AIgram you get access to all top LLMs with one subscription.
            </p>
            <button className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-colors btn-glow">
              Start Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Models;
