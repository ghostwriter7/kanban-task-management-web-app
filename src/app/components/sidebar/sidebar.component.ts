import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from '../../core/enums';
import {ThemeService} from '../../core/services';
import {ModalService} from '../../core/services/modal.service';
import {LayoutStoreFacade} from '../../core/store/layout/layout-store.facade';
import {
  AddEditBoardDialogComponent
} from '../../pages/boards/components/add-edit-board-dialog/add-edit-board-dialog.component';
import {Board} from '../../pages/boards/core/interfaces';
import {BoardsStoreFacade} from '../../pages/boards/core/store/boards-store.facade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  @Output() onBoardSelected = new EventEmitter<boolean>();

  boards$: Observable<Board[]> = this.boardsStoreFacade.boards$;
  currentBoardIndex$: Observable<number> = this.boardsStoreFacade.currentBoardIndex$;
  currentTheme$: Observable<Theme> = this.layoutStoreFacade.theme$;
  isLoadingBoards$: Observable<boolean> = this.boardsStoreFacade.isLoadingBoards$;
  isMobile!: boolean;
  isSidenavClosed$: Observable<boolean> = this.layoutStoreFacade.isSidenavClosed$;
  numberOfBoards$: Observable<number> = this.boardsStoreFacade.numberOfBoards$;


  constructor(
    private boardsStoreFacade: BoardsStoreFacade,
    private breakpointObserver: BreakpointObserver,
    private layoutStoreFacade: LayoutStoreFacade,
    private modalService: ModalService,
    private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(({matches}) => {
      this.isMobile = matches;
    });
  }

  onAddNewBoard(): void {
    this.modalService.open(AddEditBoardDialogComponent);
  }

  onSelectBoard(board: Board) {
      this.boardsStoreFacade.selectBoard(board);
      if (this.isMobile) {
        this.onBoardSelected.next(true);
      }
  }

  onToggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleSidenav(): void {
    this.layoutStoreFacade.toggleSidenav();
  }

}
