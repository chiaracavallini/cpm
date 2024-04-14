import {Component, Input, OnInit} from '@angular/core'
import { CpmEvent } from '../../../shared/models/cpm-event'

@Component({
  selector: 'cpm-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {
  @Input() event: CpmEvent = {}

  speakersLabel: string = ''
  ngOnInit(): void {
    this.speakersLabel = this.event.firstSpeaker?.fullName!
    if(this.event.secondSpeaker) this.speakersLabel += ' & ' + this.event.secondSpeaker?.fullName!
  }
}
