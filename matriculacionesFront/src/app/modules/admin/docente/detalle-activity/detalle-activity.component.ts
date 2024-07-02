import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DocenteService } from 'src/app/services/docente.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';
import { ModalCalificarComponent } from '../components/modal-calificar/modal-calificar.component';

@Component({
  selector: 'app-detalle-activity',
  templateUrl: './detalle-activity.component.html',
  styleUrls: ['./detalle-activity.component.css']
})
export class DetalleActivityComponent {

  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['tema', 'materia', 'student','repre','statusStudent','statusDocente','calificacion','file','calificar'];
  matriculas:any
  CurrentUser :any
  currentActivity:any
  detalles:any

  constructor(private adminService : AdminService
    , public publicServices: PublicServicesService
    ,public dialog: MatDialog
    , public docenteService: DocenteService){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
   this.getActDetalleByAssists()
  }  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.detalles.filter = filterValue.trim().toLowerCase();
  }


  getActDetalleByAssists(){
    const formData = new FormData();
     this.currentActivity= localStorage.getItem("currentActivity")
     this.currentActivity=JSON.parse(this.currentActivity)

    formData.append("idActivity", this.currentActivity.id)
    console.log( this.CurrentUser.idCurso)
    this.docenteService.getActivitysDetalleByAssists(formData).subscribe((data:any)=>{
      this.detalles=new MatTableDataSource(data);
      console.log(data)
    }, (error: Error) => {
      Swal.fire({
        icon: 'error',
        title: "Ha ocurrido un error",
        text: error.message,
      }).then(() => {

      })
    }, () => { }
    
    );
  }


  
  openDialogCalificar(idActDet:any) {
    const dialogRef = this.dialog.open(ModalCalificarComponent, { 
      data: {idActDet: idActDet},
      panelClass: 'custom-dialog-container' });
      dialogRef.componentInstance.eventoHijo.subscribe(() => {
        // Llamar al método o proceso en el componente padre
        this. getActDetalleByAssists();
      });
  }



}
