import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { NavigationsRoutingModule } from './navigations-routing.module';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './nav-repre/nav/nav.component';
import { NavClientComponent } from './nav-repre/nav-client/nav-client.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NavParametersComponent } from './nav-student/nav-parameters/nav-parameters.component';
import { NavStudentComponent } from './nav-student/nav-student/nav-student.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CambiarContraComponent } from './cambiar-contra/cambiar-contra.component';
import { LoadingComponent } from './loading/loading.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    GlobalNavComponent,
    NavComponent,
    NavClientComponent,
    NavStudentComponent,
    NavParametersComponent,
    CambiarContraComponent,
    LoadingComponent
  ],
  imports: [
    MatInputModule,
    MatMenuModule,
    CommonModule,
    NavigationsRoutingModule,
    MatSidenavModule,
    MatFormFieldModule, MatSelectModule, MatButtonModule,
    HttpClientModule,
    FormsModule,  ReactiveFormsModule, NgIf,
    MatCardModule

  ],exports:[
    GlobalNavComponent,
    NavClientComponent,
    NavStudentComponent,
    LoadingComponent
  ]
})
export class NavigationsModule { }
