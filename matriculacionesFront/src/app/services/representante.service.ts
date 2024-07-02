import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  constructor(private http: HttpClient) { }


  getStudents(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/representante/get/students';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }
  getStudentByRepreToMatricula(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/representante/get/studentsToMatricula';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }

  

  getOrderns(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/representante/get/orders';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }


  putOrderns(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/representante/put/orders';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.put<Array<any>>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
   return data
  }




  getPor100AssistByStudent(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/representante/get/Por100AssistByStudent';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }


  getListaActivitysFromRepresentante(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/representante/get/listaActivitysFromRepresentante';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
   return data
  }



  

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error?.error? error.error.error : 'Ha ocurrido un error por favor intente más tarde.'));
  }
}
