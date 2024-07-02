import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { ModalValidateStudentComponent } from '../components/modal-validate-student/modal-validate-student.component';
import { ModalDocumentsComponent } from '../components/modal-documents/modal-documents.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crud-student-to-validate',
  templateUrl: './crud-student-to-validate.component.html',
  styleUrls: ['./crud-student-to-validate.component.css']
})
export class CrudStudentToValidateComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'ape', 'whatsapp', 'usser', 'rol', 'documentos', 'accion'];
  newstudents: any
  CurrentUser: any
  loading: any;
  constructor(private adminService: AdminService, public publicServices: PublicServicesService, public dialog: MatDialog,
  ) {
    this.CurrentUser = localStorage.getItem("sesion")
    this.CurrentUser = JSON.parse(this.CurrentUser)
    this.getStudentByRepreToMatricula()
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.newstudents.filter = filterValue.trim().toLowerCase();
  }


  getStudentByRepreToMatricula() {
    this.adminService.getStudentToValidate().subscribe((data: any) => {
      this.newstudents = new MatTableDataSource(data);
      console.log(this.newstudents);
    }
    );
  }


  OpenModalDocuments(student: any) {
    const dialogRef = this.dialog.open(ModalDocumentsComponent, {
      data: { student: student },
      panelClass: 'custom-dialog-container'
    });

  }

  openModalValidateStudent(idWebUser: any, rol: any, correo: any) {
    if (rol == 'student') {
      const dialogRef = this.dialog.open(ModalValidateStudentComponent, {
        data: { idStudent: idWebUser },
        panelClass: 'custom-dialog-container'
      });
      dialogRef.componentInstance.eventoHijo.subscribe(() => {
        // Llamar al método o proceso en el componente padre
        this.getStudentByRepreToMatricula();
      });
    }
    else {
      this.loading = true
      const request1 = new FormData();
      request1.append("idRepre", idWebUser)
      this.adminService.PutValidateRepre(request1).subscribe((response: any) => {
        const request = new FormData();
        request.append("toMail", correo)
        request.append("idPlantilla", "SUCCESS-REGISTER-REPRE")
        this.adminService.sendEmail(request).subscribe((data: any) => {
          this.loading = false
          Swal.fire({
            icon: 'success',
            title: "Exito",
            text: "Representante aprobado.",
          }).then(() => {
            this.getStudentByRepreToMatricula()
          })

        }, (error: Error) => {
          this.loading = false
        }
        );
      }
      );

    }






  }


}
