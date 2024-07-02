import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocenteService } from 'src/app/services/docente.service';
import Swal from 'sweetalert2';

export interface DialogData {
  studentXassists:any
  }

@Component({
  selector: 'app-modal-assists',
  templateUrl: './modal-assists.component.html',
  styleUrls: ['./modal-assists.component.css']
})


export class ModalAssistsComponent {
  
  displayedColumns: string[] = ['name', 'ape', 'whatsapp','asistencia'];
  studentXassists:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ,public docenteService: DocenteService
  ,public dialogRef: MatDialogRef<ModalAssistsComponent>){
    this.studentXassists=data.studentXassists
    console.log(this.studentXassists )
  }


present(idDetalle:any,isChecked:any){
  const formData = new FormData();
  formData.append("idDetalle",idDetalle )
  formData.append("status",isChecked.toString())

  this.docenteService.putDetalleStatus(formData).subscribe((data:any)=>{

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


guardadoLogico(){
  Swal.fire(
    'Exito!',
    'Asistencias guardada',
    'success'
  ).then(() => {
    this.dialogRef.close()
  })

}

}
