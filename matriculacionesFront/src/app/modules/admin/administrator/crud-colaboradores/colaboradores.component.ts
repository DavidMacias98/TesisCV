import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { RegisterComponent } from '../../../security/register/register.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent {
  @ViewChild('paginator') paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'ape', 'whatsapp', 'usser','rol','activo'];
  students:any
  colabs:any
  cursos:any
  CurrentUser :any

  constructor(private adminService : AdminService, public publicServices: PublicServicesService,public dialog: MatDialog){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    this. getColabs()
  }  

  switch(idDocente:any){
    const formData = new FormData();
    formData.append("idDocente",idDocente )  
    this.adminService.putSwitchActiveDocente(formData).subscribe((data:any)=>{
  
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

  getColabs(){
    const formData = new FormData();
    formData.append("rol", 'doc')
    this.adminService.getColabs(formData).subscribe((data:any)=>{
      this.colabs = new MatTableDataSource(data);
      this.colabs.paginator=this.paginator
      console.log(  this.colabs);
    }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.colabs.filter = filterValue.trim().toLowerCase();
  }

  showAddUser(){
    const dialogRef =  this.dialog.open(RegisterComponent, { 
      data: {bandera: "newdoc"},
      panelClass: 'custom-dialog-container' });
        dialogRef.componentInstance.eventoHijo.subscribe(() => {
        // Llamar al método o proceso en el componente padre
        this. getColabs();
      });
  }

}
