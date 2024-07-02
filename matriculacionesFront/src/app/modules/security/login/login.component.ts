import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  FormControl,
  Validators
} from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { PublicServicesService } from 'src/app/services/public-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading:any;
  constructor(public dialog: MatDialog
    ,private publicServices: PublicServicesService
    ,private router:Router
    ) { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);



  openDialog() {
    this.dialog.open(RegisterComponent, { 
      data: {bandera: "newuser",},
      panelClass: 'custom-dialog-container' });
  }

  login(user: any, pass: any) {
    this.loading=true
    let session:any;
    const logs = new FormData();
    logs.append("user", user)
    logs.append("pass", pass)
    this.publicServices.login(logs).subscribe((data: any) => {
      this.loading=false
      session= data;
      Swal.fire(
        'Exito!',
        'bienvenido!',
        'success'
      ).then((result)=>{
        if(result.isConfirmed){
          localStorage.setItem("sesion",JSON.stringify(session))
          if(session.rol=='repre'){
            console.log("repre")
            localStorage.setItem("repre","verdadero")
            this.router.navigate(['/representante'])
            
            
            
            //studiante
          }else if(session.rol=='student'){
            this.router.navigate(['/academy'])
          }
        }
      }
      )
    },(error:any)=>{
      this.loading=false
      Swal.fire(
        'Error!',
        error.message,
        'error'
      )
    }

    
    )
    
  }

}
