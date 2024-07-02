import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

})
export class NavComponent {

  menuStudent :boolean =false
  constructor(private router :Router){
   this.menuStudent =false
  }
  toggleDesplegable(event: MouseEvent) {
    const opcion = event.currentTarget as HTMLElement;
    const desplegable = opcion.querySelector('.desplegable');
    if (desplegable) {
      desplegable.classList.toggle('hidden');
    }
  }



  showMenuStudent(){
    this.menuStudent=!this.menuStudent
  }


  goMatriculas(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("representante/matriculas")
  }
  
  goAlumnos(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("representante/alumnos")
  }
  goRegisterAlumnos(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("representante/registrar/alumnos")
  }

  

  goActivitys(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("representante/activitys")
  }
}
