import {createAction, props} from '@ngrx/store';
import {Board} from '../interfaces';

export const addNewBoard = createAction('[Board Page] Add New Board', props<{ board: Board }>());
export const addNewBoardSuccess = createAction('[Board API] Add New Board Success', props<{ board: Board }>());
export const addNewBoardFailure = createAction('[Board API] Add New Board Failure', props<{error: any}>());

export const deleteBoard = createAction('[Context Menu] Delete Board');
export const deleteBoardConfirmed = createAction('[Confirmed Dialog] Delete Board Confirmed', props<{ board: Board}>());
export const deleteBoardCancelled = createAction('[Confirmed Dialog] Delete Board Cancelled');
export const deleteBoardSuccess = createAction('[Board API] Delete Board Success', props<{id: string}>());
export const deleteBoardError = createAction('[Board API] Delete Board Error', props<{error: any}>());

export const loadBoard = createAction('[Board Page] Load Board', props<{ boardId: number }>());

export const loadBoards = createAction('[Board Page] Load Boards');
export const loadBoardsSuccess = createAction('[Board API] Load Boards Success', props<{boards: Board[]}>());
export const loadBoardsFailure = createAction('[Board API] Load Boards Failure', props<{error: any}>());

export const selectBoard = createAction('[Side Nav] Select Board', props<{ board: Board | undefined}>());
export const unselectBoard = createAction('[Board Effects] Unselect Board');
