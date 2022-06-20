import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ContextMenu} from '../../core/interfaces';


@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  @ViewChild('control', {static: true}) control!: ElementRef<HTMLInputElement>;
  @HostListener('document:click', ['$event']) onClick(event: MouseEvent) {
    if (!this.control.nativeElement.checked) { return; }

    if (!(event.target as HTMLElement).closest('.context-menu')) {
        this.toggleContextMenu();
    }
  }
  @Input() contextMenu!: ContextMenu[];
  @Input() disabled$!: Observable<boolean>;
  contextMenuId = Math.floor(Math.random() * 100);

  toggleContextMenu() {
    this.control.nativeElement.checked = !this.control.nativeElement.checked;
  }
}
