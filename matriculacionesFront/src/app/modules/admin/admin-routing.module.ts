import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './administrator/crud-colaboradores/colaboradores.component';
import { CursosMateriasComponent } from './administrator/crud-cursos-materias/cursos-materias.component';
import { DashboardComponent } from './administrator/dashboard/dashboard.component';
import { CrudActivitiesComponent } from './docente/crud-activities/crud-activities.component';
import { CrudAssistsComponent } from './docente/crud-assists/crud-assists.component';
import { DashboardDocenteComponent } from './docente/dashboard-docente/dashboard-docente.component';
import { NavAdminComponent } from './utils/nav-admin/nav-admin.component';
import { CrudStudentToValidateComponent } from './administrator/crud-student-to-validate/crud-student-to-validate.component';
import { CrudPagosComponent } from './pagos/crud-pagos/crud-pagos.component';
import { DetalleActivityComponent } from './docente/detalle-activity/detalle-activity.component';
import { GuestWebUserComponent } from './administrator/guest-web-user/guest-web-user.component';

const routes: Routes = [

  {
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: 'colaboradores', component: ColaboradoresComponent
      },
      {
        path: 'new/student', component: CrudStudentToValidateComponent
      },
      {
        path: 'cursos', component: CursosMateriasComponent
      },
      {
        path: 'webuser', component: GuestWebUserComponent  
      },
      // Define las rutas específicas del módulo Admin aquí
      // Por ejemplo: { path: 'dashboard', component: DashboardComponent },
    ],
  },

  {
    path: 'workspace', 
    component: DashboardDocenteComponent,
    children: [
      {
        path: 'activitys', component: CrudActivitiesComponent
      },
      {
        path: 'assists', component: CrudAssistsComponent
      },
      {
        path: 'activitys/detalle', component: DetalleActivityComponent  
      },
      
      // Define las rutas específicas del módulo Admin aquí
      // Por ejemplo: { path: 'dashboard', component: DashboardComponent },
    ],
  },

  {
    path: 'pagos', 
    component: CrudPagosComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
