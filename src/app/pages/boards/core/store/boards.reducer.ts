import {createReducer, on} from '@ngrx/store';
import {Board, Task} from '../interfaces';
import * as boardActions from './boards.actions';
import {cloneDeep} from 'lodash';

export interface State {
  boards: Board[];
  tasks: {[key: string]: Task[]};
  currentBoardId?: string;
  isSavingBoard: boolean;
}

export const initialState: State = {
  boards: [],
  tasks: {},
  isSavingBoard: false,
};

export const reducer = createReducer(
  initialState,
  on(boardActions.addNewBoard, (state) => ({...state, isSavingBoard: true})),
  on(boardActions.addNewBoardSuccess, (state, action) => ({
    ...state,
    isSavingBoard: false,
    boards: [...state.boards, action.board]
  })),
  on(boardActions.addNewBoardFailure, (state) => ({...state, isSavingBoard: false})),
  on(boardActions.createTaskSuccess, (state, action) => {
    const id = state.currentBoardId!;
    const tasks = cloneDeep(state.tasks);
    Array.isArray(tasks[id]) ? tasks[id].push(action.task) : tasks[id] = [action.task];
    return {...state, tasks};
  }),
  on(boardActions.deleteBoardSuccess, (state, {id}) => ({
    ...state,
    boards: [...state.boards.filter(board => board.id !== id)]
  })),
  on(boardActions.loadBoardsSuccess, (state, action) => ({...state, boards: [...state.boards, ...action.boards]})),
  on(boardActions.loadTasksSuccess, (state, action) => {
    const tasks = cloneDeep(state.tasks);
    tasks[state.currentBoardId!] = action.tasks;
    return { ...state, tasks };
  }),
  on(boardActions.selectBoard, (state, action) => ({...state, currentBoardId: action.board!.id})),
  on(boardActions.unselectBoard, (state) => ({...state, currentBoardId: undefined})),
  on(boardActions.updateBoardSuccess, (state, action) => ({
    ...state, boards: [...state.boards.map(board => {
      return board.id === action.board.id ? action.board : board;
    })],
    currentBoard: {...action.board}
  }))
);


