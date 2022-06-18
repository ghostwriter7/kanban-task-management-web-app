import {Column} from './column.interface';

export interface Board {
  id: string;
  name: string;
  columns: Column[]
}
