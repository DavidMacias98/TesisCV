import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-pagos',
  templateUrl: './crud-pagos.component.html',
  styleUrls: ['./crud-pagos.component.css']
})
export class CrudPagosComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['cedrepre','cedstudent','curso','total','pagar'];

  pagos:any
  CurrentUser :any
  constructor(private adminService : AdminService, public publicServices: PublicServicesService,public dialog: MatDialog){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    this.getAllOrdenToPagar()
  }  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pagos.filter = filterValue.trim().toLowerCase();
  }


  getAllOrdenToPagar(){
    const formData = new FormData();
    formData.append("rol", 'doc')
    this.adminService.getAllOrdenToPagar().subscribe((data:any)=>{
      this.pagos = new MatTableDataSource(data);
      this.pagos.paginator=this.paginator
      console.log(  this.pagos);
    }
    );
  }

  prePagar(idOrden:any){

    Swal.fire({
      title: "ESTAS SEGURO?",
      text: "ESTA ACCION NO SE PUEDE REVERTIR!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Si,Pagar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.pagar(idOrden)
      }
    });


  }

  pagar(idOrden:any){
    const request= new FormData()
    request.append("idOrden",idOrden)
    this.adminService.putPagarOrden(request).subscribe((data:any)=>{
      console.log(  this.pagos);
      Swal.fire({
        icon: 'success',
        title: "EXITO",
        text: "PAGO REALIZADO",
      }).then(() => {
        this.getAllOrdenToPagar();
      })
     
    }
    );

  }


}
