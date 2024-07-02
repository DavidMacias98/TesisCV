import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-activity',
  templateUrl: './detalle-activity.component.html',
  styleUrls: ['./detalle-activity.component.css']

})
export class DetalleActivityComponent implements OnInit {
  detalle: any
  diasRestante:any
  file:any
  nombredoc:any="SUBIR ACTIVIDAD"
  statusTime:any
  constructor(private route: ActivatedRoute
    ,private studentService:StudentService
    ,private router:Router
    ) {

  }

  ngOnInit() {
    this.detalle = localStorage.getItem("activity")
    this.detalle = JSON.parse(this.detalle)
    console.log(this.detalle)
    this.diasRestante=this.calcularDiferenciaEnDias()
  }

  calcularDiferenciaEnDias(): number {
    let fechaInicial = new Date(this.detalle.activity.fechaMaxEntrega);
    let fechaFinal = new Date();  // Fecha actual

   
    fechaInicial.setHours(0, 0, 0, 0);
    const tiempoDiferencia = fechaInicial.getTime() -fechaFinal.getTime();
    const diferenciaEnDias = tiempoDiferencia / (1000 * 3600 * 24);
    let diferenciaRedondeada = Math.floor(diferenciaEnDias);
    // Si deseas redondear el resultado a un número entero, puedes usar Math.round
    // const diferenciaRedondeada = Math.round(diferenciaEnDias);
    if(fechaFinal >fechaInicial){
      diferenciaRedondeada=diferenciaRedondeada*-1
      this.statusTime="DIAS DE RETRASO"
    }
    return diferenciaRedondeada;
  }


  onFilechange(event: any) {
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
    this.file = event.target.files[0];
   // this.nombredoc = this.user?.id+"documento";
   this.nombredoc=this.file!.name
    console.log(event.currentTarget.files);
    event.target.value = '';
    return;
  }


  uploadDocument() {

    if(!this.file){
      Swal.fire({
        title: 'ERROR!',
        text: "DEBE CARGAR LA ACTIVIDAD",
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('idDetalle', this.detalle.id);

    this.studentService.putActivityFile(formData).subscribe((data: any) => {
      Swal.fire({
        icon: 'success',
        title: "Exito",
        text: "Actividad enviada",
      }).then(() => {
        this.router.navigate(['/academy/activitys'])
       
      })
      console.log("document cargadoi")
    }, (error: Error) => {
      Swal.fire({
        icon: 'error',
        title: "Ha ocurrido un error",
        text: error.message,
      }).then(() => {
        
      })
      console.log("document no cargado")
    }, () => { }
    );
  }


}
