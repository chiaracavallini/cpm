import { Component, OnInit } from '@angular/core'
import { CpmEvent } from '../../shared/models/cpm-event'
import { EventsService } from '../../shared/services/events.service'

@Component({
  selector: 'cpm-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventList: CpmEvent[] = []

  constructor(private readonly eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEventsList().subscribe((events) => {
      this.eventList = events
    })
  }
}
