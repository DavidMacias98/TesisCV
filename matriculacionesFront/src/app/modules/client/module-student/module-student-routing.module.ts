import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStudentComponent } from '../module-student/dashboard-student/dashboard-student.component';
import { ActivitysStudentComponent } from './activitys-student/activitys-student.component';
import { NaviStudentComponent } from './navi-student/navi-student.component';
import { DetalleActivityComponent } from './detalle-activity/detalle-activity.component';
import { AssistsStudentComponent } from './assists-student/assists-student.component';

const routes: Routes = [

  {
    path: '', component: NaviStudentComponent,
    children: [
      {
        path: '', component: DashboardStudentComponent
      },
      {
        path: 'activitys', component: ActivitysStudentComponent
     
      },
      {
        path: 'activitys/detalle', component: DetalleActivityComponent, data: { detalleActivity: String }
      },
      {
        path: 'assists', component: AssistsStudentComponent
      },

      
      // Define las rutas específicas del módulo Admin aquí
      // Por ejemplo: { path: 'dashboard', component: DashboardComponent },
    ],
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleStudentRoutingModule { }
