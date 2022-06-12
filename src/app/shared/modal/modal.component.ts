import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../core/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.modalService.close();
  }
}
