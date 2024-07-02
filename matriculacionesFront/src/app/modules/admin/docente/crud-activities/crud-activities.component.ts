import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { DocenteService } from 'src/app/services/docente.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { ModalAddActivityComponent } from '../components/modal-add-activity/modal-add-activity.component';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-crud-activities',
  templateUrl: './crud-activities.component.html',
  styleUrls: ['./crud-activities.component.css']
})
export class CrudActivitiesComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['tema','materia', 'fecha', 'fechaentrega','detalles'];

  Activitys:any
  CurrentUser :any

  constructor(private adminService : AdminService
    , public publicServices: PublicServicesService
    ,public dialog: MatDialog
    ,private router:Router
    , public docenteService: DocenteService){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
      this.getActivitys();
  }  

getActivitys(){
  const formData = new FormData()
  formData.append("idCurso",this.CurrentUser.idCurso)
  this.docenteService.getActivitysByCurso(formData).subscribe((data:any)=>{
    this.Activitys=new MatTableDataSource(data);
    this.Activitys.paginator=this.paginator

    console.log("actividades",this.Activitys)
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

verDetalle(currentActivity:any){
  localStorage.setItem("currentActivity", JSON.stringify(currentActivity))
 
  this.router.navigate(['/admin/workspace/activitys/detalle'])
}

  

  openModalAddActivity(){
    const dialogRef =  this.dialog.open(ModalAddActivityComponent, { 
      //data: {studentXassists: data},
      panelClass: 'custom-dialog-container', disableClose: true } );
      dialogRef.componentInstance.eventoHijo.subscribe(() => {
        // Llamar al método o proceso en el componente padre
        this.getActivitys();
      });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.Activitys.filter = filterValue.trim().toLowerCase();
  }


}
