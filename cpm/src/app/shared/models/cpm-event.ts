import { CpmEventType } from './cpm-event-type'
import { CpmEventLocation } from './cpm-event-location'
import { CpmEmployee } from './cpm-employee'

export interface CpmEvent {
  id?: string
  title?: string,
  subtitle?: string,
  description?: string
  date?: string,
  time?: string,
  duration?: string,
  type?: CpmEventType
  locations?: CpmEventLocation[]
  firstSpeaker?: CpmEmployee
  secondSpeaker?: CpmEmployee
  jolly?: CpmEmployee
  frontDesk?: CpmEmployee
  fullPrice?: number
  discountedPrice?: number
}
