import {Subtask} from './subtask.interface';

export interface Task {
  author: string;
  id?: string;
  title: string;
  description: string;
  subtasks: Subtask[] | string[];
  status: string;
}
