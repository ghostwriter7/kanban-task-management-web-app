import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {cloneDeep} from 'lodash';
import {ContextMenu} from '../../../../core/interfaces';
import {ModalService} from '../../../../core/services/modal.service';
import {Task} from '../../core/interfaces';
import {Subtask} from '../../core/interfaces/subtask.interface';
import {BoardsStoreFacade} from '../../core/store/boards-store.facade';
import {AddEditTaskDialogComponent} from '../add-edit-task-dialog/add-edit-task-dialog.component';

@Component({
  selector: 'app-preview-task',
  templateUrl: './preview-task.component.html',
  styleUrls: ['./preview-task.component.scss']
})
export class PreviewTaskComponent implements OnInit{
  @Input() index!: number;
  @Input() task!: Task;
  contextMenu: ContextMenu[] = [
    { label: 'Edit Task', action: this.editTask.bind(this) },
    { label: 'Delete Task', action: this.toggleConfirmationDialog.bind(this), danger: true }
  ];
  form!: FormGroup;
  showConfirmDeleteDialog = false;

  get completed() {
    return this.subtasks.filter((task) => task.completed).length;
  }

  get subtasks() {
    return this.task.subtasks as Subtask[];
  }

  constructor(public boardsStoreFacade: BoardsStoreFacade, private formBuilder: FormBuilder, private modalService: ModalService) {
  }

  ngOnInit(): void {
    const subtaskControls: FormControl[] = [];
    (this.task.subtasks as Subtask[]).forEach(subtask => {
      subtaskControls.push(this.formBuilder.control(subtask.completed));
    });

    this.form = this.formBuilder.group({
      subtasks: this.formBuilder.array(subtaskControls),
      status: this.formBuilder.control(this.task.status)
    });

    this.form.valueChanges.subscribe(({status, subtasks}) => {
      const updatedTask = cloneDeep(this.task);
      updatedTask.status = status;
      updatedTask.subtasks = (updatedTask.subtasks as Subtask[]).map((subtask, idx) => ({
        title: subtask.title, completed: subtasks[idx]
      }));
      this.boardsStoreFacade.updateTask(updatedTask, this.index);
    });
  }

  editTask(): void {
      this.modalService.open(AddEditTaskDialogComponent, { task: this.task });
  }

  toggleConfirmationDialog(): void {
      this.showConfirmDeleteDialog = !this.showConfirmDeleteDialog;
  }

  onDelete(response: boolean) {
    if (response) {
      this.boardsStoreFacade.deleteTask(this.task, this.index);
    }
  }
}
