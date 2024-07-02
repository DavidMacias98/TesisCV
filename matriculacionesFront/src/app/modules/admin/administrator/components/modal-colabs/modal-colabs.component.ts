import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';

export interface DialogData {
idCurso:any
}

@Component({
  selector: 'app-modal-colabs',
  templateUrl: './modal-colabs.component.html',
  styleUrls: ['./modal-colabs.component.css']
})
export class ModalColabsComponent {
  @Output() eventoHijo = new EventEmitter();
  @ViewChild('paginator') paginator!: MatPaginator;
  colabs:any
  displayedColumns: string[] = ['name', 'ape', 'whatsapp', 'usser','select'];
  CurrentUser :any

  constructor(private adminService : AdminService
    , public publicServices: PublicServicesService
    ,public dialog: MatDialog
    ,@Inject(MAT_DIALOG_DATA) public data: DialogData){


    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    this. getColabsByCurso()
  } 

  getColabsByCurso(){
    const formData = new FormData();
    formData.append("rol", 'doc')
    this.adminService.getColabsByCurso(formData).subscribe((data:any)=>{
      this.colabs = new MatTableDataSource(data);
      this.colabs.paginator=this.paginator
      console.log(  this.colabs);
    }
    );
  }

  colabXcurso(idColab:any){

    console.log(this.data.idCurso,idColab)

    const formData = new FormData();
    formData.append("idColab", idColab)
    formData.append("idCurso", this.data.idCurso)
    this.adminService.colabXcurso(formData).subscribe((data:any)=>{ 

      Swal.fire(
        'Exito!',
        'Docente asignado al curso!',
        'success'
      ).then(() => {
        this.eventoHijo.emit();
        this.dialog.closeAll();
      })

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


}
