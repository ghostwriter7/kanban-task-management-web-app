import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LayoutStoreFacade} from '../../core/store/layout/layout-store.facade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  boards: { name: string }[] = [
    { name: 'Platform Launch'},
    { name: 'Marketing Plan'},
    { name: 'Roadmap'}
  ];
  isSidenavClosed$: Observable<boolean> = this.layoutStoreFacade.getIsSidenavClosed$;

  constructor(private layoutStoreFacade: LayoutStoreFacade) { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.layoutStoreFacade.toggleSidenav();
  }
}
