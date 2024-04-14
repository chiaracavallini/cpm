import {Component, Input, OnInit} from '@angular/core';
import {CpmEvent} from "../../../shared/models/cpm-event";

@Component({
  selector: 'cpm-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  @Input() event: CpmEvent = {}

  ngOnInit(): void {
  }

}
