import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleStudentRoutingModule } from './module-student-routing.module';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { NavigationsModule } from '../../navigations/navigations.module';
import { ActivitysStudentComponent } from './activitys-student/activitys-student.component';
import { NaviStudentComponent } from './navi-student/navi-student.component';
import { MatTableModule } from '@angular/material/table';
import { DetalleActivityComponent } from './detalle-activity/detalle-activity.component';
import { AssistsStudentComponent } from './assists-student/assists-student.component';


@NgModule({
  declarations: [
    DashboardStudentComponent,
    ActivitysStudentComponent,
    NaviStudentComponent,
    DetalleActivityComponent,
    AssistsStudentComponent
  ],
  imports: [
    CommonModule,
    ModuleStudentRoutingModule,
    NavigationsModule,
    MatTableModule,
  ]
})
export class ModuleStudentModule { }
