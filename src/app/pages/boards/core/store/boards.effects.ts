import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, finalize, from, map, mergeMap, of, switchMap, take, tap, withLatestFrom} from 'rxjs';
import {ModalService} from '../../../../core/services/modal.service';
import {ConfirmDeleteDialogComponent} from '../../../../shared/confirm-delete-dialog/confirm-delete-dialog.component';
import {Board} from '../interfaces';
import {BoardsStoreFacade} from './boards-store.facade';
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

  deleteBoard$ = createEffect(() => this.actions$.pipe(
    ofType(boardsActions.deleteBoard),
    withLatestFrom(this.boardsStoreFacade.currentBoard$),
    switchMap(([_, board]) => {
      const cmpRef = this.modalService.open<ConfirmDeleteDialogComponent>(ConfirmDeleteDialogComponent);
      return cmpRef.instance.response$.pipe(take(1), map(response =>
        response ? boardsActions.deleteBoardConfirmed({board: board!}) : boardsActions.deleteBoardCancelled())
      )
    })
  ));

  deleteBoardCancelled$ = createEffect(() => this.actions$.pipe(
    ofType(boardsActions.deleteBoardCancelled),
    tap(() => this.modalService.close())
  ), {dispatch: false});

  deleteBoardConfirmed$ = createEffect(() => this.actions$.pipe(
    ofType(boardsActions.deleteBoardConfirmed),
    switchMap(({board: {id}}) => {
      return from(this.db.doc(`boards/${id}`).delete()).pipe(
        map(() => boardsActions.deleteBoardSuccess({id})),
        catchError(error => of(boardsActions.deleteBoardError({error}))),
        finalize(() => {
          this.modalService.close();
          this.boardsStoreFacade.unselectBoard();
        }));
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
  ));

  updateBoard$ = createEffect(() => this.actions$.pipe(
    ofType(boardsActions.updateBoard),
    switchMap(({board}) => {
      return from(this.db.doc(`boards/${board.id}`).update(board)).pipe(
        map(() =>{
          this.modalService.close();
          return boardsActions.updateBoardSuccess({board});
        } ),
        catchError(error => of(boardsActions.updateBoardFailure({error})))
      );
    })
  ));

  constructor(private actions$: Actions,
              private boardsStoreFacade: BoardsStoreFacade,
              private db: AngularFirestore,
              private modalService: ModalService) {
  }
}
