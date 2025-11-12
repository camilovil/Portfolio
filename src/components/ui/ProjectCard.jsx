import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, isHighlighted = false, delay = 0 }) => {
  const { title, description, technologies, link, image, status, impact, hasDemo } = project;

  const statusColors = {
    'Producción': 'bg-green-500/20 text-green-400',
    'En desarrollo': 'bg-yellow-500/20 text-yellow-400',
    default: 'bg-blue-500/20 text-blue-400'
  };

  const highlightedBorders = {
    'Omerta Buenos Aires': 'border-blue-500/50 shadow-blue-500/10',
    'EsPosta': 'border-purple-500/50 shadow-purple-500/10',
    'Generador Automático de Prórrogas Estudiantiles': 'border-green-500/50 shadow-green-500/10'
  };

  const borderClass = isHighlighted
    ? `border-2 ${highlightedBorders[title] || 'border-blue-500/50'} shadow-lg`
    : 'border border-gray-700 hover:border-blue-500';

  const statusColor = statusColors[status] || statusColors.default;

  return (
    <div 
      className={`bg-gray-800/50 rounded-lg overflow-hidden ${borderClass} transition-all hover:transform hover:scale-[1.02] duration-300 ${isHighlighted ? 'animate-slide-up' : ''}`}
      style={isHighlighted ? {animationDelay: `${delay}s`} : {}}
    >
      <div className={`${isHighlighted ? 'h-56' : 'h-48'} overflow-hidden`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className={`text-xs px-3 py-1 rounded-full ${statusColor}`}>
            {status}
          </span>
        </div>
        
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        
        {impact && (
          <div className="mb-4 p-3 bg-green-900/20 rounded border border-green-500/30">
            <p className="text-sm text-green-400 font-semibold">{impact}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-700 px-3 py-1 rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        
        {hasDemo && (
          <div className="mb-4 p-3 bg-gray-900 rounded border border-gray-700">
            <p className="text-sm text-gray-400 italic">📹 Demo disponible próximamente</p>
          </div>
        )}
        
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Ver proyecto <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
