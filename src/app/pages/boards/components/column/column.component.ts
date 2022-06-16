import {Component, Input, OnInit} from '@angular/core';
import {Column} from '../../core/interfaces';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column!: Column;
  color: string = '#' + Math.floor(Math.random()*16777215).toString(16);


  mockupTasks: { title: string; allSubtasks: number; completedSubtasks: number }[] = [
    { title: 'Build UI for search', allSubtasks: 1, completedSubtasks: 0 },
    { title: 'Build UI for search', allSubtasks: 1, completedSubtasks: 0 },
    { title: 'Build UI for search', allSubtasks: 1, completedSubtasks: 0 },
    { title: 'Build UI for search', allSubtasks: 1, completedSubtasks: 0 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
