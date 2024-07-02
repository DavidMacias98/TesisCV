import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { CustomModalService } from 'src/app/services/custom-modal.service';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';

export interface DialogData {
  bandera: string;
  idRepre: string;
  rol: string
  ruta: string
}


export interface User {
  id: any;
  name: any;
  ape: any;
  pass: any;
  usser: any;
  whatsapp: any;
  activo: boolean;
  rol: string;
  imgPerfi: string;
  idRepre: any
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Output() eventoHijo = new EventEmitter();
  activeRolAdmin:any=false
  CurrentUser: any
  user!: User
  filePhoto: any
  nombrePhoto: string = "Cargar foto de perfil"

  fileDocument:any
  nombreDocIde: string = "Cargar Cedula"

  fileVac:any
  nombreDocVac: string = "Carnet de vacunaciones"


  selectedRol:any
  docente:any="docente"
  agente:any="agente"

  constructor(private servicios: CustomModalService
    , private publicServices: PublicServicesService
    , private router: Router
    , private adminService: AdminService
    , public dialogRef: MatDialogRef<RegisterComponent>
    , @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.CurrentUser = localStorage.getItem("sesion")
    this.CurrentUser = JSON.parse(this.CurrentUser)
    if (this.data.bandera == "newdoc") {
      this.activeRolAdmin=true
    }
  }

  cerrarModal() {
    this.servicios.$modal.emit(false);
  }
  onRolSelected(event: any): void {
    this.selectedRol = event.value;
    console.log('Rol seleccionado:', this.selectedRol);
    // Puedes realizar otras acciones con el valor seleccionado
  }

  addUser(name: any, ape: any, correo: any, pass: any, whatsapp: any, documento: any) {
    this.user = {
      id: documento,
      name: name,
      ape: ape,
      pass: pass,
      usser: correo,
      whatsapp: whatsapp,
      activo: true,
      rol: '',
      imgPerfi: '',
      idRepre: undefined
    }

    if (this.data.bandera == "newuser") {
      this.user.rol = 'repre'
      this.addWebUser()
    }

    if (this.data.bandera == "newstudent") {
      this.user.rol = 'student'
      this.user.idRepre = { "id": this.data.idRepre }
      this.addWebUser()
    }

    if (this.data.bandera == "newdoc") {
      this.user.rol = this.selectedRol
      console.log(this.selectedRol);
      this.activeRolAdmin=true
      this.addAdminUser()
    }

  }

  addWebUser() {
    if (this.filePhoto == null ) {
      Swal.fire({
        title: 'Error!',
        text: "Imagen de perfil requerido",
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
      this.publicServices.addUser(this.user).subscribe((data: any) => {
        this.cargarDocuments();
        Swal.fire(
          'Exito!',
          'Su cuenta ha sido enviada para aprobacion, en el transcurso de 24H se enviara un Email de confirmacion!',
          'success'
        ).then(() => {
          //this.eventoHijo.emit();
          this.dialogRef.close();
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


  cargarDocuments(){
    this.uploadDocument();
    
  }




  addAdminUser() {
    this.adminService.addUser(this.user).subscribe((data: any) => {
      Swal.fire(
        'Exito!',
        'Su cuenta es creada!',
        'success'
      ).then(() => {
        this.eventoHijo.emit();
        this.dialogRef.close();
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
        this.filePhoto = event.target.files[0];
        // event.target.files[0].name= this.CurrentUser?.id+"vacuna";
        this.nombrePhoto = this.filePhoto!.name;
       
        break;
    }

    event.target.value = '';
    return;
  }



  



  uploadDocument() {

    const formData = new FormData();
    formData.append('file', this.fileDocument);
    formData.append('iduser', this.user?.id);
    this.publicServices.uploadImgDocIdentidad(formData).subscribe((data: any) => {
      console.log("document cargadoi")
    }, (error: Error) => {

      console.log("document no cargado")
    }, () => { this.uploadPhotoProfile();}
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



  cerrar() {
    this.dialogRef.close()
  }





}
