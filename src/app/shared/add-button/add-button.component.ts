import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-add-button',
  template: `
    <button
      (click)="action()"
      class="button button--primary button--large">
      <i class="icon icon--add"></i>
      {{ label }}
    </button>`,
})
export class AddButtonComponent {
  @Input() action!: () => void;
  @Input() label!: string;}

