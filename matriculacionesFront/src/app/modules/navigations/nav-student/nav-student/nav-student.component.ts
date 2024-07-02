import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CambiarContraComponent } from '../../cambiar-contra/cambiar-contra.component';

@Component({
  selector: 'app-nav-student',
  templateUrl: './nav-student.component.html',
  styleUrls: ['./nav-student.component.css']
})
export class NavStudentComponent {

  sesion:any

  constructor(private router :Router,public dialog: MatDialog){
    this.sesion= localStorage.getItem("sesion")
    if(this.sesion!!){ 
      this.sesion=  JSON.parse(this.sesion)
    }
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
