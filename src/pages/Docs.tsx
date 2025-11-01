import React, { useEffect } from "react";

const Docs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Add scroll-padding-top to html element to account for fixed header
    document.documentElement.style.scrollPaddingTop = '100px';
    
    return () => {
      // Clean up the style when component unmounts
      document.documentElement.style.scrollPaddingTop = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black" >
      {/* Main Container */}
      <div className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-28 bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800 max-h-[calc(100vh-10rem)] overflow-y-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Documentation</h3>
              <nav className="space-y-2">
                <a href="#what-is-aigram" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">What is AIgram</a>
                <a href="#why-now" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">Why Now?</a>
                <a href="#the-problem" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">The Problem</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">How AIgram Works</a>
                <a href="#getting-started" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">Getting Started</a>
                <a href="#advantages" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">Platform Advantages</a>
                <a href="#audience" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">Who is AIgram for?</a>
                <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">Pricing</a>
                <a href="#technologies" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">Technologies</a>
                <a href="#roadmap" className="block text-gray-400 hover:text-white transition-colors text-sm py-1.5 hover:bg-gray-800/50 px-3 rounded">Development Plans</a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">AIgram Documentation</h1>
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">AIgram — a platform for communicating with AI agents</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A unified AI platform that unites hundreds of intelligent assistants and various AI models in a familiar messenger interface. A single place for all your needs — from learning and entertainment to work and development.
              </p>
            </div>
          </section>

          {/* What is AIgram */}
          <section id="what-is-aigram" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">What is AIgram</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                AIgram is a next-generation messenger for communicating with artificial intelligence. It feels similar to the familiar Telegram: a chat list, contacts, and messages. 
              </p>
              <p>
                However, instead of live chat partners, it features hundreds of specialized AI agents, powered by powerful language models (GPT-4/5, Claude, DeepSeek, Grok, and others). 
              </p>
              <p>
                The platform combines all modern AI tools in a single app with a user-friendly chat interface. It is the first service of its kind to offer this approach without the need to switch between disparate AI services.
              </p>
            </div>
          </section>

          {/* Why Now? */}
          <section id="why-now" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">Why Now?</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <p className="text-lg text-gray-300 mb-6">
                  The artificial intelligence market is experiencing a real boom, and demand for user-friendly AI tools is growing exponentially. The global market for AI-powered solutions is growing by approximately 37% annually, and the chatbot industry is estimated to be worth $10.5 billion by 2026—audience interest is colossal.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Market Opportunity</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-gray-300">37% annual growth in AI solutions market</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-gray-300">$10.5B chatbot market by 2026</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-gray-300">No direct competitors with similar unified approach</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">First-Mover Advantage</h3>
                    <p className="text-gray-300">
                      AIgram is entering the market at an opportune moment, offering a unique solution at the intersection of messaging apps and AI. The growing interest in AI and the lack of a similar unified product create ideal conditions for AIgram to quickly gain popularity among a wide range of users.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-300 text-sm">
                    At the same time, users are overwhelmed by a multitude of disparate services, each covering only specific AI use cases. Now is the perfect time for a universal platform that brings together all the best features in one place.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem We're Solving */}
          <section id="the-problem" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">The Problem We're Solving</h2>
            <div className="space-y-6">
              <p className="text-gray-300">
                Today, AI users face a number of challenges in the AI services market:
              </p>
              
              <div className="grid md:grid-cols-1 gap-6">
                {/* Problem Card 1 */}
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Service Fragmentation</h3>
                      <p className="text-gray-400">Users have to switch between different apps and websites for different tasks (chatbots, translators, code assistants, etc.).</p>
                    </div>
                  </div>
                </div>

                {/* Problem Card 2 */}
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">High Costs</h3>
                      <p className="text-gray-400">Each platform requires a separate paid subscription, which adds up to a high cost.</p>
                    </div>
                  </div>
                </div>

                {/* Problem Card 3 */}
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Complexity</h3>
                      <p className="text-gray-400">There's no single, intuitive interface to bring all AI capabilities together, making navigation and management difficult.</p>
                    </div>
                  </div>
                </div>

                {/* Problem Card 4 */}
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Limited Functionality</h3>
                      <p className="text-gray-400">Most AI chats don't support group conversations, organizing conversations into folders, searching through history, and other conveniences of modern messengers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl">
                <p className="text-lg text-blue-300 font-medium">
                  AIgram was created to solve all these problems with a single solution in a single app.
                </p>
              </div>
            </div>
          </section>

          {/* How AIgram Works */}
          <section id="how-it-works" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">How AIgram Works</h2>
            <p className="text-gray-300">
              AIgram integrates several key components to meet all user AI needs:
            </p>
            
            <div className="space-y-8 mt-8">
              {/* Characters */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-full md:w-1/4">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Characters</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300">
                      AI versions of famous historical figures, movie and game heroes, and even modern public figures. You can converse with "digital avatars" of Marcus Aurelius or, say, Elon Musk—the agents mimic the chosen character's communication style and knowledge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-full md:w-1/4">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Tools</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300">
                      Specialized AI assistants for specific tasks. From business analysis and content generation to essay writing assistance or text translation—each agent is tailored to its specific task to deliver the most relevant results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Models */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-full md:w-1/4">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Models</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 mb-4">
                      Unified access to several advanced language models within a single platform. AIgram integrates various LLMs, allowing users to flexibly choose which model is best suited for each specific chat or request.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['GPT-3.5/4/5', 'Claude (Haiku, Sonnet, Opus)', 'DeepSeek', 'Grok'].map((model) => (
                        <span key={model} className="px-3 py-1 bg-gray-800/50 text-blue-200 rounded-full text-sm">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Channels */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-full md:w-1/4">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Channels</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 mb-3">
                      Informational and educational feeds maintained by the AIgram team. These channels publish:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>News about the project's development</li>
                      <li>App updates and new features</li>
                      <li>Tips on using AI effectively</li>
                      <li>Tutorials on creating successful prompts</li>
                      <li>And much more</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section id="getting-started" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">Getting Started with AIgram</h2>
            <p className="text-gray-300">
              Follow these simple steps to start your journey with AIgram:
            </p>
            
            <div className="space-y-6 mt-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-400">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Create an Account</h3>
                  <p className="text-gray-400">
                    Download the AIgram app from the App Store or Google Play, or access it via web browser. 
                    Sign up using your email, phone number, or social media accounts.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-400">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Explore Available AI Agents</h3>
                  <p className="text-gray-400">
                    Browse through the collection of AI agents, tools, and characters. 
                    Use the search function or categories to find what you need.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-400">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Start Chatting</h3>
                  <p className="text-gray-400">
                    Select an AI agent and start a conversation. You can ask questions, 
                    request assistance, or just have an interesting discussion.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-400">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Customize Your Experience</h3>
                  <p className="text-gray-400">
                    Access settings to personalize your AIgram experience. Set your preferred language, 
                    notification preferences, and manage your subscription if you choose to upgrade.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl">
                <p className="text-lg text-blue-300 font-medium">
                  Ready to get started? <a href="/signup" className="text-blue-400 hover:text-blue-300 underline">Create your account</a> now and begin exploring the world of AI conversations!
                </p>
              </div>
            </div>
          </section>

          {/* Platform Advantages */}
          <section id="advantages" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">Platform Advantages</h2>
            <p className="text-gray-300">
              AIgram offers several advantages that distinguish it from other AI solutions:
            </p>

            <div className="grid md:grid-cols-1 gap-6 mt-8">
              {/* Advantage 1 */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Unified Platform</h3>
                    <p className="text-gray-400">All AI capabilities are gathered in one place. No need to manage dozens of different apps: AIgram saves you time and effort by providing a single hub for communicating with AI.</p>
                  </div>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost Savings</h3>
                    <p className="text-gray-400">One service instead of several. By subscribing to AIgram, users gain access to multiple agents and models, which is significantly cheaper than paying for each AI service separately.</p>
                  </div>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h7.5M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Familiar Interface</h3>
                    <p className="text-gray-400">The entry barrier is virtually zero. The app's interface resembles a classic chat messenger, making it as easy to get started with AIgram as chatting on Telegram. There's no need to learn complex new tools – everything is intuitive.</p>
                  </div>
                </div>
              </div>

              {/* Advantage 4 */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Advanced Functionality</h3>
                    <p className="text-gray-400">AIgram offers features unavailable in traditional AI chats. You can conduct group chats with multiple agents at once, brainstorming with an entire AI team. Organize your conversations into folders, pin important messages, and search through your entire history—all the conveniences of modern messaging apps.</p>
                  </div>
                </div>
              </div>

              {/* Advantage 5 */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Flexibility</h3>
                    <p className="text-gray-400">The platform is suitable for both entertainment and work. Users choose the most appropriate interaction model and format for the task at hand: whether it's a creative dialogue with a literary character or financial statement analysis by a real business analyst. Advanced users can customize model parameters (temperature, context tokens) and even create their own AI agents for unique scenarios.</p>
                  </div>
                </div>
              </div>

              {/* Advantage 6 */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Scalability</h3>
                    <p className="text-gray-400">AIgram grows with your needs. There are solutions for everyone: from a free basic plan to a professional plan for businesses. The platform can serve both individual enthusiasts and enterprise-level teams without sacrificing quality or speed thanks to its modern architecture and sophisticated infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who is AIgram for? */}
          <section id="audience" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">Who is AIgram for?</h2>
            <p className="text-gray-300">
              The AIgram platform is aimed at a broad and advanced audience, offering value to users with different goals and interests:
            </p>

            <div className="grid md:grid-cols-1 gap-6 mt-8">
              {/* Students and Schoolchildren */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Students and Schoolchildren</h3>
                    <p className="text-gray-400">AIgram can be a useful tool for academic tasks. Intelligent agents can help formulate essay ideas, simplify complex topics, translate text, or suggest grammatically correct wording. Many of these features are available in the free plan, making the platform accessible to students.</p>
                  </div>
                </div>
              </div>

              {/* Professionals and Business */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professionals and Business Representatives</h3>
                    <p className="text-gray-400">AIgram helps improve work efficiency: from preliminary data analysis and content generation to speeding up routine tasks. Within the platform, agents can be used to generate reports, prepare presentations, and conduct brainstorming sessions. Agents can be customized to suit company needs and connected to APIs for process automation.</p>
                  </div>
                </div>
              </div>

              {/* Developers */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Developers and Technical Specialists</h3>
                    <p className="text-gray-400">For technical audiences, AIgram offers flexible API integration. Developers can use their own access keys to language models, manage agent behavior, and embed them into their own solutions. The platform allows for fine-tuning of functionality and interaction scenarios.</p>
                  </div>
                </div>
              </div>

              {/* Technology Enthusiasts */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Technology and Creativity Enthusiasts</h3>
                    <p className="text-gray-400">Users interested in technology and entertainment will appreciate the ability to interact with AI agents inspired by characters from history, culture, and fictional worlds. AIgram is also suitable for generating ideas, texts, and creative experiments, turning interaction with AI into an engaging and educational experience.</p>
                  </div>
                </div>
              </div>

              {/* Researchers */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Researchers and Experimenters</h3>
                    <p className="text-gray-400">The platform offers extensive opportunities for testing various language models, customizing prompts, and creating custom agents. This is especially useful for those studying AI or wanting to customize unconventional interaction scenarios. Advanced plans offer advanced features and full access to the AIgram technology stack.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">Pricing</h2>
            <p className="text-gray-300">
              Convenient pricing plans are available to suit different needs:
            </p>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {/* Free Plan */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">Free</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">$0/month</span>
                </div>
                <p className="text-gray-400 mb-4">Perfect for trying out AIgram's basic features</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>50 messages per month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access to 10+ popular AI agents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic models (GPT-3.5, Claude Haiku)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>30-day message history</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                  Get Started
                </button>
              </div>

              {/* Plus Plan */}
              <div className="bg-gray-900/50 p-6 rounded-xl border-2 border-blue-500/50 hover:border-blue-500 transition-colors transform hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Plus</h3>
                    <span className="text-blue-300 text-sm font-medium">Most Popular</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">$25/month</span>
                </div>
                <p className="text-gray-400 mb-4">Ideal for regular users and small teams</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>500 messages per month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access to 50+ AI agents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Advanced models (GPT-4, Claude Sonnet)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>6-month message history</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Group chats with multiple AIs</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
                  Choose Plus
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">Pro</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">$75/month</span>
                </div>
                <p className="text-gray-400 mb-4">For power users and businesses</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited messages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>200+ AI agents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>All models (GPT-5, Claude Opus, DeepSeek Pro, Grok)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited message history</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Create custom AI agents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access to platform API</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                  Go Pro
                </button>
              </div>

              {/* API Plan */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">API</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">$5/month + usage</span>
                </div>
                <p className="text-gray-400 mb-4">For developers and integrators</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>500 API calls/month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Use your own API keys</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Plus-level platform access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Integration support</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                  Developer Access
                </button>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl">
              <p className="text-lg text-blue-300 font-medium">
                All plans include a 14-day money-back guarantee. Start with Free and upgrade anytime. Need more? <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Contact us</a> for enterprise solutions.
              </p>
            </div>
          </section>

          {/* Technologies and Architecture */}
          <section id="technologies" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">Technologies and Architecture</h2>
            
            <div className="mt-8 space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <p className="text-lg text-gray-300 mb-8">
                  Under the hood, AIgram is powered by a modern technology stack that ensures high performance and reliability. The platform's architecture is modular and scalable, allowing for quick addition of new features and agents without rewriting the core system.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Backend Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 01-1.022.547l-2.387.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547L2 18m8-12h4l1 5-2 1-1-5z"></path>
                      </svg>
                      Backend Stack
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-white">FastAPI</h4>
                          <p className="text-sm text-gray-400">High-performance web framework for building APIs with Python</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-white">SQLModel</h4>
                          <p className="text-sm text-gray-400">Modern database ORM with type hints and async support</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-white">LangChain</h4>
                          <p className="text-sm text-gray-400">Framework for developing applications powered by language models</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-white">OpenRouter</h4>
                          <p className="text-sm text-gray-400">Unified API gateway for multiple LLM providers</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Frontend Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      Frontend Stack
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-white">React 18</h4>
                          <p className="text-sm text-gray-400">Modern component-based UI library with concurrent features</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-white">Vite</h4>
                          <p className="text-sm text-gray-400">Next-generation frontend tooling for fast development</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-white">Tailwind CSS</h4>
                          <p className="text-sm text-gray-400">Utility-first CSS framework for rapid UI development</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-white">TypeScript</h4>
                          <p className="text-sm text-gray-400">Type-safe JavaScript for better developer experience</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    Scalable Architecture
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-800/30 p-5 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <h4 className="font-medium text-white mb-1">High Performance</h4>
                      <p className="text-sm text-gray-300">Optimized API responses and efficient state management ensure snappy performance even during peak loads.</p>
                    </div>
                    <div className="bg-gray-800/30 p-5 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h4 className="font-medium text-white mb-1">99.9% Uptime</h4>
                      <p className="text-sm text-gray-300">Distributed architecture with automatic failover ensures maximum availability and reliability.</p>
                    </div>
                    <div className="bg-gray-800/30 p-5 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                      </div>
                      <h4 className="font-medium text-white mb-1">Enterprise Security</h4>
                      <p className="text-sm text-gray-300">End-to-end encryption, regular security audits, and compliance standards ensure your data is always protected.</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg">
                    <p className="text-blue-300 text-sm">
                      The platform's cloud-native architecture is designed to scale from hundreds to millions of users while maintaining stability and speed, with automatic resource allocation and load balancing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Development Plans */}
          <section id="roadmap" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-2">Development Plans</h2>
            
            <div className="mt-8 space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                <p className="text-lg text-gray-300 mb-8">
                  AIgram is actively developing, with many improvements and new features planned. The project roadmap covers both immediate steps and the long-term vision.
                </p>

                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Short-Term Plans (3-6 months)
                </h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500/10 text-blue-400">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Mobile Apps</h4>
                      <p className="mt-1 text-gray-400">Release of AIgram mobile apps for iOS and Android, allowing you to communicate with AI agents from your smartphone as conveniently as the desktop version. Support for push notifications and offline mode for viewing history.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500/10 text-blue-400">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Expanded Agent Catalog</h4>
                      <p className="mt-1 text-gray-400">Growing the agent catalog to 500+ with new categories and unique characters. Launching a community where users can suggest ideas and scenarios for creating new AI agents.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500/10 text-blue-400">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Enhanced User Experience</h4>
                      <p className="mt-1 text-gray-400">Adding voice messages (sending and receiving audio from agents), file attachments (sharing images and documents with AI analysis), media gallery, and message reactions.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500/10 text-blue-400">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Monetization System</h4>
                      <p className="mt-1 text-gray-400">Launching a built-in payment system for subscription management, implementing a referral program, and introducing corporate plans for teams and businesses.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10 mt-12">
                  {/* Medium-Term Plans */}
                  <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                      <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Medium-Term Plans (6-12 months)
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">Public Chats and Channels</h4>
                          <p className="text-sm text-gray-300">Users can create open chats with AI on specific topics or subscribe to channels with AI agent messages. Communities will form around popular agents for discussion and experience sharing.</p>
                        </div>
                        
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">Social Features</h4>
                          <p className="text-sm text-gray-300">Ratings and reviews system for agents, interest groups, and sharing custom agents and prompts within the community.</p>
                        </div>
                        
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">AI Enhancements</h4>
                          <p className="text-sm text-gray-300">Long-term memory for agents, personalized responses, and multimodality support (images, video, audio).</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">Integrations and API</h4>
                          <p className="text-sm text-gray-300">Public API for developers to integrate external services and plugins, expanding AIgram's capabilities through third-party contributions.</p>
                        </div>
                        
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">Analytics Dashboard</h4>
                          <p className="text-sm text-gray-300">Comprehensive user dashboard with usage statistics and personalized recommendations for better AI interaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Long-Term Vision */}
                  <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                      <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      Long-Term Vision (1-2 years)
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">Agent Marketplace</h4>
                          <p className="text-sm text-gray-300">Platform for third-party developers to publish AI agents, with a rewards and rating system for the best assistants.</p>
                        </div>
                        
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">Global Expansion</h4>
                          <p className="text-sm text-gray-300">Multilingual support and localization for different regions, with cultural-specific adaptations and local service integrations.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">Enterprise Solutions</h4>
                          <p className="text-sm text-gray-300">White-label solutions for businesses, allowing deployment of custom AI agents trained on internal data for process automation.</p>
                        </div>
                        
                        <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <h4 className="font-medium text-white mb-2">Innovation & AGI</h4>
                          <p className="text-sm text-gray-300">Integration of advanced AI capabilities, evolving into a comprehensive ecosystem of personal AI assistants for all aspects of life.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="space-y-6 mb-16">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all transform hover:scale-[1.01]">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future of AI Communication?</h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Join AIgram today and start interacting with hundreds of intelligent AI agents in a familiar chat interface.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/signup" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Get Started for Free
                  </a>
                  
                  <a 
                    href="#" 
                    className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium rounded-lg hover:border-blue-400 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-500/20">
                  <p className="text-blue-300 text-sm">
                    Not ready to start yet? <a href="#" className="text-white hover:underline">Subscribe to our newsletter</a> to stay updated with the latest features and news.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                Join thousands of users who are already experiencing the future of AI communication. AIgram is changing the way we interact with artificial intelligence - be part of the revolution today!
              </p>
            </div>
          </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
