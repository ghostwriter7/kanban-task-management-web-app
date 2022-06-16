import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [ModalComponent],
    imports: [CommonModule, SharedModule],
  exports: [ModalComponent]
})
export class ModalModule {}
