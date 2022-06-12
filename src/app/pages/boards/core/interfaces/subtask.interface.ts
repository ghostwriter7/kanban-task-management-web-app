import {TaskStatus} from '../enums';

export interface Subtask {
  id?: number;
  title: string;
  status: TaskStatus
}
