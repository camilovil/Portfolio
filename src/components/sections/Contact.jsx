import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in">Hablemos</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
          Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente 
          o simplemente quieres conectar, no dudes en contactarme.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
          <a 
            href="mailto:camilovillanueva.ok@gmail.com"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Enviar Email
          </a>
          
          <a 
            href="https://wa.me/5491139393426"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            WhatsApp
          </a>
          
          <a 
            href="https://www.linkedin.com/in/camilo-villanueva/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gray-500/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            <a href="mailto:camilovillanueva.ok@gmail.com" className="hover:text-blue-400 transition-colors">
              camilovillanueva.ok@gmail.com
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-2">Buenos Aires, Argentina</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
