import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromApp from '../../../../core/store/app.reducer';
import {Board} from '../interfaces';
import * as boardActions from './boards.actions';

@Injectable({
  providedIn: 'root'
})
export class BoardsStoreFacade {
  boards$: Observable<Board[]> = this.store.pipe(select(state => state.boards.boards));
  constructor(private store: Store<fromApp.State>) {
  }

  addNewBoard(board: Board): void {
    this.store.dispatch(boardActions.addNewBoard({ board }));
  }

  loadBoards(): void {
    this.store.dispatch(boardActions.loadBoards());
  }
}
