import { AfterViewInit, Component, Input, OnInit } from '@angular/core'
import { CpmEvent } from '../../../shared/models/cpm-event'
import { CpmEventType } from '../../../shared/models/cpm-event-type'
import { ModalService } from '../../../shared/services/modal.service'
import { EventDetailComponent } from '../event-detail/event-detail.component'

@Component({
  selector: 'cpm-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit, AfterViewInit {
  @Input() event: CpmEvent = {}

  iconPaths: string[] = []
  speakersLabel: string = ''

  constructor(private readonly modalService: ModalService) {}
  ngOnInit(): void {
    this.speakersLabel = this.event.firstSpeaker?.fullName!
    if (this.event.secondSpeaker) this.speakersLabel += ` & ${this.event.secondSpeaker?.fullName}`
  }

  ngAfterViewInit() {
    this.iconTranslationPath()
  }

  openDetailModal() {
    this.modalService.openModal(EventDetailComponent, this.event.title ?? 'Dettaglio evento', 'lg', {
      event: this.event
    })
  }

  iconTranslationPath(): void {
    for (const type of this.event?.types!) {
      switch (type) {
        case CpmEventType.CONFERENCE:
          console.log('conference')
          this.iconPaths.push('./assets/icons/mic-outline-blue.svg')
          break
        case CpmEventType.FAMILY_SUNDAY:
          console.log('family')
          this.iconPaths.push('./assets/icons/family-outline-blue.svg')
          break
        case CpmEventType.OBSERVATION:
          console.log('observation')
          this.iconPaths.push('./assets/icons/telescope-outline-blue.svg')
          break
      }
    }
  }
}
