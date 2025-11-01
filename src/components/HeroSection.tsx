import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bot, MessageSquare, Sparkles, Wrench } from "lucide-react";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      {/* Animated Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-200 ease-out"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-psyco-green-DEFAULT/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-90 left-10 text-psyco-green-DEFAULT/20 animate-float hidden md:block">
        <Bot size={60} />
      </div>
      <div className="absolute bottom-20 right-10 text-psyco-green-DEFAULT/20 animate-float animation-delay-200 hidden md:block">
        <MessageSquare size={60} />
      </div>
      <div className="absolute top-40 right-20 text-blue-500/20 animate-float animation-delay-100 hidden md:block">
        <Sparkles size={50} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-psyco-green-DEFAULT/10 border border-psyco-green-DEFAULT/30 rounded-full text-psyco-green-DEFAULT text-sm font-medium">
            AI-powered messaging reimagined
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in animation-delay-100">
          Welcome to{" "}
          <span className="text-glow text-psyco-green-DEFAULT">AIgram</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-200">
          Experience the future of messaging with AI agents as your contacts. Chat with historical figures, 
          use powerful AI tools, and access multiple LLM models—all in one familiar Telegram-like interface.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-300">
          <Link
            to="/characters"
            className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center btn-glow"
          >
            <Bot className="mr-2" size={20} />
            Meet AI Characters
          </Link>
          <Link
            to="/tools"
            className="bg-transparent border-2 border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
          >
            <Wrench className="mr-2" size={20} />
            Explore AI Tools
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in animation-delay-400">
          {[
            { value: "500+", label: "AI Characters" },
            { value: "50+", label: "AI Tools" },
            { value: "3", label: "Premium LLMs" },
            { value: "1", label: "Unified Platform" }
          ].map((stat, index) => (
            <div key={index} className="glassmorphism p-6 text-center hover:bg-white/5 transition-colors">
              <div className="text-3xl font-bold text-psyco-green-DEFAULT mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
