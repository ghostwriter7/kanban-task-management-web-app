import {createReducer, on} from '@ngrx/store';
import {Board, Task} from '../interfaces';
import * as boardActions from './boards.actions';
import {cloneDeep} from 'lodash';

export interface State {
  boards: Board[];
  tasks: {[key: string]: Task[]};
  currentBoardId?: string;
  isLoaded: boolean;
  isLoadingBoards: boolean;
  isSavingBoard: boolean;
}

export const initialState: State = {
  boards: [],
  tasks: {},
  isLoaded: false,
  isLoadingBoards: false,
  isSavingBoard: false,
};

export const reducer = createReducer(
  initialState,
  on(boardActions.addNewBoard, (state) => ({...state, isSavingBoard: true, isBoardSaved: false})),
  on(boardActions.addNewBoardSuccess, (state, action) => ({
    ...state,
    isSavingBoard: false,
    isBoardSaved: true,
    boards: [...state.boards, { ...action.board, isFullyLoaded: true}]
  })),
  on(boardActions.addNewBoardFailure, (state) => ({...state, isSavingBoard: false})),
  on(boardActions.createTaskSuccess, (state, action) => {
    const id = state.currentBoardId!;
    const tasks = cloneDeep(state.tasks);
    Array.isArray(tasks[id]) ? tasks[id].push(action.task) : tasks[id] = [action.task];
    return {...state, tasks};
  }),
  on(boardActions.deleteBoardSuccess, (state, {id}) => {
    const tasks = cloneDeep(state.tasks);
    delete tasks[id];

    return {
      ...state,
      boards: [...state.boards.filter(board => board.id !== id)],
      tasks
    }
  }),
  on(boardActions.deleteTaskSuccess, (state, {boardId, taskId }) => {
    const tasks = cloneDeep(state.tasks);
    const index = tasks[state.currentBoardId!].findIndex(task => task.id === taskId);
    delete tasks[boardId][index];
    return { ...state, tasks }
  }),
  on(boardActions.loadBoards, (state) => ({...state, isLoadingBoards: true})),
  on(boardActions.loadBoardsSuccess, (state, action) => ({...state, isLoadingBoards: false, isLoaded: true, boards: [...state.boards, ...action.boards.map(board => ({ ...board, isFullyLoaded: false}))]})),
  on(boardActions.loadTasksSuccess, (state, action) => {
    const boards = cloneDeep(state.boards);
    boards.find(board => board.id === state.currentBoardId)!.isFullyLoaded = true;
    const tasks = cloneDeep(state.tasks);
    tasks[state.currentBoardId!] = action.tasks;
    return { ...state, boards, tasks };
  }),
  on(boardActions.selectBoard, (state, action) => ({...state, currentBoardId: action.board!.id})),
  on(boardActions.unselectBoard, (state) => ({...state, currentBoardId: undefined})),
  on(boardActions.updateBoard, (state) => ({...state, isSavingBoard: true, isBoardSaved: false})),
  on(boardActions.updateBoardSuccess, (state, action) => ({
    ...state,
    isSavingBoard: false,
    isBoardSaved: true,
    boards: [...state.boards.map(board => {
      return board.id === action.board.id ? action.board : board;
    })],
    currentBoard: {...action.board}
  })),
  on(boardActions.updateTaskSuccess, (state, action) => {
    const tasks = cloneDeep(state.tasks);
    const index = tasks[state.currentBoardId!].findIndex(task => task.id === action.task.id);
    tasks[state.currentBoardId!][index] = action.task;
    return { ...state, tasks };
  })
);


