import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AttendanceDetailsPage} from '../attendance-details/attendance-details.page';
import axios from 'axios';
import { CoreServiceService } from '../../core-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  server : string = 'http://localhost/php-folder/';

  sections = []
  selectedSection:any

  classes = []

  constructor(private modalController:ModalController, public cs:CoreServiceService) { }

  ngOnInit() {
    this.cs.initSub.subscribe( data => {
      this.listSection()
    })
  }

  async viewClass(_class) {
    const modal = await this.modalController.create({
      component: AttendanceDetailsPage,
      cssClass: 'full-modal',
      componentProps: _class
    });
    return await modal.present();
  }

  listSection(){

    let body = {
      'action':'list_section',
      'u_id':this.cs.currentUserData.u_id
    }

    axios.post(this.server + 'attendance/attendance.php', JSON.stringify(body)).then((res:any) => {
      console.log(res.data);

      if(res.data.success) {
        this.sections = [...res.data.sections]
        this.selectedSection = this.sections[0]
      }

      this.list_class()

    })


  }

  viewSection(section){
    this.selectedSection = section;
    this.list_class()

  }

  list_class(){
    let body = {
      'action':'list_class',
      'section_id':this.selectedSection.section_id
    }

    axios.post(this.server + 'attendance/attendance.php', JSON.stringify(body)).then((res:any) => {
      this.classes = [...res.data.classes];
      this.classes.forEach(c  => {
        c.class_time = moment(c.class_time)
      })
    })

  }
  
  

}
