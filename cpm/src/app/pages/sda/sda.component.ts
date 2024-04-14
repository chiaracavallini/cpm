import {Component, OnInit} from '@angular/core';
import {SdaService} from "../../shared/services/sda.service";
import {CpmSdaCourse} from "../../shared/models/cpm-sda-course";

@Component({
  selector: 'cpm-sda',
  templateUrl: './sda.component.html',
  styleUrls: ['./sda.component.scss']
})
export class SdaComponent implements OnInit {
  sdaCoursesList: CpmSdaCourse[] = []

  constructor(private readonly sdaService: SdaService) {
  }

  ngOnInit() {
    this.sdaService.getSdaCoursesList().subscribe((courses) => {
      this.sdaCoursesList = courses
    })
  }

  openAttachmentDownloadPage(attachmentUrl: string): void {
    window.open(attachmentUrl, '_blank')
  }

}
