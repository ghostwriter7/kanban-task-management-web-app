import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {isLoading, isLoggedIn} from '../../../../core/store/app.reducer';
import * as fromApp from '../../../../core/store/app.reducer';
import * as authActions from './auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreFacade {
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoading));
  isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedIn));

  constructor(private store: Store<fromApp.State>) {
  }

  signUp(password: string, email: string): void {
    this.store.dispatch(authActions.signUp({password, email}));
  }

  signIn(password: string, email: string): void {
    this.store.dispatch(authActions.signIn({password, email}));
  }

  logout(): void {
    this.store.dispatch(authActions.logout());
  }
}
