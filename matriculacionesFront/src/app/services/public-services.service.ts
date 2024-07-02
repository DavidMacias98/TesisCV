import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicServicesService {

  constructor(private http: HttpClient) { }


  login(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/public/logers';
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

  addUser(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/public/put/addWebUser';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
   return this.http.put<any>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   
  }

  uploadImgPerfil(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/public/put/imgperfil';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
   return this.http.put<any>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   
  }


  uploadImgDocIdentidad(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/public/put/docIdentidad';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
   return this.http.put<any>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   
  }

  


  uploadDocMatricula(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/public/put/documentMatricula';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
   return this.http.put<any>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   
  }

  getAllCursos(): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/public/get/cursos';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }

  getCurstoTomatricula(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/public/get/cursosToMatricula';
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

  getmateriaByCursos(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/public/get/materiaByCursos';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,param,httpOptions)
   console.log(data)
   return data
  }



  putmateriaByCursos(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/public/put/materiaByCursos';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class   
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.put<Array<any>>( API_SERVER,param,httpOptions)
   console.log(data)
   return data
  }

  getmTipAct(): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/public/get/TipAct';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }

  validatedStudent(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/public/get/studentByDocument';
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


  cambiarContra(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/public/cpass/webusers';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<any>( API_SERVER,param,httpOptions).pipe(
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
