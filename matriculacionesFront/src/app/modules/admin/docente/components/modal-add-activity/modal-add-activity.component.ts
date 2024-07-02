import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { DocenteService } from 'src/app/services/docente.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-add-activity',
  templateUrl: './modal-add-activity.component.html',
  styleUrls: ['./modal-add-activity.component.css'],

})
export class ModalAddActivityComponent {
  nombredoc:any='Cargar actividad'
  file?: any;
  selectedMateria:any
  selectedTipAct:any
  CurrentUser :any
  materias:any
  tipAct:any
  @Output() eventoHijo = new EventEmitter();


  constructor(private adminService : AdminService
    , public publicServices: PublicServicesService
    ,public dialog: MatDialog
    , public docenteService: DocenteService
    , public dialogRef: MatDialogRef<ModalAddActivityComponent>){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    
      this.getCatalogos();
  } 



  getCatalogos(){
  this.getMaterias();
  this.getTipAct();
  }


  getMaterias(){
    const formData = new FormData();
    formData.append("idCurso",this.CurrentUser.idCurso)
    this.publicServices.getmateriaByCursos(formData).subscribe((data:any)=>{
      this.materias = data;
      console.log(  this.materias);
    }, (error: Error) => {
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

  getTipAct(){
    
    this.publicServices.getmTipAct().subscribe((data:any)=>{
      this.tipAct = data;
      console.log(  this.tipAct);
    }, (error: Error) => {
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

  putActivity(tema:any,fechmax:any,indicaciones:any){
    let activity={
      nameTema:tema,
      materia:{"id":this.selectedMateria.id},
      docente:{"id":this.CurrentUser.id},
      tipo:{"id":this.selectedTipAct.id},
      fechaMaxEntrega:fechmax,
      observacion:indicaciones
    }
    console.log(activity);
    this.docenteService.putActivity(activity).subscribe((data:any)=>{
     this.uploadDocument(data.id)
     this.eventoHijo.emit();
     
    }, (error: Error) => {
      Swal.fire({
        title: 'Ha ocurrido un error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }, () => { 
   
    }
    );
  }



  cerrarModal(){
    this.dialogRef.close();
  }

  onFilechange(event: any) {
    console.log(event.target.files[0]);
  /*  if (event.target.files[0].type != "application/pdf"
    ) {
      // this.cargando=false;
      Swal.fire({
        title: 'Error!',
        text: "Error Debe ingresar solo archivos excel",
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      event.currentTarget.files = null;
      this.nombredoc = "Cargar documento";
      return;
    }*/
    if (event.target.files[0].size > 3000000) {
      // this.cargando=false;
      Swal.fire({
        title: 'Error!',
        text: "Error El archivo no debe superar los 3MB",
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    this.file = event.target.files[0];
   // this.nombredoc = this.user?.id+"documento";
    console.log(event.currentTarget.files);
    event.target.value = '';
    return;
  }


  uploadDocument(idActivity:any) {

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('idActivity', idActivity);

    this.docenteService.putActivityFile(formData).subscribe((data: any) => {
      Swal.fire({
        icon: 'success',
        title: "Exito",
        text: "Actividad enviada",
      }).then(() => {
        this.dialogRef.close();
      })
      console.log("document cargadoi")
    }, (error: Error) => {
      Swal.fire({
        icon: 'error',
        title: "Ha ocurrido un error",
        text: error.message,
      }).then(() => {
        this.dialogRef.close();
      })
      console.log("document no cargado")
    }, () => { }
    );
  }
  

}
