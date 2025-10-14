import React from 'react';
import { type PrioritizationItem, PriorityLevel } from '../types';

interface PrioritizationTableProps {
  data: PrioritizationItem[];
}

const getPriorityClass = (priority: PriorityLevel): string => {
  switch (priority) {
    case PriorityLevel.High:
      return 'text-red-600';
    case PriorityLevel.Medium:
      return 'text-amber-600';
    case PriorityLevel.Low:
      return 'text-sky-600';
    default:
      return 'text-slate-600';
  }
};

const HeaderCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <th scope="col" className={`py-3.5 px-4 text-left text-sm font-semibold text-slate-900 ${className}`}>
    {children}
  </th>
);

const BodyCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <td className={`whitespace-nowrap py-4 px-4 text-sm ${className}`}>
    {children}
  </td>
);


const PrioritizationTable: React.FC<PrioritizationTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <HeaderCell>
                Funcionalidad Propuesta
            </HeaderCell>
            <HeaderCell className="text-center">
                N <span className="font-normal text-slate-500">(Novedosa)</span>
            </HeaderCell>
             <HeaderCell className="text-center">
                U <span className="font-normal text-slate-500">(Útil)</span>
            </HeaderCell>
             <HeaderCell className="text-center">
                F <span className="font-normal text-slate-500">(Factible)</span>
            </HeaderCell>
            <HeaderCell className="text-center">
                Puntuación Total (Σ)
            </HeaderCell>
            <HeaderCell>
                Prioridad / Justificación
            </HeaderCell>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50 transition-colors">
              <BodyCell className="font-medium text-slate-900">{item.functionality}</BodyCell>
              <BodyCell className="text-center text-slate-500">{item.novelty}</BodyCell>
              <BodyCell className="text-center text-slate-500">{item.utility}</BodyCell>
              <BodyCell className="text-center text-slate-500">{item.feasibility}</BodyCell>
              <BodyCell className="text-center font-bold text-slate-800">{item.total}</BodyCell>
              <BodyCell className="text-slate-600 !whitespace-normal max-w-sm">
                <div>
                  <span className={`font-bold ${getPriorityClass(item.priority)}`}>{item.priority}:</span>
                  {' '}
                  <span className="text-slate-500">{item.justification}</span>
                </div>
              </BodyCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrioritizationTable;
