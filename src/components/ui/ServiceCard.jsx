import React from 'react';

const ServiceCard = ({ service, delay = 0 }) => {
  const { emoji, title, color, description, isHighlighted } = service;

  const colorClasses = {
    blue: 'border-blue-500 hover:border-blue-400',
    purple: 'border-purple-500 hover:border-purple-400',
    green: 'border-green-500 hover:border-green-400',
    pink: 'border-pink-500 hover:border-pink-400',
    gradient: 'border-blue-500/50 hover:border-blue-400'
  };

  const titleColorClasses = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    green: 'text-green-400',
    pink: 'text-pink-400',
    gradient: 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
  };

  const baseClass = isHighlighted
    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-lg border-2 shadow-lg shadow-blue-500/10'
    : 'bg-gray-800/50 p-8 rounded-lg border';

  return (
    <div 
      className={`${baseClass} ${colorClasses[color]} border-gray-700 hover:transform hover:scale-[1.02] transition-all duration-300 animate-slide-up`}
      style={{animationDelay: `${delay}s`}}
    >
      <div className="text-5xl mb-5">{emoji}</div>
      <h3 className={`text-2xl font-semibold mb-4 ${titleColorClasses[color]}`}>
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
