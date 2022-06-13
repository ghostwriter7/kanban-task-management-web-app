import {createAction, props} from '@ngrx/store';
import {Board} from '../interfaces';

export const addNewBoard = createAction('[Board Page] Add New Board', props<{ board: Board }>());
export const addNewBoardSuccess = createAction('[Board API] Add New Board Success', props<{ board: any }>());
export const addNewBoardFailure = createAction('[Board API] Add New Board Failure', props<{error: any}>());

export const loadBoard = createAction('[Board Page] Load Board', props<{ boardId: number }>());

export const loadBoards = createAction('[Board Page] Load Boards');
export const loadBoardsSuccess = createAction('[Board API] Load Boards Success', props<{boards: Board[]}>());
export const loadBoardsFailure = createAction('[Board API] Load Boards Failure', props<{error: any}>());
