import React, { useEffect } from "react";
import { Radio, Bell, BookOpen, Sparkles, TrendingUp } from "lucide-react";

const Channels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const channels = [
    {
      id: "updates",
      name: "AIgram Updates",
      description: "Latest news about new features, AI agents and platform improvements",
      icon: <Bell size={32} />,
      subscribers: "125K",
      posts: "342",
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
      category: "Official"
    },
    {
      id: "ai-news",
      name: "AI News",
      description: "Up-to-date news from the world of artificial intelligence and technology",
      icon: <Sparkles size={32} />,
      subscribers: "89K",
      posts: "567",
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      category: "Information"
    },
    {
      id: "prompts",
      name: "Prompt Library",
      description: "Best prompts for working with AI. Updated daily",
      icon: <BookOpen size={32} />,
      subscribers: "156K",
      posts: "892",
      imageSrc: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80",
      category: "Education"
    },
    {
      id: "english",
      name: "English Learning",
      description: "Daily lessons, tips and English language practice with AI",
      icon: <BookOpen size={32} />,
      subscribers: "203K",
      posts: "1.2K",
      imageSrc: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80",
      category: "Education"
    },
    {
      id: "trends",
      name: "AI Trends",
      description: "Analysis of trends in the AI industry and technological breakthroughs",
      icon: <TrendingUp size={32} />,
      subscribers: "67K",
      posts: "234",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      category: "Information"
    },
    {
      id: "community",
      name: "AIgram Community",
      description: "User stories, use cases and best practices",
      icon: <Radio size={32} />,
      subscribers: "178K",
      posts: "445",
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      category: "Community"
    }
  ];

  const recentPosts = [
    {
      channel: "AIgram Updates",
      title: "Meet: 50 new AI characters",
      excerpt: "We added 50 new characters from popular games and movies...",
      time: "2 hours ago",
      likes: "1.2K"
    },
    {
      channel: "Prompt Library",
      title: "Top 10 prompts for video generation",
      excerpt: "Most effective prompts for creating realistic videos...",
      time: "5 hours ago",
      likes: "892"
    },
    {
      channel: "AI News",
      title: "OpenAI announced GPT-5",
      excerpt: "New version of the model shows incredible results...",
      time: "1 day ago",
      likes: "3.4K"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
        <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Channels</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Subscribe to our official channels for up-to-date information, educational materials and AI news
            </p>
          </div>
        </div>
      </section>
      
      {/* Channels Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Popular Channels</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Educational content and news from the AIgram team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <div
                key={channel.id}
                className="glassmorphism p-6 card-hover animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={channel.imageSrc} 
                    alt={channel.name}
                    className="object-cover w-full h-full transition-transform duration-10000 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-psyco-green-DEFAULT text-white text-xs px-3 py-1 rounded-full">
                    {channel.category}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-psyco-green-DEFAULT/20 p-2 rounded-lg text-psyco-green-DEFAULT">
                    {channel.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>{channel.subscribers} subscribers</span>
                  <span>{channel.posts} posts</span>
                </div>
                
                <button className="w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Recent Posts</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fresh content from our channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="glassmorphism p-6 card-hover cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-sm text-psyco-green-DEFAULT mb-2">{post.channel}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{post.time}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Why Subscribe?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bell size={32} />,
                title: "Stay Updated",
                description: "Be the first to know about new features and AI agents"
              },
              {
                icon: <BookOpen size={32} />,
                title: "Learn",
                description: "Get useful tips and educational materials"
              },
              {
                icon: <Sparkles size={32} />,
                title: "Get Inspired",
                description: "See use cases from other users"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="glassmorphism p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Channels;
