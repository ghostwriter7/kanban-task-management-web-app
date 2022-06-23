import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../../../core/services/modal.service';
import {Task} from '../../core/interfaces';
import {Subtask} from '../../core/interfaces/subtask.interface';
import {PreviewTaskComponent} from '../preview-task/preview-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  get completed() {
    return (this.task.subtasks as Subtask[]).filter((task) => task.completed).length;
  }

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  previewTask() {
    this.modalService.open(PreviewTaskComponent, { task: this.task });
  }
}
