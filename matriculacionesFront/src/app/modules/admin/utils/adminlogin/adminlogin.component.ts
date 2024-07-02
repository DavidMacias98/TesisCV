import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor(
    private adminService: AdminService
    , private router: Router
  ) { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  login(user: any, pass: any) {
    let session: any;
    const logs = new FormData();
    logs.append("user", user)
    logs.append("pass", pass)
    this.adminService.login(logs).subscribe((data: any) => {
      session = data;
      Swal.fire(
        'Exito!',
        'bienvenido!',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("sesion", JSON.stringify(session))
          if (session.rol == 'admin') {
            this.router.navigate(['/admin'])
          }  if (session.rol == 'docente') {
            this.router.navigate(['/admin/workspace'])
          }
          if (session.rol == 'agente') {
            this.router.navigate(['/admin/pagos'])
          }
        }
      }
      )
    }, (error: any) => {
      Swal.fire(
        'Error!',
        error.message,
        'error'
      )
    }
    )
  }

}
