import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../../core/interfaces';
import {BoardsStoreFacade} from '../../core/store/boards-store.facade';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column!: string;
  color: string = '#' + Math.floor(Math.random()*16777215).toString(16);
  tasks$!: Observable<Task[]>;

  constructor(private boardsStoreFacade: BoardsStoreFacade) { }

  ngOnInit(): void {
    this.tasks$ = this.boardsStoreFacade.getCurrentTasks(this.column);
  }

}
