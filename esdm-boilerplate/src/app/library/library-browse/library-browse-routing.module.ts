import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryBrowsePage } from './library-browse.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryBrowsePageRoutingModule {}
