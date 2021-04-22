import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryBrowsePageRoutingModule } from './library-browse-routing.module';

import { LibraryBrowsePage } from './library-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryBrowsePageRoutingModule
  ],
  declarations: [LibraryBrowsePage]
})
export class LibraryBrowsePageModule {}
