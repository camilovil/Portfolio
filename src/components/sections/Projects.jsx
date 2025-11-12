import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import FilterButton from '../ui/FilterButton';
import { projects, highlightedProjects } from '../../data/projects';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Obtener proyectos destacados
  const featuredProjects = projects.filter(p => highlightedProjects.includes(p.title));

  // Filtrar proyectos (excluyendo destacados)
  const filteredProjects = projects.filter(project => {
    if (highlightedProjects.includes(project.title)) return false;
    if (selectedFilter === 'all') return true;
    return project.filterType === selectedFilter;
  });

  const filters = [
    { id: 'all', label: 'Todos', emoji: '🔵' },
    { id: 'freelance', label: 'Freelance', emoji: '💼' },
    { id: 'trabajo', label: 'Trabajo UNM', emoji: '🏢' },
    { id: 'universidad', label: 'Universidad UADE', emoji: '🎓' }
  ];

  return (
    <section id="proyectos" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>
        
        {/* Proyectos Destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-blue-400 animate-fade-in">Destacados</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                isHighlighted={true}
                delay={(idx + 1) * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Filtros */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              filter={filter.id}
              currentFilter={selectedFilter}
              onClick={setSelectedFilter}
              label={filter.label}
              emoji={filter.emoji}
            />
          ))}
        </div>

        {/* Más Proyectos */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-400">Más Proyectos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
