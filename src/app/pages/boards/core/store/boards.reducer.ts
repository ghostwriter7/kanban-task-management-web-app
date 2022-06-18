import {createReducer, on} from '@ngrx/store';
import {Board} from '../interfaces';
import * as boardActions from './boards.actions';

export interface State {
  boards: Board[];
  currentBoard?: Board;
  isSavingBoard: boolean;
}

export const initialState: State = {
  boards: [],
  isSavingBoard: false,
};

export const reducer = createReducer(
  initialState,
  on(boardActions.addNewBoard, (state) => ({...state, isSavingBoard: true})),
  on(boardActions.addNewBoardSuccess, (state, action) => ({ ...state, isSavingBoard: false, boards: [...state.boards, action.board] })),
  on(boardActions.addNewBoardFailure, (state) => ({...state, isSavingBoard: false})),
  on(boardActions.deleteBoardSuccess, (state, {id}) => ({ ...state, boards: [...state.boards.filter(board => board.id !== id)]})),
  on(boardActions.loadBoardsSuccess, (state, action) => ({ ...state, boards: [...state.boards, ...action.boards]})),
  on(boardActions.selectBoard, (state, action) => ({ ...state, currentBoard: { ...action.board! }})),
  on(boardActions.unselectBoard, (state) => ({ ...state, currentBoard: undefined}))
);


