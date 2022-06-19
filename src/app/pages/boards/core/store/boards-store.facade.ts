import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {map, Observable, pluck} from 'rxjs';
import {
  getCurrentBoard,
  getCurrentBoardIndex, getCurrentTasks,
  getNumberOfBoards,
  isSavingBoard
} from '../../../../core/store/app.reducer';
import * as fromApp from '../../../../core/store/app.reducer';
import {Board, Column, Task} from '../interfaces';
import {Subtask} from '../interfaces/subtask.interface';
import * as boardActions from './boards.actions';

@Injectable({
  providedIn: 'root'
})
export class BoardsStoreFacade {
  boards$: Observable<Board[]> = this.store.pipe(select(state => state.boards.boards));
  currentBoard$: Observable<Board | undefined> = this.store.pipe(select(getCurrentBoard));
  currentBoardIndex$: Observable<number> = this.store.pipe(select(getCurrentBoardIndex));
  currentColumns$: Observable<Column[]> = this.store.pipe(select(getCurrentBoard)).pipe(pluck('columns')) as Observable<Column[]>;
  currentTasks$: Observable<Task[]> = this.store.pipe(select(getCurrentTasks));
  isSavingBoard$: Observable<boolean> = this.store.pipe(select(isSavingBoard));
  numberOfBoards$: Observable<number> = this.store.pipe(select(getNumberOfBoards));
  statuses$: Observable<string[]> = this.currentBoard$.pipe(pluck('columns')) as Observable<string[]>;

  constructor(private store: Store<fromApp.State>) {
  }

  addNewBoard(board: Board): void {
    this.store.dispatch(boardActions.addNewBoard({board}));
  }

  createTask(task: Task): void {
    task.subtasks = task.subtasks.map(subtask => ({ title: subtask, completed: false })) as Subtask[];
    this.store.dispatch(boardActions.createTask({task}));
  }

  deleteBoard(): void {
    this.store.dispatch(boardActions.deleteBoard());
  }

  getCurrentTasks(column: string): Observable<Task[]> {
    return this.currentTasks$.pipe(map(tasks => (tasks || []).filter(task => task.status === column)));
  }

  loadBoards(): void {
    this.store.dispatch(boardActions.loadBoards());
  }

  selectBoard(board: Board) {
    this.store.dispatch(boardActions.selectBoard({board}));
  }

  unselectBoard(): void {
    this.store.dispatch(boardActions.unselectBoard());
  }

  updateBoard(board: Board): void {
    this.store.dispatch(boardActions.updateBoard({board}));
  }

  updateTask(task: Task, index: number): void {
    this.store.dispatch(boardActions.updateTask({task, index}));
  }
}
