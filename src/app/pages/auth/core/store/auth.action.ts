import {createAction, props} from '@ngrx/store';
import firebase from 'firebase/compat';
import User = firebase.User;

export const signIn = createAction('[Auth Page] Sign In', props<{ password: string, email: string}>());
export const signInSuccess = createAction('[Firebase] Sign In Success', props<{ user: User }>());
export const signInFailure = createAction('[Firebase] Sign In Failure', props<{ error: any }>());

export const signUp = createAction('[Auth Page] Sign Up', props<{ password: string, email: string}>());
export const signUpSuccess = createAction('[Firebase] Sign Up Success', props<{ user: User}>());
export const signUpFailure = createAction('[Firebase] Sign Up Failure', props<{ error: any}>());

export const logout = createAction('[Sidenav] Logout');
export const logoutSuccess = createAction('[Firebase] Logout Success');
export const logoutFailure = createAction('[Firebase] Logout Failure');
