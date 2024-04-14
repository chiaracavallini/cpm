import { Injectable } from '@angular/core'
import { CpmSdaCourse } from '../models/cpm-sda-course'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SdaService {
  constructor(private readonly httpClient: HttpClient) {}

  getSdaCoursesList() {
    return this.httpClient.get<CpmSdaCourse[]>('http://localhost:3000/sda-courses')
  }
}
