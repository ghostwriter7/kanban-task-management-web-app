import {Component, Input, OnInit} from '@angular/core';
import {TaskStatus} from '../../core/enums';
import {Task} from '../../core/interfaces';
import {Subtask} from '../../core/interfaces/subtask.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  get completed() {
    return (this.task.subtasks as Subtask[]).filter((task) => task.status === TaskStatus.Complete).length;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
