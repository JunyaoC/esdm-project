import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceModalPageRoutingModule } from './resource-modal-routing.module';

import { ResourceModalPage } from './resource-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceModalPageRoutingModule
  ],
  declarations: [ResourceModalPage]
})
export class ResourceModalPageModule {}
