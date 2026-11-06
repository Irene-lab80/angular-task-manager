import type { Task } from './task';

export const MOCK_TASKS: Task[] = [
  { id: 'plan-week', title: 'Составить план на неделю', status: 'completed' },
  { id: 'project', title: 'Подготовить структуру проекта', status: 'in-progress' },
  { id: 'design', title: 'Продумать дизайн списка задач', status: 'in-progress' },
  { id: 'typescript', title: 'Повторить основы TypeScript', status: 'planned' },
  { id: 'readme', title: 'Обновить README проекта', status: 'planned' },
];
