import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalService} from '../../core/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.close.emit(true);
    this.modalService.close();
  }
}
