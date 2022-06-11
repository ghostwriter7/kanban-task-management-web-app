import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from '../../core/enums';
import {LayoutStoreFacade} from '../../core/store/layout/layout-store.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  currentTheme$: Observable<Theme> = this.layoutStoreFacade.getTheme$;
  isSidenavClosed$: Observable<boolean> = this.layoutStoreFacade.getIsSidenavClosed$;

  constructor(private layoutStoreFacade: LayoutStoreFacade) { }

  ngOnInit(): void {

  }

}
