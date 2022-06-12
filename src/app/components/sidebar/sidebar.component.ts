import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from '../../core/enums';
import {ThemeService} from '../../core/services';
import {ModalService} from '../../core/services/modal.service';
import {LayoutStoreFacade} from '../../core/store/layout/layout-store.facade';
import {
  AddEditBoardDialogComponent
} from '../../pages/boards/components/add-edit-board-dialog/add-edit-board-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  boards: { name: string }[] = [
    { name: 'Platform Launch'},
    { name: 'Marketing Plan'},
    { name: 'Roadmap'}
  ];
  currentTheme$: Observable<Theme> = this.layoutStoreFacade.getTheme$;
  isSidenavClosed$: Observable<boolean> = this.layoutStoreFacade.getIsSidenavClosed$;


  constructor(private layoutStoreFacade: LayoutStoreFacade,
              private modalService: ModalService,
              private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onAddNewBoard(): void {
    this.modalService.open(AddEditBoardDialogComponent);
  }

  onToggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleSidenav(): void {
    this.layoutStoreFacade.toggleSidenav();
  }
}
