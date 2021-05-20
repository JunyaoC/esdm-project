import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.page.html',
  styleUrls: ['./attendance-details.page.scss'],
})
export class AttendanceDetailsPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss()
  }

}
