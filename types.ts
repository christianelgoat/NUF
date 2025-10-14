export enum PriorityLevel {
  High = 'ALTA',
  Medium = 'MEDIA',
  Low = 'BAJA',
}

export interface PrioritizationItem {
  id: number;
  functionality: string;
  novelty: number;
  utility: number;
  feasibility: number;
  total: number;
  priority: PriorityLevel;
  justification: string;
}
