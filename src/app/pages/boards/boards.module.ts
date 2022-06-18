import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CustomControlsModule} from '../../shared/custom-controls/custom-controls.module';
import {ModalModule} from '../../shared/modal.module';
import {SharedModule} from '../../shared/shared.module';
import { AddEditTaskDialogComponent } from './components/add-edit-task-dialog/add-edit-task-dialog.component';
import { AddEditBoardDialogComponent } from './components/add-edit-board-dialog/add-edit-board-dialog.component';
import { BoardComponent } from './components/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AddEditTaskDialogComponent,
    AddEditBoardDialogComponent,
    BoardComponent,
    ColumnComponent,
    TaskComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: BoardComponent}]),
        ModalModule,
        ReactiveFormsModule,
        SharedModule,
        CustomControlsModule,
    ]
})
export class BoardsModule { }
