import {createAction, props} from '@ngrx/store';
import {Board} from '../interfaces';

export const loadBoard = createAction('[Board Page] Load Board', props<{ boardId: number }>());

export const addNewBoard = createAction('[Add Board] Add New Board', props<{ board: Board }>());
