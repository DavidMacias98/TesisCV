import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-assists-student',
  templateUrl: './assists-student.component.html',
  styleUrls: ['./assists-student.component.css']
})
export class AssistsStudentComponent {
  Assists:any
  displayedColumns: string[] = ['fecha','curso','docente','student','asistencia', ];


  CurrentUser :any
  constructor(
    public dialog: MatDialog
    , public publicServices: PublicServicesService
    ,private studentServices: StudentService
    ,private router:Router
    ){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    this.getAssists()
  } 


  getAssists(){
    const formData = new FormData();
    formData.append("idStudent", this.CurrentUser.id)
    this.studentServices.getAssistsDetByStudent(formData).subscribe((data:any)=>{
      this.Assists=new MatTableDataSource(data);
      console.log(  this.Assists);
    });
  }



}
