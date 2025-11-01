import React, { useEffect, useState } from "react";
import { Search, Bot, Film, Gamepad2, History, Users } from "lucide-react";
import { Input } from "@/components/ui/input";

const Characters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const characters = [
    {
      id: "1",
      name: "Sherlock Holmes",
      description: "Legendary detective with sharp mind and deductive abilities. Helps with logical tasks and analysis.",
      category: "History",
      icon: <History size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1577720643272-265f08c3a875?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      id: "2",
      name: "Tony Stark",
      description: "Genius inventor and billionaire. Expert in technology and innovation.",
      category: "Movies",
      icon: <Film size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80"
    },
    {
      id: "3",
      name: "Master Chief",
      description: "Legendary warrior from Halo. Specialist in tactics and strategy.",
      category: "Games",
      icon: <Gamepad2 size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80"
    },
    {
      id: "4",
      name: "Albert Einstein",
      description: "Greatest theoretical physicist. Helps with science and mathematics.",
      category: "History",
      icon: <History size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      id: "5",
      name: "Yoda",
      description: "Wise Jedi Master from Star Wars. Mentor and philosopher.",
      category: "Movies",
      icon: <Film size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
    },
    {
      id: "6",
      name: "Geralt of Rivia",
      description: "Witcher from The Witcher. Expert in mythology and monsters.",
      category: "Games",
      icon: <Gamepad2 size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    }
  ];
  
  const categories = ["All", "History", "Movies", "Games", "Politics"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || character.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">AI Characters</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Hundreds of AI agents trained as characters from movies, games, history and politics. Chat with your favorite heroes!
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in animation-delay-200">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Find character..."
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
      
      {/* Characters Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredCharacters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCharacters.map((character, index) => (
                <div
                  key={character.id}
                  className={`glassmorphism p-6 card-hover animate-fade-in cursor-pointer ${character.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={character.imageSrc} 
                      alt={character.name}
                      className="object-cover w-full h-full transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-psyco-green-DEFAULT/20 p-2 rounded-lg text-psyco-green-DEFAULT">
                      {character.icon}
                    </div>
                    <span className="text-sm text-psyco-green-DEFAULT">{character.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{character.name}</h3>
                  <p className="text-gray-300">{character.description}</p>
                  <button className="mt-4 w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Start Chat
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No characters found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <Bot className="h-16 w-16 text-psyco-green-DEFAULT mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Over 500+ AI Characters</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Each character is trained with unique characteristics, communication style and knowledge of the original hero.
            </p>
            <button className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-colors btn-glow">
              Explore All Characters
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Characters;
