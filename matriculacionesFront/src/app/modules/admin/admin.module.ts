import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { NavAdminComponent } from './utils/nav-admin/nav-admin.component';
import { ColaboradoresComponent } from './administrator/crud-colaboradores/colaboradores.component';
import { DashboardComponent } from './administrator/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CursosMateriasComponent } from './administrator/crud-cursos-materias/cursos-materias.component';
import { AdminloginComponent } from './utils/adminlogin/adminlogin.component';
import { CrudActivitiesComponent } from './docente/crud-activities/crud-activities.component';
import { CrudAssistsComponent } from './docente/crud-assists/crud-assists.component';
import { DashboardDocenteComponent } from './docente/dashboard-docente/dashboard-docente.component';
import { NavDocenteComponent } from './utils/nav-docente/nav-docente.component';
import { ModalColabsComponent } from './administrator/components/modal-colabs/modal-colabs.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ModalAssistsComponent } from './docente/components/modal-assists/modal-assists.component';
import { ModalAddActivityComponent } from './docente/components/modal-add-activity/modal-add-activity.component';
import { MatSelectModule } from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ModalActivityByStudentComponent } from './docente/components/modal-activity-by-student/modal-activity-by-student.component';
import { CrudStudentToValidateComponent } from './administrator/crud-student-to-validate/crud-student-to-validate.component';
import { ModalDocumentsComponent } from './administrator/components/modal-documents/modal-documents.component';
import { ModalValidateStudentComponent } from './administrator/components/modal-validate-student/modal-validate-student.component';
import { ReportesComponent } from './administrator/reportes/reportes.component';
import { CrudPagosComponent } from './pagos/crud-pagos/crud-pagos.component';
import { NavPagosComponent } from './utils/nav-pagos/nav-pagos.component';
import { MatMenuModule } from '@angular/material/menu';
import { DetalleActivityComponent } from './docente/detalle-activity/detalle-activity.component';
import { ModalCalificarComponent } from './docente/components/modal-calificar/modal-calificar.component';
import { NavigationsModule } from '../navigations/navigations.module';
import { MatButtonModule } from '@angular/material/button';
import { ModalCreateCursoComponent } from './administrator/components/modal-create-curso/modal-create-curso.component';
import { MatCardModule } from '@angular/material/card';
import { GuestWebUserComponent } from './administrator/guest-web-user/guest-web-user.component';
import { ModalCrudMateriasByCrusoComponent } from './administrator/components/modal-crud-materias-by-cruso/modal-crud-materias-by-cruso.component';

@NgModule({
  declarations: [
    
    NavAdminComponent,
    ColaboradoresComponent,
    DashboardComponent,
    CursosMateriasComponent,
    AdminloginComponent,
    CrudActivitiesComponent,
    CrudAssistsComponent,
    DashboardDocenteComponent,
    NavDocenteComponent,
    ModalColabsComponent,
    ModalAssistsComponent,
    ModalAddActivityComponent,
    ModalActivityByStudentComponent,
    CrudStudentToValidateComponent,
    ModalDocumentsComponent,
    ModalValidateStudentComponent,
    ReportesComponent,
    CrudPagosComponent,
    NavPagosComponent,
    DetalleActivityComponent,
    ModalCalificarComponent,
    ModalCreateCursoComponent,
    GuestWebUserComponent,
    ModalCrudMateriasByCrusoComponent,
    
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    NavigationsModule,
    MatMenuModule,
     MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
