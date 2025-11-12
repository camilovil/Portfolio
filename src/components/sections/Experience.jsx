import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experiencia" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experiencia</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Educación */}
          <div className="bg-gray-800/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Educación</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-blue-400">
                  Licenciatura en Gestión de Tecnología de la Información
                </h4>
                <p className="text-gray-400">UADE - En curso</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-blue-400">
                  Desarrollo Web
                </h4>
                <p className="text-gray-400">Coderhouse - 2023</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-blue-400">
                  Arquitectura
                </h4>
                <p className="text-gray-400">UBA - Incompleto</p>
              </div>
            </div>
          </div>

          {/* Certificaciones y Participación */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Certificaciones</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-400" size={20} />
                  <span className="text-gray-300">Certificación en Desarrollo Web - Coderhouse (2023)</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-400" size={20} />
                  <span className="text-gray-300">Capacitación en Presupuesto Universitario</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Participación Académica</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Briefcase className="text-purple-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 font-semibold">Community Manager - Instagram Gestión Ambiental UNM</p>
                    <p className="text-gray-400 text-sm">Gestión oficial de redes sociales, creación de contenidos y diseño gráfico</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="text-purple-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 font-semibold">Integrante del equipo editorial - Revista Integrales (DCAYT)</p>
                    <p className="text-gray-400 text-sm">Edición gráfica y propuesta de contenidos para publicación académica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="text-purple-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 font-semibold">Comité Organizador - Concurso Jornadas Ambiente UNM</p>
                    <p className="text-gray-400 text-sm">Organización de eventos ambientales institucionales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="text-purple-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 font-semibold">Coordinación de +15 eventos académicos anuales</p>
                    <p className="text-gray-400 text-sm">Universidad Nacional de Moreno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
