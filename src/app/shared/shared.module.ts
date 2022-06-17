import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AddButtonComponent} from './add-button/add-button.component';
import {SpinnerComponent} from './spinner/spinner.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';

@NgModule({
    declarations: [SpinnerComponent, AddButtonComponent, ContextMenuComponent],
    imports: [
        CommonModule
    ],
  exports: [SpinnerComponent, AddButtonComponent, ContextMenuComponent]
})
export class SharedModule {}
