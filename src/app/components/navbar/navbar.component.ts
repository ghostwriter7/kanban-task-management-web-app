import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from '../../core/enums';
import {LayoutFacade} from '../../core/store/layout/layout.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentTheme$: Observable<Theme> = this.layoutFacade.getTheme$;

  constructor(private layoutFacade: LayoutFacade) { }

  ngOnInit(): void {

  }

}
