import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ModalService {
  viewContainerRef!: ViewContainerRef;

  init(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  open(component: any): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent<any>(component);
  }

  close(): void {
    this.viewContainerRef.clear();
  }

}
