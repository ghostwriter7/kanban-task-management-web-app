import {Subtask} from './subtask.interface';

export interface Task {
  id?: string;
  title: string;
  description: string;
  subtasks: Subtask[];
  status: string;
}
