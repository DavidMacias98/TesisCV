import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { CambiarContraComponent } from '../../cambiar-contra/cambiar-contra.component';

@Component({
  selector: 'app-nav-client',
  templateUrl: './nav-client.component.html',
  styleUrls: ['./nav-client.component.css']
})
export class NavClientComponent {
  sesion:any

  constructor(private router :Router,public dialog: MatDialog){
    this.sesion= localStorage.getItem("sesion")
    if(this.sesion!!){ 
      this.sesion=  JSON.parse(this.sesion)
    }
  }

  goAlumnos(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("dashboard/alumnos")
  }

  goMatriculas(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("dashboard/matriculas")
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
    this.router.navigate(["/"])
}


openModalCambiarContra(){
  const dialogRef =  this.dialog.open(CambiarContraComponent, { 
  //  data: {studentXassists: data},
    panelClass: 'custom-dialog-container', disableClose: true } );
}

}
