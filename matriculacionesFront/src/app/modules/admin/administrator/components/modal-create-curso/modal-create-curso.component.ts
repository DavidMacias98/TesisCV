import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';


export interface Curso {
  name: string;
  precio: number;
  edad: string;
  orde:number;
 
}


@Component({
  selector: 'app-modal-create-curso',
  templateUrl: './modal-create-curso.component.html',
  styleUrls: ['./modal-create-curso.component.css']
})


export class ModalCreateCursoComponent {
  @Output() eventoHijo = new EventEmitter();
  curso!:Curso
  loading: any;
  firstFormGroup = this._formBuilder.group({
    NameCurso: ['', Validators.required],
    PriceCurso: ['', Validators.required],
    CorreoCtrl: ['', Validators.required],
    PassCtrl: ['', Validators.required],
  });

    constructor(
      private _formBuilder: FormBuilder,
      public dialog: MatDialog,
      public adminService: AdminService,
      public dialogRef: MatDialogRef<ModalCreateCursoComponent>
    ){
      
    }


    putCurso(name:any,price:any,edad:any, orde:any){
      this.loading=true
      this.curso = {
        name:name,
        precio:price,
        edad:edad,
        orde:orde
      }

      this.adminService.putCursos(this.curso).subscribe((data:any)=>{
        this.loading=false
        Swal.fire(
          'Exito!',
          'Curso creado correctamente!',
          'success'
        ).then(() => {
          this.eventoHijo.emit();
          this.dialogRef.close();
        })

      }
      );



    }


    closeModal(){
      this.dialogRef.close();
    }







}
