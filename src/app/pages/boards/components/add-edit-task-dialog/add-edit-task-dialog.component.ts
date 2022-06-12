import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DialogMode} from '../../../../core/enums';

@Component({
  selector: 'app-add-edit-task-dialog',
  templateUrl: './add-edit-task-dialog.component.html',
  styleUrls: ['./add-edit-task-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditTaskDialogComponent implements OnInit {
  mode: DialogMode = DialogMode.Add;

  constructor() { }

  ngOnInit(): void {
  }

}
