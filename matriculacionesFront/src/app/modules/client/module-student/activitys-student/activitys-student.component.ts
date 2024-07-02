import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Route, Router } from '@angular/router';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-activitys-student',
  templateUrl: './activitys-student.component.html',
  styleUrls: ['./activitys-student.component.css'],

})
export class ActivitysStudentComponent {

  
  displayedColumns: string[] = ['tema','materia', 'fecha', 'fechaentrega','status','subir'];
  Activitys:any
  CurrentUser :any
  constructor(
    public dialog: MatDialog
    , public publicServices: PublicServicesService
    ,private studentServices: StudentService
    ,private router:Router
    ){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    this.getActivitys()
  }  

  getActivitys(){
    const formData = new FormData();
    formData.append("idStudent", this.CurrentUser.id)
    this.studentServices.getActivitysByStudent(formData).subscribe((data:any)=>{
      this.Activitys=new MatTableDataSource(data);
      console.log(  this.Activitys);
    });
  }

  goDetalleActivity(detalleSelected:any){

    
    localStorage.setItem("activity",JSON.stringify(detalleSelected))
    this.router.navigate(['academy/activitys/detalle']);
  }

}
