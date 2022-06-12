import {Subtask} from './subtask.interface';

export interface Task {
  id?: number;
  title: string;
  description: string;
  subtasks: Subtask[];
  columnId: number;
}
