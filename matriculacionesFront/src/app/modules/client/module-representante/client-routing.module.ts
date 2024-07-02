import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavClientComponent } from '../../navigations/nav-repre/nav-client/nav-client.component';
import { NavComponent } from '../../navigations/nav-repre/nav/nav.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatriculacionComponent } from './matriculacion/matriculacion.component';
import { CalifiacionesComponent } from './califiaciones/califiaciones.component';
import { ActivitysRepresentanteComponent } from './activitys-representante/activitys-representante.component';
import { NavRepreComponent } from './nav-repre/nav-repre.component';
import { RegistarAlumnoComponent } from './registar-alumno/registar-alumno.component';

const routes: Routes = [


  {
    path: '', component: NavRepreComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'alumnos', component:  AlumnosComponent
      },
      {
        path: 'registrar/alumnos', component:  RegistarAlumnoComponent
      },
      {
        path: 'matriculas', component:  MatriculacionComponent
      },
      {
        path: 'activitys', component:  ActivitysRepresentanteComponent
      },
    
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
