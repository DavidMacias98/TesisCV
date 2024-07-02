import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from '../../navigations/nav-repre/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatriculacionComponent } from './matriculacion/matriculacion.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { SecurityModule } from '../../security/security.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { NavigationsModule } from '../../navigations/navigations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { CalifiacionesComponent } from './califiaciones/califiaciones.component';
import { ActivitysRepresentanteComponent } from './activitys-representante/activitys-representante.component';
import { NavRepreComponent } from './nav-repre/nav-repre.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RegistarAlumnoComponent } from './registar-alumno/registar-alumno.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MatriculacionComponent,
    AlumnosComponent,
    CalifiacionesComponent,
    ActivitysRepresentanteComponent,
    NavRepreComponent,
    RegistarAlumnoComponent,
    
  ], bootstrap:    [ DashboardComponent ],
  imports: [
    MatPaginatorModule,
    MatStepperModule,
    CommonModule,
    NgxChartsModule,
    FormsModule,
    NavigationsModule,
    SecurityModule,
    ClientRoutingModule,
    NgIf,NgFor,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule
    
  ]
})
export class ClientModule { }
