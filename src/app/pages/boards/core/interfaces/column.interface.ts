import {Task} from './task.interface';

export interface Column {
  id?: number;
  name: string;
  tasks: Task[];
}
