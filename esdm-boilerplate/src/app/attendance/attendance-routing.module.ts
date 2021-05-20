import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendancePage } from './attendance.page';

const routes: Routes = [
  {
    path: '',
    component: AttendancePage
  },
  {
    path: 'attendance-details',
    loadChildren: () => import('./attendance-details/attendance-details.module').then( m => m.AttendanceDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendancePageRoutingModule {}
