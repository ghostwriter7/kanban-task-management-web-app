import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AddButtonComponent} from './add-button/add-button.component';
import {ModalModule} from './modal.module';
import {SpinnerComponent} from './spinner/spinner.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
    declarations: [SpinnerComponent, AddButtonComponent, ContextMenuComponent, ConfirmDeleteDialogComponent],
    imports: [
        CommonModule,
        ModalModule
    ],
  exports: [SpinnerComponent, AddButtonComponent, ContextMenuComponent, ConfirmDeleteDialogComponent]
})
export class SharedModule {}
