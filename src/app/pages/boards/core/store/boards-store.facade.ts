import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, pluck} from 'rxjs';
import {
  getCurrentBoard,
  getCurrentBoardIndex,
  getNumberOfBoards,
  isSavingBoard
} from '../../../../core/store/app.reducer';
import * as fromApp from '../../../../core/store/app.reducer';
import {Board, Column} from '../interfaces';
import * as boardActions from './boards.actions';

@Injectable({
  providedIn: 'root'
})
export class BoardsStoreFacade {
  boards$: Observable<Board[]> = this.store.pipe(select(state => state.boards.boards));
  currentBoard$: Observable<Board | undefined> = this.store.pipe(select(getCurrentBoard));
  currentBoardIndex$: Observable<number> = this.store.pipe(select(getCurrentBoardIndex));
  currentColumns$: Observable<Column[]> = this.store.pipe(select(getCurrentBoard)).pipe(pluck('columns')) as Observable<Column[]>;
  isSavingBoard$: Observable<boolean> = this.store.pipe(select(isSavingBoard));
  numberOfBoards$: Observable<number> = this.store.pipe(select(getNumberOfBoards));

  constructor(private store: Store<fromApp.State>) {}

  addNewBoard(board: Board): void {
    this.store.dispatch(boardActions.addNewBoard({ board }));
  }

  deleteBoard(): void {
    this.store.dispatch(boardActions.deleteBoard());
  }

  loadBoards(): void {
    this.store.dispatch(boardActions.loadBoards());
  }

  selectBoard(board: Board) {
    this.store.dispatch(boardActions.selectBoard({ board }));
  }

  unselectBoard() {
    this.store.dispatch(boardActions.unselectBoard());
  }
}
