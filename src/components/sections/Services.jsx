import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section className="px-6 py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Qué Ofrezco</h2>
        
        {/* Primera fila - 3 columnas */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, idx) => (
            <ServiceCard key={service.title} service={service} delay={(idx + 1) * 0.1} />
          ))}
        </div>

        {/* Segunda fila - 2 columnas centradas */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.slice(3).map((service, idx) => (
            <ServiceCard key={service.title} service={service} delay={(idx + 4) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
