import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Theme} from '../../core/enums';
import {ModalService} from '../../core/services/modal.service';
import {LayoutStoreFacade} from '../../core/store/layout/layout-store.facade';
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
export class NavbarComponent implements OnInit {
  currentBoard$: Observable<Board | undefined> = this.boardsStoreFacade.currentBoard$;
  currentTheme$: Observable<Theme> = this.layoutStoreFacade.getTheme$;
  disabled$: Observable<boolean> = this.boardsStoreFacade.currentBoard$.pipe(map(board => !board));
  isSidenavClosed$: Observable<boolean> = this.layoutStoreFacade.getIsSidenavClosed$;

  constructor(
    private boardsStoreFacade: BoardsStoreFacade,
    private layoutStoreFacade: LayoutStoreFacade,
              private modalService: ModalService) { }

  ngOnInit(): void {
    // this.onAddNewTask();
  }

  onAddNewTask(): void {
    this.modalService.open(AddEditTaskDialogComponent);
  }
}
