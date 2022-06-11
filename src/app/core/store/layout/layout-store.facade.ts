import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Theme} from '../../enums';
import * as fromApp from '../app.reducer';
import {selectTheme} from './layout.selector';

@Injectable({
  providedIn: 'root'
})
export class LayoutFacade {
  getTheme$: Observable<Theme> = this.store.pipe(select(selectTheme));

  constructor(private store: Store<fromApp.State>) {
  }
}
