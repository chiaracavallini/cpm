import { CpmEmployee } from './cpm-employee'

export interface CpmSdaCourse {
  id?: string
  title?: string
  teacher?: CpmEmployee
  duration?: number
  startDate?: string
  price?: number
  attachmentUrl?: string
  registrationUrl?: string
}
