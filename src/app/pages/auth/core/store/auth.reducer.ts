import {createReducer} from '@ngrx/store';

export interface State {
  isLoggedIn: boolean;
}

const initialState: State = {
  isLoggedIn: false
};

export const reducer = createReducer(
  initialState
);

