import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import {Board} from '../interfaces';
import * as boardActions from './boards.actions';

@Injectable({
  providedIn: 'root'
})
export class BoardsStoreFacade {
  constructor(private store: Store<fromApp.State>) {
  }

  addNewBoard(board: Board): void {
    this.store.dispatch(boardActions.addNewBoard({ board }));
  }
}
