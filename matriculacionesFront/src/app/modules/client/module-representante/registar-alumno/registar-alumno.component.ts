import { MediaMatcher } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { RegisterComponent } from 'src/app/modules/security/register/register.component';
import { PublicServicesService } from 'src/app/services/public-services.service';
import { RepresentanteService } from 'src/app/services/representante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registar-alumno',
  templateUrl: './registar-alumno.component.html',
  styleUrls: ['./registar-alumno.component.css']
})
export class RegistarAlumnoComponent {
  dataSource: any
  commitStudent: any
  _opennu: any
  sesion: any
  students: any
  isLinear = true;
  orientation: StepperOrientation = 'horizontal';
  fileDocument: any
  fileVac: any
  filePhoto: any
  user: any
  nombreDocIde: string = "Cargar Cedula"
  nombreDocVac: string = "Carnet de vacunaciones"
  nombrePhoto: string = "Cargar foto de perfil"
  infoVigente = false
  terminosycondiciones = false;
  studentValidator = false

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    firstApeCtrl: ['', Validators.required],
    CorreoCtrl: ['', Validators.required],
    PassCtrl: ['', Validators.required],
  });

  @ViewChild('stepper') stepper!: MatStepper;

  ngOnInit(): void {
    // Obtén la referencia del stepper actual
    // Verifica la existencia de la clave en el localStorage

  }
  ngOnDestroy(): void {
    // Limpiar el localStorage al destruir el componente
    localStorage.removeItem('commitStudent');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Verifica la existencia de la clave en el localStorage
      if (localStorage.getItem('commitStudent')) {
        // Avanza al siguiente paso
        this.stepper.next();
      }
    });

    // Puedes intentar forzar la detección de cambios también
    this.cdr.detectChanges();
  }

  mobileQuery: MediaQueryList
  _mobileQueryListener: () => void;
  constructor(private cdr: ChangeDetectorRef, private repreService: RepresentanteService
    , public dialog: MatDialog
    , private _formBuilder: FormBuilder
    , private changeDetectorRef: ChangeDetectorRef,
    private publicServices: PublicServicesService,
    private media: MediaMatcher,
  ) {

    this.sesion = localStorage.getItem("sesion")
    if (this.sesion!!) {
      this.sesion = JSON.parse(this.sesion)
      this.getStudents()
    }


    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      this.orientation = this.mobileQuery.matches ? 'vertical' : 'horizontal';
      console.log('Media Query Matched:', this.orientation);
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);


  }

  getStepperOrientation(): StepperOrientation {

    console.log("get ", this.orientation)
    return this.orientation;
  }















  getStudents() {
    const formData = new FormData();
    formData.append("idRepre", this.sesion.id)
    this.repreService.getStudents(formData).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
    }
    );
  }



  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      data: { bandera: "newstudent", idRepre: this.sesion.id, rol: "student" },
      panelClass: 'glassbox', disableClose: true
    });
    dialogRef.componentInstance.eventoHijo.subscribe(() => {
      // Llamar al método o proceso en el componente padre
      this.getStudents();
    });
  }
  modalRegister() {
    this._opennu = true
  }



  validarStudent(documento: any) {

  if(documento==""){
          Swal.fire({
            icon: 'error',
            title: "Ha ocurrido un error",
            text: "Debe ingresar un numero de documento.",
          })
          return
        }
    const formData = new FormData();
    formData.append("document", documento)
    this.publicServices.validatedStudent(formData).subscribe(
      (data: any) => {
        if(data!=null){
          Swal.fire({
            icon: 'error',
            title: "Ha ocurrido un error",
            text: "Estudiente ya se encuentra registrado.",
          })
        }else{
          this.studentValidator = true
        }
        
      }
    )
  }




  putStudent() {
    this.publicServices.addUser(this.user).subscribe((data: any) => {
      Swal.fire(
        'Exito!',
        'Solicitud de ingreso de estudiante exitosa!',
        'success'
      ).then(() => {
        this.uploadPhotoProfile();
        this.uploadDocuments(this.user.id);

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

  SetUser(name: any, ape: any, correo: any, pass: any, documento: any) {
    this.user = {
      id: documento,
      document: documento,
      name: name,
      ape: ape,
      pass: pass,
      usser: correo,
      whatsapp: this.sesion.whatsapp,
      activo: true,
      rol: 'student',
      idRepre: { "id": this.sesion.id }
    }
    console.log(this.user)
  }









 










  onFile(event: any, doc: number) {
    console.log(event.target.files[0]);
    /*  if (event.target.files[0].type != "application/pdf"
      ) {
        // this.cargando=false;
        Swal.fire({
          title: 'Error!',
          text: "Error Debe ingresar solo archivos excel",
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        event.currentTarget.files = null;
        this.nombredoc = "Cargar documento";
        return;
      }*/
    if (event.target.files[0].size > 3000000) {
      // this.cargando=false;
      Swal.fire({
        title: 'Error!',
        text: "Error El archivo no debe superar los 3MB",
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    console.log(doc)
    switch (doc) {
      case 0:
        this.fileDocument = event.target.files[0];
        // event.target.files[0].name= this.CurrentUser?.id+"documento";
        this.nombreDocIde = this.fileDocument!.name;

       
        break;
      case 1:
        this.fileVac = event.target.files[0];
        // event.target.files[0].name= this.CurrentUser?.id+"vacuna";
        this.nombreDocVac = this.fileVac!.name;
    
        break;
      case 2:
        this.filePhoto = event.target.files[0];
        // event.target.files[0].name= this.CurrentUser?.id+"vacuna";
        this.nombrePhoto = this.filePhoto!.name;
       
        break;
    }

    event.target.value = '';
    return;
  }


  uploadDocuments(idStudent: any) {

    if (this.fileDocument == null || this.fileVac == null) {
      Swal.fire({
        title: 'Error!',
        text: "Error debe cargar los 2 documentos",
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    console.log("idstduene", idStudent)
    const formData = new FormData();

    formData.append('fileDoc', this.fileDocument);
    formData.append('fileVac', this.fileVac);
    formData.append('iduser', idStudent);
    this.publicServices.uploadDocMatricula(formData).subscribe((data: any) => {
      this.getStudents();
      Swal.fire(
        'Exito!',
        'Documentos cargados!',
        'success'
      )
    }, (error: Error) => {

      console.log(error.message)
    }, () => { }
    );
  }

  uploadPhotoProfile() {
    const formData = new FormData();
    formData.append('file', this.filePhoto);
    formData.append('iduser', this.user?.id);

    this.publicServices.uploadImgPerfil(formData).subscribe((data: any) => {

      console.log("document cargadoi")
    }, (error: Error) => {

      console.log("document no cargado")
    }, () => { }
    );
  }



}
