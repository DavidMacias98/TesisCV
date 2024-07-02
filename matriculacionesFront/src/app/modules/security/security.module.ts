import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MatSelectModule } from '@angular/material/select';
import { NavigationsModule } from '../navigations/navigations.module';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UploadFileComponent
  ],
  imports: [
    MatCardModule,
    MatSelectModule,
    NavigationsModule,
    CommonModule,
    HttpClientModule,
    SecurityRoutingModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf,
     MatButtonModule
  ],exports:[
    RegisterComponent,
    LoginComponent,
    UploadFileComponent
  ]
})
export class SecurityModule { }
