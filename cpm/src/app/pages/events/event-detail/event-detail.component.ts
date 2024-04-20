import {Component, Input, OnInit} from '@angular/core';
import {CpmEvent} from "../../../shared/models/cpm-event";
import {ModalService} from "../../../shared/services/modal.service";

@Component({
  selector: 'cpm-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  @Input() event: CpmEvent = {}

  constructor(private readonly modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.closeModal('')
  }

}
