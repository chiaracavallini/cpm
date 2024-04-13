import { CpmEventType } from "./cpm-event-type";
import { CpmEventLocation } from "./cpm-event-location";

export interface CpmEvent {
    id?: string,
    name?: string,
    description?: string,
    date?: string,
    type?: CpmEventType,
    location?: CpmEventLocation
}
