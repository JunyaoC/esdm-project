import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryPageRoutingModule } from './library-routing.module';

import { LibraryPage } from './library.page';

import { AngularFireModule } from "@angular/fire";
import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [LibraryPage]
})
export class LibraryPageModule {}
