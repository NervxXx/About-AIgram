import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { Bot, Wrench, Brain, Radio, MoveRight, Sparkles } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Why Choose AIgram?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The ultimate messaging platform where every chat is an AI experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Characters",
                description: "Chat with hundreds of AI personalities from history, movies, and games",
                icon: <Bot size={32} />,
                link: "/characters"
              },
              {
                title: "AI Tools",
                description: "Specialized agents for every task - from coding to content creation",
                icon: <Wrench size={32} />,
                link: "/tools"
              },
              {
                title: "Multiple LLMs",
                description: "Access to GPT-4, DeepSeek, and Grok with a single subscription",
                icon: <Brain size={32} />,
                link: "/models"
              },
              {
                title: "Channels",
                description: "Stay updated with AI news, tutorials, and community content",
                icon: <Radio size={32} />,
                link: "/channels"
              }
            ].map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="glassmorphism p-8 card-hover animate-fade-in group hover:border-psyco-green-DEFAULT/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Endless Possibilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How AIgram transforms your daily tasks and entertainment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Entertainment",
                description: "Chat with your favorite characters and personalities",
                examples: ["Movie Characters", "Historical Figures", "Game Characters"],
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Productivity",
                description: "AI tools that help you work smarter",
                examples: ["Code Generation", "Content Creation", "Data Analysis"],
                color: "from-blue-500/20 to-cyan-500/20"
              },
              {
                title: "Education",
                description: "Learn with personalized AI tutors",
                examples: ["Language Learning", "Homework Help", "Skill Development"],
                color: "from-green-500/20 to-emerald-500/20"
              }
            ].map((useCase, index) => (
              <div
                key={index}
                className="glassmorphism p-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-32 mb-6 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center`}>
                  <Sparkles size={48} className="text-psyco-green-DEFAULT" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className="w-1.5 h-1.5 bg-psyco-green-DEFAULT rounded-full mr-2"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start with AIgram?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join millions of users already using AIgram to chat with AI agents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/characters"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Start Free
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/models"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
