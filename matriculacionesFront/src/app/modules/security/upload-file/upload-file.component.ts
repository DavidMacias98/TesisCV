import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';
export interface DialogData {
id:string
file1:any
file2:any
}

export interface User {
  id: any;
 
}


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
fileDocument:any
fileVac:any
nombreDocIde: string = "Cargar Cedula"
nombreDocVac: string = "Carnet de vacunaciones"
CurrentUser: User | undefined

constructor(   private publicServices: PublicServicesService
  , @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){

}

onFile(event: any,doc:number) {
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
  switch(doc){
    case 0:
      this.fileDocument = event.target.files[0];
     // event.target.files[0].name= this.CurrentUser?.id+"documento";
      this.nombreDocIde = this.fileDocument!.name;
      
      console.log(event.currentTarget.files);
      break;
    case 1:
      this.fileVac = event.target.files[0];
     // event.target.files[0].name= this.CurrentUser?.id+"vacuna";
      this.nombreDocVac =  this.fileVac!.name;
      console.log(event.currentTarget.files);
      break;
  }

  event.target.value = '';
  return;
}




onFileVacuna(event: any) {
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
  this.fileVac = event.target.files[0];
  this.nombreDocVac = this.CurrentUser?.id+"vacuna";
  console.log(event.currentTarget.files);
  event.target.value = '';
  return;
}



upload() {

  if(this.fileDocument==null ||this.fileVac==null){
    Swal.fire({
      title: 'Error!',
      text: "Error debe cargar los 2 documentos",
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
  }
  const formData = new FormData();
  formData.append('fileDoc', this.fileDocument);
  formData.append('fileVac', this.fileVac);
  formData.append('iduser',this.data.id);
  this.publicServices.uploadDocMatricula(formData).subscribe((data: any) => {

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

}
