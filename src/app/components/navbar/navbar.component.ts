import {ChangeDetectionStrategy, Component} from '@angular/core';
import {map, Observable, startWith} from 'rxjs';
import {DialogMode, Theme} from '../../core/enums';
import {ContextMenu} from '../../core/interfaces';
import {ModalService} from '../../core/services/modal.service';
import {LayoutStoreFacade} from '../../core/store/layout/layout-store.facade';
import {
  AddEditBoardDialogComponent
} from '../../pages/boards/components/add-edit-board-dialog/add-edit-board-dialog.component';
import {
  AddEditTaskDialogComponent
} from '../../pages/boards/components/add-edit-task-dialog/add-edit-task-dialog.component';
import {Board} from '../../pages/boards/core/interfaces';
import {BoardsStoreFacade} from '../../pages/boards/core/store/boards-store.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  contextMenu: ContextMenu[] = [
    {label: 'Edit Board', action: this.onEditBoard.bind(this)},
    {label: 'Delete Board', action: this.onDeleteBoard.bind(this), danger: true}
  ];
  currentBoard$: Observable<Board | undefined> = this.boardsStoreFacade.currentBoard$;
  currentTheme$: Observable<Theme> = this.layoutStoreFacade.getTheme$;
  disabled$: Observable<boolean> = this.boardsStoreFacade.currentBoard$.pipe(map(board => !board), startWith(true));
  isSidenavClosed$: Observable<boolean> = this.layoutStoreFacade.getIsSidenavClosed$;

  constructor(
    private boardsStoreFacade: BoardsStoreFacade,
    private layoutStoreFacade: LayoutStoreFacade,
    private modalService: ModalService) {
  }

  onAddNewTask(): void {
    this.modalService.open(AddEditTaskDialogComponent);
  }

  onDeleteBoard(): void {
    this.boardsStoreFacade.deleteBoard();
  }

  onEditBoard(): void {
    this.modalService.open(AddEditBoardDialogComponent, { mode: DialogMode.Edit })
  }
}
