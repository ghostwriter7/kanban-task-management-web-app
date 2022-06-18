import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogMode} from '../../../../core/enums';
import {BoardsStoreFacade} from '../../core/store/boards-store.facade';

@Component({
  selector: 'app-add-edit-task-dialog',
  templateUrl: './add-edit-task-dialog.component.html',
  styleUrls: ['./add-edit-task-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditTaskDialogComponent implements OnInit {
  form!: FormGroup;
  mode: DialogMode = DialogMode.Add;

  get subtaskArray() {
    return this.form.get('subtasks') as FormArray;
  }

  get subtaskControls() {
    return (this.form.get('subtasks') as FormArray).controls;
  }

  constructor(
    public boardsStoreFacade: BoardsStoreFacade,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onAddSubtask(): void {
    this.subtaskArray.push(this.formBuilder.control('', Validators.required));
  }

  onDeleteSubtask(i: number): void {
    this.subtaskArray.removeAt(i);
  }


  onSubmit() {
      const task = this.form.value;

      this.boardsStoreFacade.createTask(task);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control('', Validators.required),
      subtasks: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
      status: this.formBuilder.control('', Validators.required)
    });
  }
}
