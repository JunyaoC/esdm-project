import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceDetailsPageRoutingModule } from './attendance-details-routing.module';

import { AttendanceDetailsPage } from './attendance-details.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceDetailsPageRoutingModule,
    QRCodeModule
  ],
  declarations: [AttendanceDetailsPage]
})
export class AttendanceDetailsPageModule {}
