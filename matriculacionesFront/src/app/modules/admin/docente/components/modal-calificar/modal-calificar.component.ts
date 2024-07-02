import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocenteService } from 'src/app/services/docente.service';
import Swal from 'sweetalert2';

export interface DialogData {
  idActDet:any
  }

@Component({
  selector: 'app-modal-calificar',
  templateUrl: './modal-calificar.component.html',
  styleUrls: ['./modal-calificar.component.css']
})


export class ModalCalificarComponent {
  @Output() eventoHijo = new EventEmitter();
  idActDet:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ,public docenteService: DocenteService
  ,public dialogRef: MatDialogRef<ModalCalificarComponent>){
    this.idActDet=data.idActDet
    console.log(this.idActDet )
  }




  calificar(calificacion:any){
    const request = new FormData();
    request.append("idActDet",this.data.idActDet)
    request.append("calificacion",calificacion)
  
    this.docenteService.putCalificarActivity(request).subscribe((data:any)=>{
      Swal.fire({
        icon: 'success',
        title: "Exito",
        text: "Calificado",
      }).then(() => {
        
        this.eventoHijo.emit()
        this.dialogRef.close()
      })
  
    }, (error: Error) => {
      Swal.fire({
        icon: 'error',
        title: "Ha ocurrido un error",
        text: error.message,
      }).then(() => {
        this.dialogRef.close()
      })
    }, () => { 
      
    }
    
    );

  }


}
