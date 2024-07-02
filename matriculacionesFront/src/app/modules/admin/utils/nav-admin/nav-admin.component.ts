import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CambiarContraComponent } from 'src/app/modules/navigations/cambiar-contra/cambiar-contra.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent {
  CurrentUser:any
  constructor(private router :Router,public dialog: MatDialog){
    this.CurrentUser = localStorage.getItem("sesion")
    this.CurrentUser = JSON.parse(this.CurrentUser)
  }

  goColab(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("admin/colaboradores")
  }

  goNewStudents(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("admin/new/student")
  }

  
  goCursos(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("admin/cursos")
  }

  goWebUser(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("admin/webuser")
  }


  cerrarSesion(){
    localStorage.removeItem('sesion');
    Swal.fire(
      'Exito!',
      'Sesion cerrada!',
      'success'
    )
    localStorage.clear();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["/portal"])
}


openModalCambiarContra(){
  const dialogRef =  this.dialog.open(CambiarContraComponent, { 
  //  data: {studentXassists: data},
    panelClass: 'custom-dialog-container', disableClose: true } );
}

}
