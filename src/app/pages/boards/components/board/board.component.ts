import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Column} from '../../core/interfaces';
import {BoardsStoreFacade} from '../../core/store/boards-store.facade';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns$: Observable<Column[]> = this.boardStoreFacade.currentColumns$;

  constructor(private boardStoreFacade: BoardsStoreFacade) { }

  ngOnInit(): void {
  }

}
