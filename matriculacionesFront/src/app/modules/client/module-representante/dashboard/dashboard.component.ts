import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as d3 from 'd3';
import { RepresentanteService } from 'src/app/services/representante.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  sesion: any
  dataAssist:any
  constructor(private repreService: RepresentanteService) {

    this.sesion = localStorage.getItem("sesion")
    if (this.sesion!!) {
      this.sesion = JSON.parse(this.sesion)
      this.getPor100AssistByStudent()
    }
  }


  /*colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };*/
  single: any = [
    {
      "name": "Germany",
      "value": 90
    }
  ];

  view: any = [500, 400];

  // options
  //showLegend: boolean = true;
  showLabels: boolean = true;


  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'ESTUDIANTES';
  showYAxisLabel = true;
  yAxisLabel = 'PORCENTAJE';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  onSelect(event: any) {
    console.log(event);
  }
  


  getPor100AssistByStudent() {
    const formData = new FormData();
    formData.append("idRepre", this.sesion.id)
    this.repreService.getPor100AssistByStudent(formData).subscribe((data: any) => {
      
      this.dataAssist=data
      console.log(this.dataAssist);
     // this.single = this.person(data);
      
   //  this.single=data
    }
    );
  }

  person(results: any) {
    const total = results.reduce((acc: number, item: any) => acc + item.value, 0);
  
    if (total !== 100) {
      results.forEach((item: any) => (item.value = (item.value / 100) * 100));
    }
    return results
  }




}
