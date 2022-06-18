import {Column} from './column.interface';
import {Task} from './task.interface';

export interface Board {
  id: string;
  name: string;
  columns: Column[]
  tasks?: Task[]
}
