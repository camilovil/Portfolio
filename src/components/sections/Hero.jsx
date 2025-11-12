import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 hover:scale-110 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">
              CV
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slide-up">
          Camilo Villanueva
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
          Desarrollador Web & Especialista en Gestión de TI
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
          Combinando administración y tecnología para crear soluciones digitales eficientes. 
          Especializado en desarrollo web, automatización y optimización de procesos.
        </p>
        
        <div className="flex gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <a 
            href="https://github.com/camilovil" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 border border-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/camilo-villanueva/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 border border-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          
          <a 
            href="mailto:camilovillanueva.ok@gmail.com"
            className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 border border-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('proyectos')}
          className="animate-bounce hover:text-blue-400 transition-colors"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
