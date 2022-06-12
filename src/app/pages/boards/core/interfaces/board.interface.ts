import {Column} from './column.interface';

export interface Board {
  id?: number;
  name: string;
  columns: Column[]
}
