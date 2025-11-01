import React, { useEffect, useState } from "react";
import { Search, Video, Briefcase, GraduationCap, Code, Palette, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";

const Tools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const tools = [
    {
      id: "1",
      name: "Video Prompt Generator",
      description: "AI assistant for creating detailed prompts for video generation. Helps create descriptions for Runway, Pika and other services.",
      category: "Creative",
      icon: <Video size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      id: "2",
      name: "Business Analyst",
      description: "Business data analysis, reporting and forecasting. Helps in making strategic decisions.",
      category: "Business",
      icon: <Briefcase size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      id: "3",
      name: "Study Assistant",
      description: "Creating essays, papers and assignments for students. Explaining complex topics.",
      category: "Education",
      icon: <GraduationCap size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
    },
    {
      id: "4",
      name: "Code Assistant",
      description: "Help with writing, debugging and optimizing code. Support for all popular programming languages.",
      category: "Development",
      icon: <Code size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80"
    },
    {
      id: "5",
      name: "Design Consultant",
      description: "Advice on UI/UX design, color schemes and composition. Generating ideas for creative projects.",
      category: "Creative",
      icon: <Palette size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
    },
    {
      id: "6",
      name: "Marketing Specialist",
      description: "Creating content strategies, market analysis and advertising campaigns.",
      category: "Business",
      icon: <TrendingUp size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&q=80"
    }
  ];
  
  const categories = ["Creative", "Business", "Education", "Development"];
  const [activeCategory, setActiveCategory] = useState("Creative");
  
  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">AI Tools</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              AI agents trained for various tools across different fields. From content creation to business analytics.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in animation-delay-200">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Find tool..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-psyco-black-DEFAULT border-psyco-green-muted/50 w-full"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex gap-2 overflow-x-auto pb-2 no-scrollbar flex-nowrap md:justify-end">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-psyco-green-DEFAULT text-white"
                      : "bg-psyco-black-DEFAULT text-gray-300 hover:bg-psyco-black-card"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <div
                  key={tool.id}
                  className={`glassmorphism p-6 card-hover animate-fade-in cursor-pointer ${tool.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={tool.imageSrc} 
                      alt={tool.name}
                      className="object-cover w-full h-full transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-psyco-green-DEFAULT/20 p-2 rounded-lg text-psyco-green-DEFAULT">
                      {tool.icon}
                    </div>
                    <span className="text-sm text-psyco-green-DEFAULT">{tool.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-300">{tool.description}</p>
                  <button className="mt-4 w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Use Tool
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No tools found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Tool Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each tool is specialized for solving specific tasks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expertise",
                description: "Deep knowledge in their field",
                icon: <GraduationCap size={32} />
              },
              {
                title: "Speed",
                description: "Instant results and answers",
                icon: <TrendingUp size={32} />
              },
              {
                title: "Accuracy",
                description: "Proven algorithms and data",
                icon: <Code size={32} />
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glassmorphism p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
