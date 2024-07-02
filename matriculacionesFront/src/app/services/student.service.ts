import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getActivitysByStudent(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/std/get/listaActivitys';
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


  putActivityFile(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/std/put/ActivityFile';
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


  getAssistsDetByStudent(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/std/get/AssistsDetByStudent';
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
