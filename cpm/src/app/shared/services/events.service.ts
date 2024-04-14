import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CpmEvent } from '../models/cpm-event'
import { CpmEmployee } from '../models/cpm-employee'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private readonly httpClient: HttpClient) {}

  getEventsList() {
    return this.httpClient.get<CpmEvent[]>('http://localhost:3000/events')
  }

  getEmployeesList() {
    return this.httpClient.get<CpmEmployee[]>('http://localhost:3000/employees')
  }
}
