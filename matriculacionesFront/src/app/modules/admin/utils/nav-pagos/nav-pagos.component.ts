import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CambiarContraComponent } from 'src/app/modules/navigations/cambiar-contra/cambiar-contra.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-pagos',
  templateUrl: './nav-pagos.component.html',
  styleUrls: ['./nav-pagos.component.css']
})
export class NavPagosComponent {



  constructor(private router :Router,public dialog: MatDialog){
   
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
