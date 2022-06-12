import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ModalModule} from '../../shared/modal.module';
import { AddEditTaskDialogComponent } from './components/add-edit-task-dialog/add-edit-task-dialog.component';
import { AddEditBoardDialogComponent } from './components/add-edit-board-dialog/add-edit-board-dialog.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [
    AddEditTaskDialogComponent,
    AddEditBoardDialogComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BoardComponent}]),
    ModalModule,
    ReactiveFormsModule,
  ]
})
export class BoardsModule { }
