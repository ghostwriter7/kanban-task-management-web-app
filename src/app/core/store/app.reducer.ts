import {ActionReducerMap} from '@ngrx/store';
import * as fromLayout from './layout/layout.reducer';

export interface State {
  layout: fromLayout.State
}

export const reducer: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};

export const selectLayout = (state: State) => state.layout;
