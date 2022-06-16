import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {DialogMode} from '../../../../core/enums';
import {BoardsStoreFacade} from '../../core/store/boards-store.facade';

@Component({
  selector: 'app-add-edit-board-dialog',
  templateUrl: './add-edit-board-dialog.component.html',
  styleUrls: ['./add-edit-board-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditBoardDialogComponent implements OnInit {
  form!: FormGroup;
  isSavingBoard$: Observable<boolean> = this.boardStoreFacade.isSavingBoard$;
  mode: DialogMode = DialogMode.Add;

  get columns() {
    return (this.form.get('columns') as FormArray).controls;
  }

  constructor(
    private boardStoreFacade: BoardsStoreFacade,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      columns: this.formBuilder.array([this.formBuilder.control('', [Validators.required])], [Validators.required])
    });
  }

  onAddNewColumn(): void {
    (this.form.get('columns') as FormArray).push(this.formBuilder.control('', [Validators.required]));
  }

  onRemoveColumn(idx: number): void {
    (this.form.get('columns') as FormArray).removeAt(idx);
  }

  onSubmit(): void {
    const board = this.form.value;
    board.columns = board.columns.filter(Boolean);
    this.boardStoreFacade.addNewBoard(board);
  }

}
