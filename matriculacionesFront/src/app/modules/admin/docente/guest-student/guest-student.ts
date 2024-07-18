import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from 'src/app/services/admin.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { ModalDocumentsComponent } from '../../administrator/components/modal-documents/modal-documents.component'; 
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-guest-student',
  templateUrl: './guest-student.html',
  styleUrls: ['./guest-student.css']
})
export class GuestStudentComponent {

  webUsers: any
  CurrentUser: any
  loading: any;
  selectRol:any
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'ape', 'whatsapp', 'usser', 'rol', 'documentos'];
  displayedComboBox:any= [{name:'Representante'},{name:'Estudiante'}];

  constructor(private adminService: AdminService, public publicServices: PublicServicesService, public dialog: MatDialog,
    private docenteService: DocenteService
  ) {
    this.CurrentUser = localStorage.getItem("sesion")
    this.CurrentUser = JSON.parse(this.CurrentUser)
    this.getStudentConciliados()
  }

findWebUser(){
  console.log(this.selectRol)
  if(this.selectRol=="Representante"){
    this.getRepresentanteConciliados();
  }
  else if(this.selectRol=="Estudiante"){
    this.getStudentConciliados();
  }
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.webUsers.filter = filterValue.trim().toLowerCase();
  }
  OpenModalDocuments(student: any) {
    const dialogRef = this.dialog.open(ModalDocumentsComponent, {
      data: { student: student },
      panelClass: 'custom-dialog-container'
    });

  }
  
  getRepresentanteConciliados() {
    const formData = new FormData();
    formData.append("idCurso", this.CurrentUser.idCurso)
  
    this.adminService.getRepresentanteConciliados(formData).subscribe((data: any) => {
      this.webUsers = new MatTableDataSource(data);
      console.log(this.webUsers);
    }
    );
  }

  getStudentConciliados() {
    const formData = new FormData();
    formData.append("idCurso", this.CurrentUser.idCurso)
    this.docenteService.getStudentConciliados(formData).subscribe((data: any) => {
      this.webUsers = new MatTableDataSource(data);
      console.log(this.webUsers);
    }
    );
  }



  citarRepresentante(nameStudent:any,mailRepre:any){
   

    Swal.fire({
      title: "Citar representante",
      text:"Ingresar motivo:",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Citar",
      showLoaderOnConfirm: true,
      preConfirm: async (motivo) => {
        this.prepararPlantillaYENviar(nameStudent,mailRepre,motivo);
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });

  }




  prepararPlantillaYENviar(nameStudent:any,mailRepre:any,motivo:any){
    let requestCitar={
      toMail:mailRepre,
      idPlantilla:"CITAR-REPRE",
      replacers:[{
        key:"[STUDENT]",
        value:nameStudent
      },
      {
        key:"[MOTIVO]",
        value:motivo
      }]
    }
    this.adminService.advancedsendEmail(requestCitar).subscribe((data: any) => {
      this.loading = false
      Swal.fire({
        icon: 'success',
        title: "Exito",
        text: "Representante citado.",
      }).then(() => {
        

        
      })

    }, (error: Error) => {
      this.loading = false
    }
    );



  }


}
