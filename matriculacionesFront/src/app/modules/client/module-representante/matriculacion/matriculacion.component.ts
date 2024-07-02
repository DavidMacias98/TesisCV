import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { RepresentanteService } from 'src/app/services/representante.service';
import Swal from 'sweetalert2';
import { UploadFileComponent } from '../../../security/upload-file/upload-file.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-matriculacion',
  templateUrl: './matriculacion.component.html',
  styleUrls: ['./matriculacion.component.css']
})


export class MatriculacionComponent implements OnInit {

  isLinear = true;

  firstFormGroup = this._formBuilder.group({
    student: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    curso: ['', Validators.required],
  });
  treeFormGroup = this._formBuilder.group({
    licitud: ['', Validators.required],
  });


  orientation: StepperOrientation  = 'horizontal';

  mobileQuery:MediaQueryList 
  _mobileQueryListener: () => void;

  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('paginator') paginator!: MatPaginator;

  displayedColumns: string[] = ['codigo', 'estudiante', 'curso', 'fechaCreada','fechaPago','estado','documents'];
  dataSource :any
  students:any
  orders:any
  cursos:any
  cursoSeleted:any
  studentSelected:any
  CurrentUser :any
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private  media: MediaMatcher,
    private repreService : RepresentanteService,
    public dialog: MatDialog
    ,private _formBuilder: FormBuilder
    , public publicServices: PublicServicesService
    ,public adminService:AdminService){
   

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      this.orientation = this.mobileQuery.matches ? 'vertical' : 'horizontal';
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);

    
    this.CurrentUser= localStorage.getItem("sesion")
    this.CurrentUser=JSON.parse(this.CurrentUser)
    this.getCatalogos();
    
  }

  ngOnInit(): void {
    this._mobileQueryListener(); // Verificación inicial del tamaño de pantalla
    this.mobileQuery.addListener(this._mobileQueryListener);
  }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }  


  getStepperOrientation(): StepperOrientation {
   
    return this.orientation;
  }


  getCatalogos(){
    this. getStudentByRepreToMatricula();
    this. getOrders();
  }

  getStudentByRepreToMatricula(){
    const formData = new FormData();
    formData.append("idRepre", this.CurrentUser.id)
    this.repreService.getStudentByRepreToMatricula(formData).subscribe((data:any)=>{
      this.students=data;
      console.log(  this.students);
    }
    );
  }

  getOrders(){
    const formData = new FormData();
    formData.append("idRepre", this.CurrentUser.id)
    this.repreService.getOrderns(formData).subscribe((data:any)=>{
      this.orders=new MatTableDataSource(data);;
      this.orders.paginator=this.paginator
      console.log( "ordenes",this.orders);
    }
    );
  }


  onStepperSelectionChange(event: any): void {
    // Verifica si el nuevo índice seleccionado es el paso 2
    if (event.selectedIndex === 1) {
      console.log("entramos")
      // Ejecuta la acción específica para el paso 2
      this.getCursos()    }
  }



  getCursos(){

    const request= new FormData()
    request.append("orde",this.studentSelected.lastCurso.orde+1)

    this.publicServices.getCurstoTomatricula(request).subscribe((data:any)=>{
      this.cursos=data;
      console.log(  this.cursos);
    }
    );
  }


  Matricular(){
    let orden = {
      "representante":this.CurrentUser,
      "estudiante":{"id":this.studentSelected.id},
      "curso":{"id":this.cursoSeleted.id},
    }

    console.log("ORDEN",orden)
    this.repreService.putOrderns(orden).subscribe((data:any)=>{ 

      

      Swal.fire(
        'Exito!',
        'Matricula registrada!',
        'success'
      ).then(() => {
        this.getCatalogos()
        this.stepper.reset()
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        //   this.router.onSameUrlNavigation = 'reload';
        //   this.router.navigate(["/"+this.data.ruta])
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



  
  addDocs(iduser:any,fileDoc:any,filevac:any){
    const dialogRef =  this.dialog.open(UploadFileComponent, { 
      data: {id: iduser,file1:fileDoc,file2:filevac},
      panelClass: 'custom-dialog-container' });
  
  }
  


}
