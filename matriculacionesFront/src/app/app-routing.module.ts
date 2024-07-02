import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './modules/admin/utils/adminlogin/adminlogin.component';
import { NavAdminComponent } from './modules/admin/utils/nav-admin/nav-admin.component';
import { DashboardComponent } from './modules/client/module-representante/dashboard/dashboard.component';
import { LoginComponent } from './modules/security/login/login.component';
import { RegisterComponent } from './modules/security/register/register.component';

const routes: Routes = [


  {
    path: '', // Ruta vacía, podría ser tu página de inicio
    component: LoginComponent,
  },

  {
    path: 'portal', // Ruta vacía, podría ser tu página de inicio
    component: AdminloginComponent,
  },


/*
    path: '', // Ruta vacía, podría ser tu página de inicio
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule),
  },
*/
  ///////////////STUDENT//////////////////
  {
    path: 'academy', // Ruta vacía, podría ser tu página de inicio
    loadChildren: () => import('./modules/client/module-student/module-student.module').then(m => m.ModuleStudentModule),
  },

  ///////////////REPRESENTANTE//////////////////
  {
    path: 'representante',
    loadChildren: () => import('./modules/client/module-representante/client.module').then(m => m.ClientModule),
  },


  ///////////////ADMINISTRADOR//////////////////
  {
    path: 'admin', // Ruta vacía, podría ser tu página de inicio
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
