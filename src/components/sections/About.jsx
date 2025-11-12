import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Sobre Mí</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Mi Historia</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Comencé mi camino en arquitectura en la UBA, donde aprendí a diseñar espacios y pensar en sistemas. 
              Esa experiencia me enseñó algo clave: <strong>los mejores proyectos nacen cuando entendés realmente el problema</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Hoy combino diseño, desarrollo y gestión de tecnología para crear soluciones digitales que resuelven 
              problemas reales. Desde sitios web personalizados hasta sistemas de automatización en Python, mi enfoque 
              es siempre el mismo: <strong>entender qué necesitás y construir la herramienta adecuada para lograrlo</strong>.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Mi Enfoque</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              No vendo plantillas ni soluciones genéricas. Trabajo con vos para entender tu desafío 
              específico y construir la herramienta digital que lo resuelva:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong>¿Necesitás presencia web?</strong> → Sitios personalizados, rápidos y fáciles de gestionar</li>
              <li><strong>¿Procesos manuales te consumen tiempo?</strong> → Automatizaciones y scripts que trabajan por vos</li>
              <li><strong>¿Datos desorganizados?</strong> → Sistemas de gestión que ordenan y simplifican tu operación</li>
              <li><strong>¿Tenés un problema específico?</strong> → Lo analizamos y desarrollamos la solución juntos</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Mi valor está en la versatilidad: puedo diseñar tu identidad visual, desarrollar tu plataforma 
              web, y crear los sistemas internos que tu negocio necesita para crecer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
