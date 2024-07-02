import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { DocenteService } from 'src/app/services/docente.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';
import { ModalAssistsComponent } from '../components/modal-assists/modal-assists.component';

@Component({
  selector: 'app-crud-assists',
  templateUrl: './crud-assists.component.html',
  styleUrls: ['./crud-assists.component.css']
})
export class CrudAssistsComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['curso', 'fecha', 'docente','detalles'];
  matriculas:any
  CurrentUser :any
  Assists:any
  constructor(private adminService : AdminService
    , public publicServices: PublicServicesService
    ,public dialog: MatDialog
    , public docenteService: DocenteService){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
   this.getAssists()
  }  


  openModalAssist(data:any){
    const dialogRef =  this.dialog.open(ModalAssistsComponent, { 
      data: {studentXassists: data},
      panelClass: 'custom-dialog-container', disableClose: true } );
   
  }

  showStudent(idAssist:any){
    const formData = new FormData();
    formData.append("idAssist",idAssist )
    this.docenteService.getListaStudentXassits(formData).subscribe((data:any)=>{
      this.matriculas = new MatTableDataSource(data);
      this.matriculas.paginator=this.paginator
      console.log(  this.matriculas);
     this.openModalAssist(data);
    }, (error: Error) => {
      console.log()
      Swal.fire({
        icon: 'error',
        title: "Ha ocurrido un error",
        text: error.message,
      }).then(() => {

      })
    }, () => { 
      
    }
    );
  }

  getAssists(){
    const formData = new FormData();
    formData.append("idCurso", this.CurrentUser.idCurso)
    console.log( this.CurrentUser.idCurso)
    this.docenteService.getListaAssists(formData).subscribe((data:any)=>{
      this.Assists=data 
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

preAsistencia(){
  Swal.fire({
    title: "Deseas tomar la asistencia del dia de hoy?",
    text: "ESTA ACCION NO SE PUEDE REVERTIR!",
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Si"
  }).then((result) => {
    if (result.isConfirmed) {
      this.newListAssists()
    }
  });
}

  newListAssists(){
    const formData = new FormData();
    formData.append("idDocente", this.CurrentUser.id)  
    this.docenteService.putListaAsistencia(formData).subscribe((data:any)=>{
      this.getAssists()
//llamar alumnos 
    this.showStudent(data.id)
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

  verDetalle(idAssist:any){

    const formData = new FormData();
    formData.append("idAssist",idAssist )
    this.docenteService.getListaAssistsDetalle(formData).subscribe((data:any)=>
    {
      this.openModalAssist(data);
    },(error: Error) =>{Swal.fire({
      icon: 'error',
      title: "Ha ocurrido un error",
      text: error.message,
    }).then(() => {

    })},() =>{}
    );

  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   //  this.colabs.filter = filterValue.trim().toLowerCase();
  }

}
