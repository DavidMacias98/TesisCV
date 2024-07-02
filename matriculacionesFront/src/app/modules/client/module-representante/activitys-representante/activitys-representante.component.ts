import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { RepresentanteService } from 'src/app/services/representante.service';
import { StudentService } from 'src/app/services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-activitys-representante',
  templateUrl: './activitys-representante.component.html',
  styleUrls: ['./activitys-representante.component.css']
})
export class ActivitysRepresentanteComponent {

  
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | undefined;

  students:any
  studentSelected:any
  displayedColumns: string[] = ['student','tema','materia', 'fecha', 'fechaentrega','statusStudent','statusDocente','calificacion'];
  Activitys:any
  CurrentUser :any
  constructor(
    public dialog: MatDialog
    , public publicServices: PublicServicesService
    ,private studentServices: StudentService
    ,private router:Router
    ,private repreService: RepresentanteService
    ,private _liveAnnouncer: LiveAnnouncer
    ){
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    this.getStudents()
  }  
  ngAfterViewInit() {
    this.Activitys.paginator = this.paginator;
    this.Activitys.sort = this.sort;
  }

  getActivitys(){
    const formData = new FormData();
    formData.append("idStudent", this.studentSelected.id)
    this.studentServices.getActivitysByStudent(formData).subscribe((data:any)=>{
      this.Activitys=new MatTableDataSource(data);
      this.Activitys.paginator=this.paginator
      console.log(  this.Activitys);
    });
  }

  getStudents() {
    const formData = new FormData();
    formData.append("idRepre", this.CurrentUser.id)
    this.repreService.getStudents(formData).subscribe((data: any) => {
      this.students =data;
      console.log(this.students);
    }
    );
  }



  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
