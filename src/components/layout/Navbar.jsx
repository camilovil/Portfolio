import React from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const navItems = ['inicio', 'sobre-mi', 'proyectos', 'experiencia', 'contacto'];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CV
          </h1>
          <div className="hidden md:flex gap-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-blue-400 transition-colors ${
                  activeSection === section ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {section.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
