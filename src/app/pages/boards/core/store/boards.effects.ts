import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import firebase from 'firebase/compat';
import {catchError, from, map, mergeMap, of, switchMap} from 'rxjs';
import {Board} from '../interfaces';
import * as boardsActions from './boards.actions';

@Injectable()
export class BoardsEffects {
  addNewBoard$ = createEffect(() => this.actions$.pipe(
    ofType(boardsActions.addNewBoard),
    mergeMap(action => {
      return from(this.db.collection<Board>('boards').add(action.board)).pipe(
        map(docRef => boardsActions.addNewBoardSuccess({board: {...action.board, id: docRef.id}})),
        catchError(error => of(boardsActions.addNewBoardFailure({error})))
      )
    })
  ));

  loadBoards$ = createEffect(() => this.actions$.pipe(
    ofType(boardsActions.loadBoards),
    switchMap(() => this.db.collection<Board>('boards').get().pipe(
      map((snaps) => {
        const boards: Board[] = [];
        snaps.forEach(snap => {
          boards.push({...snap.data(), id: snap.id});
        });
        return boardsActions.loadBoardsSuccess({boards});
      }),
      catchError(error => of(boardsActions.loadBoardsFailure({error})))
    ))
  ))

  constructor(private actions$: Actions,
              private db: AngularFirestore) {
  }
}
