import React from 'react';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section className="px-6 py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(skills).map(([category, items], idx) => (
            <div 
              key={category} 
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 duration-300 animate-slide-up" 
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <h3 className="text-base font-semibold mb-3 text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-300 hover:bg-gray-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
