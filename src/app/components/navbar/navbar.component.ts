import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from '../../core/enums';
import {ModalService} from '../../core/services/modal.service';
import {LayoutStoreFacade} from '../../core/store/layout/layout-store.facade';
import {
  AddEditTaskDialogComponent
} from '../../pages/boards/components/add-edit-task-dialog/add-edit-task-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  currentTheme$: Observable<Theme> = this.layoutStoreFacade.getTheme$;
  isSidenavClosed$: Observable<boolean> = this.layoutStoreFacade.getIsSidenavClosed$;

  constructor(private layoutStoreFacade: LayoutStoreFacade,
              private modalService: ModalService) { }

  ngOnInit(): void {
    this.onAddNewTask();
  }

  onAddNewTask(): void {
    this.modalService.open(AddEditTaskDialogComponent);
  }
}
