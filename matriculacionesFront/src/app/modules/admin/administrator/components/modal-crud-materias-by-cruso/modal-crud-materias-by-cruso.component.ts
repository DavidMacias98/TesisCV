import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';
export interface DialogData {
  idCurso:any
  }
@Component({
  selector: 'app-modal-crud-materias-by-cruso',
  templateUrl: './modal-crud-materias-by-cruso.component.html',
  styleUrls: ['./modal-crud-materias-by-cruso.component.css']
})
export class ModalCrudMateriasByCrusoComponent {
  @Output() eventoHijo = new EventEmitter();
  displayedColumns: string[] = ['name','activo'];
  loading=false
  materias:any

  constructor(public publicServices: PublicServicesService
    ,@Inject(MAT_DIALOG_DATA) public data: DialogData
  ){
    this.getMateriasBycurso()
  }
  getMateriasBycurso(){
    const formData = new FormData();
    formData.append("idCurso", this.data.idCurso)
      console.log(this.data.idCurso)
    this.publicServices.getmateriaByCursos(formData).subscribe(
      (data:any)=>{
        this.materias=new MatTableDataSource(data);
      }
    );
  }


  putMateriaByCursos(nombre:any){
    let materia={
      codigo:nombre,
      name:nombre,
      curso:{id:this.data.idCurso}
    }
    this.publicServices.putmateriaByCursos(materia).subscribe(
      (data:any)=>{
        this.getMateriasBycurso();
        Swal.fire({
          icon: 'success',
          title: "Exito",
          text: "Materia agregada",
        }).then(() => {
          this.getMateriasBycurso();
        })

      }
    );

    } 
  

 

}
