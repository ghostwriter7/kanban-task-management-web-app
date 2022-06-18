import {createAction, props} from '@ngrx/store';
import {Board, Task} from '../interfaces';

export const addNewBoard = createAction('[Board Page] Add New Board', props<{ board: Board }>());
export const addNewBoardSuccess = createAction('[Firebase] Add New Board Success', props<{ board: Board }>());
export const addNewBoardFailure = createAction('[Firebase] Add New Board Failure', props<{error: any}>());

export const createTask = createAction('[Add Task Dialog] Create New Task', props<{ task: Task}>());
export const createTaskSuccess = createAction('[Firebase] Create New Task Success', props<{task: Task}>());
export const createTaskFailure = createAction('[Firebase] Create New Task Failure', props<{ error: any}>());

export const deleteBoard = createAction('[Context Menu] Delete Board');
export const deleteBoardConfirmed = createAction('[Confirmed Dialog] Delete Board Confirmed', props<{ board: Board}>());
export const deleteBoardCancelled = createAction('[Confirmed Dialog] Delete Board Cancelled');
export const deleteBoardSuccess = createAction('[Firebase] Delete Board Success', props<{id: string}>());
export const deleteBoardError = createAction('[Firebase] Delete Board Error', props<{error: any}>());

export const loadBoard = createAction('[Board Page] Load Board', props<{ boardId: number }>());

export const loadBoards = createAction('[Board Page] Load Boards');
export const loadBoardsSuccess = createAction('[Firebase] Load Boards Success', props<{boards: Board[]}>());
export const loadBoardsFailure = createAction('[Firebase] Load Boards Failure', props<{error: any}>());

export const selectBoard = createAction('[Side Nav] Select Board', props<{ board: Board | undefined}>());
export const unselectBoard = createAction('[Board Effects] Unselect Board');

export const updateBoard = createAction('[Edit Board Dialog] Update Board', props<{ board: Board}>());
export const updateBoardSuccess = createAction('[Firebase] Update Board Success', props<{ board: Board}>());
export const updateBoardFailure = createAction('[Firebase] Update Board Failure', props<{error: any}>());
