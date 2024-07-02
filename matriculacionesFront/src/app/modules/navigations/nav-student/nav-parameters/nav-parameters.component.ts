import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-parameters',
  templateUrl: './nav-parameters.component.html',
  styleUrls: ['./nav-parameters.component.css']
})
export class NavParametersComponent {

  constructor(private router :Router){
   
  }

  goActivitysStudent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("academy/activitys")
  }

  goAssistsStudent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("academy/assists")
  }


}
