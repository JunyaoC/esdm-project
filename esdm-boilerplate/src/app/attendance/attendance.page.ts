import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AttendanceDetailsPage} from '../attendance-details/attendance-details.page';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  sessions = [

    {
      sessionId:1
    },
    {
      sessionId:2
    },
    {
      sessionId:3
    }

  ]

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async viewClass() {
    const modal = await this.modalController.create({
      component: AttendanceDetailsPage,
      cssClass: 'full-modal'
    });
    return await modal.present();
  }

}
