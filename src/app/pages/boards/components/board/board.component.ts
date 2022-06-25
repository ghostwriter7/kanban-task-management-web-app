import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {DialogMode} from '../../../../core/enums';
import {ModalService} from '../../../../core/services/modal.service';
import {Column} from '../../core/interfaces';
import {BoardsStoreFacade} from '../../core/store/boards-store.facade';
import {AddEditBoardDialogComponent} from '../add-edit-board-dialog/add-edit-board-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  columns$: Observable<Column[]> = this.boardStoreFacade.currentColumns$;

  constructor(private boardStoreFacade: BoardsStoreFacade, private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  onAddNewColumn(): void {
    this.modalService.open(AddEditBoardDialogComponent, { mode: DialogMode.Edit });
  }

}
