import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';


export interface DialogData {
  idStudent:any
  }

@Component({
  selector: 'app-modal-validate-student',
  templateUrl: './modal-validate-student.component.html',
  styleUrls: ['./modal-validate-student.component.css']
})
export class ModalValidateStudentComponent {
  @Output() eventoHijo = new EventEmitter();
  cursos:any
  selectedCurso:any
  CurrentUser :any
  
  firstFormGroup = this._formBuilder.group({
    curso: ['', Validators.required],
  });
  constructor(private adminService : AdminService, public publicServices: PublicServicesService
    ,@Inject(MAT_DIALOG_DATA) public data: DialogData
    ,private _formBuilder: FormBuilder
    ,public dialogRef: MatDialogRef<ModalValidateStudentComponent>){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    this.getCursos()
  }  


  getCursos(){
    this.publicServices.getAllCursos().subscribe((response:any)=>{
      this.cursos=response;
      console.log(this.cursos);
    }
    );
  }

  putValidateStudent(){
    const request = new FormData();
    request.append("idStudent", this.data.idStudent)
    request.append("idLastCurso",this.selectedCurso.id)
    this.adminService.PutValidateStudent(request).subscribe((response:any)=>{
      Swal.fire(
        'Exito!',
        'Estudiante validado!',
        'success'
      ).then(() => {
        this.eventoHijo.emit();
        this.dialogRef.close();
      })
    }
    );
  }


  cerrarModal(){
    this.dialogRef.close();
  }

}
