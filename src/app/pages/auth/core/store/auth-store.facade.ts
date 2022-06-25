import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getIsLoggedIn} from '../../../../core/store/app.reducer';
import * as fromApp from '../../../../core/store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreFacade {
  isLoggedIn$: Observable<boolean> = this.store.pipe(select(getIsLoggedIn));

  constructor(private store: Store<fromApp.State>) {
  }

}
