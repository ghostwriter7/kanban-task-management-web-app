import {ComponentRef, Injectable, ViewContainerRef} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ModalService {
  viewContainerRef!: ViewContainerRef;

  init(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  open<T>(component: any): ComponentRef<T> {
    this.viewContainerRef.clear();
    return this.viewContainerRef.createComponent<T>(component);
  }

  close(): void {
    this.viewContainerRef.clear();
  }

}
