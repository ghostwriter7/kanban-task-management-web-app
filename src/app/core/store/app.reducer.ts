import {ActionReducerMap, createSelector} from '@ngrx/store';
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

export const getNumberOfBoards = createSelector(
  selectBoard,
  (state) => state.boards.length
);
export const getCurrentBoard = createSelector(
  selectBoard,
  (state) => state.boards.find(board => board.id === state.currentBoardId)
);
export const getCurrentBoardIndex = createSelector(
  selectBoard,
  (state) => state.boards.findIndex(board => board.id === state.currentBoardId)
);
export const getCurrentTasks = createSelector(
  selectBoard,
  (state) => state.tasks[state.currentBoardId!]
);
export const isLoadingBoards = createSelector(
  selectBoard,
  (state) => state.isLoadingBoards
);
export const isSavingBoard = createSelector(
  selectBoard,
  (state) => state.isSavingBoard
);
