import {createReducer, on} from '@ngrx/store';
import firebase from 'firebase/compat';
import User = firebase.User;
import * as authActions from './auth.action';

export interface State {
  authError?: any;
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  user?: User;
}

const initialState: State = {
  isLoggedIn: false,
  isLoggingIn: false,
};

export const reducer = createReducer(
  initialState,
  on(authActions.signUp, (state) => ({
    ...state, isLoggingIn: true, authError: null
  })),
  on(authActions.signUpSuccess, (state, action) => ({
    ...state, isLoggedIn: true, isLoggingIn: false, user: action.user, authError: null
  })),
  on(authActions.signUpFailure, (state, action) => ({
    ...state, isLoggingIn: false, isLoggedIn: false, authError: action.error
  })),
  on(authActions.signIn, (state) => ({
    ...state, isLoggingIn: true, authError: null,
  })),
  on(authActions.signInSuccess, (state, action) => ({
    ...state, isLoggedIn: true, isLoggingIn: false, user: action.user, authError: null
  })),
  on(authActions.signInFailure, (state, action) => ({
    ...state, isLoggingIn: false, isLoggedIn: false, authError: action.error
  })),
  on(authActions.logout, (state) => ({
    ...state, isLoggedIn: false, isLoggingIn: false, authError: null, user: undefined
  }))
);

