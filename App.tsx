import React from 'react';
import PrioritizationTable from './components/PrioritizationTable';
import { type PrioritizationItem, PriorityLevel } from './types';

const TABLE_DATA: PrioritizationItem[] = [
  {
    id: 1,
    functionality: 'Dashboard con KPIs y Atajos',
    novelty: 8,
    utility: 10,
    feasibility: 9,
    total: 27,
    priority: PriorityLevel.High,
    justification: 'Responde a la crítica más recurrente sobre la UI y aporta un valor inmenso al usuario. Es técnicamente factible.',
  },
  {
    id: 2,
    functionality: 'Filtros y Búsqueda de Productos',
    novelty: 6,
    utility: 9,
    feasibility: 10,
    total: 25,
    priority: PriorityLevel.High,
    justification: 'Mejora drásticamente la usabilidad, especialmente a medida que crece el inventario. Es una función estándar y muy factible de implementar.',
  },
  {
    id: 3,
    functionality: 'Notificaciones de Bajo Stock',
    novelty: 7,
    utility: 10,
    feasibility: 7,
    total: 24,
    priority: PriorityLevel.Medium,
    justification: 'Extremadamente útil para prevenir quiebres de stock. La factibilidad es media, ya que requiere configurar scripts automáticos (ej. triggers de tiempo en Google Apps Script).',
  },
  {
    id: 4,
    functionality: 'Onboarding / Guía de Usuario',
    novelty: 5,
    utility: 8,
    feasibility: 8,
    total: 21,
    priority: PriorityLevel.Medium,
    justification: 'Mejora la experiencia del primer uso y reduce la confusión inicial. Es relativamente sencillo de implementar (ej. pop-ups o una sección de ayuda).',
  },
  {
    id: 5,
    functionality: 'Subir Imágenes de Productos',
    novelty: 6,
    utility: 7,
    feasibility: 8,
    total: 21,
    priority: PriorityLevel.Medium,
    justification: 'Aporta valor visual pero no es tan crítico como las funciones de gestión. La implementación requiere manejar almacenamiento de archivos.',
  },
  {
    id: 6,
    functionality: 'Asistente con IA',
    novelty: 10,
    utility: 9,
    feasibility: 2,
    total: 21,
    priority: PriorityLevel.Low,
    justification: '(Post-Proyecto): Aunque es muy innovador y útil a largo plazo, la complejidad técnica (baja factibilidad) lo deja fuera del alcance del ciclo académico actual.',
  },
];

const App: React.FC = () => {
  return (
    <main className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-800">Tabla de Priorización NUF</h1>
            <p className="mt-1 text-slate-500">Llena con un análisis de sus ideas:</p>
        </div>
        <PrioritizationTable data={TABLE_DATA} />
      </div>
    </main>
  );
};

export default App;
