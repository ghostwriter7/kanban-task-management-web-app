import {createReducer, on} from '@ngrx/store';
import {Board} from '../interfaces';
import * as boardActions from './boards.actions';

export interface State {
  boards: Board[];
  currentBoard?: Board;
}

export const initialState: State = {
  boards: [],
};

export const reducer = createReducer(
  initialState,
  on(boardActions.addNewBoard, (state, action) => ({ ...state, boards: [...state.boards, action.board] }))
);
