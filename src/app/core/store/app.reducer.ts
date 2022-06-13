import {ActionReducerMap} from '@ngrx/store';
import * as fromLayout from './layout/layout.reducer';
import * as fromBoards from '../../pages/boards/core/store/boards.reducer';

export interface State {
  layout: fromLayout.State,
  boards: fromBoards.State
}

export const reducer: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  boards: fromBoards.reducer
};

export const selectLayout = (state: State) => state.layout;
export const selectBoard = (state: State) => state.boards;
