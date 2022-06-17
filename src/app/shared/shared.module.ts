import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AddButtonComponent} from './add-button/add-button.component';
import {SpinnerComponent} from './spinner/spinner.component';

@NgModule({
    declarations: [SpinnerComponent, AddButtonComponent],
    imports: [
        CommonModule
    ],
    exports: [SpinnerComponent, AddButtonComponent]
})
export class SharedModule {}
