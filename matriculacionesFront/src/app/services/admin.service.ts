import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/admin/logers';
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
    const API_SERVER =  environment.URL_BASE +'/admin/put/addAdminUser';
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

  getColabs(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/admin/get/colabs';
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

  getColabsByCurso(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/admin/get/colabsByCurso';
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


  getAllOrdenToPagar(): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/admin/get/getAllOrdenToPagar';
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

  putPagarOrden(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/admin/put/putPagarOrden';
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
    const API_SERVER =  environment.URL_BASE +'/admin/get/cursos';
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

  putCursos(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/admin/put/cursos';
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



  colabXcurso(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/admin/put/ColabsXCurso';
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


  getStudentToValidate(): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/admin/get/webUserToValidate';
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


  PutValidateStudent(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/admin/put/validateStudent';
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


  PutValidateRepre(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/admin/put/validateRepresentante';
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

  putSwitchActiveDocente(param:any): Observable<any> {
    const API_SERVER =  environment.URL_BASE +'/admin/put/switchActiveDocente';
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

  getRepresentanteConciliados(): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/admin/get/getRepresentanteConciliados';
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


  getStudentConciliados(): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/admin/get/getStudentConciliados';
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



  sendEmail(param:any): Observable<any> {
    const API_SERVER =  environment.URL_sendemailms +'/sendbyuri';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
   return this.http.post<any>( API_SERVER,param,httpOptions).pipe(catchError(this.handleError))
  }


  advancedsendEmail(param:any): Observable<any> {
    const API_SERVER =  environment.URL_sendemailms +'/advancedsendbyuri';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };  
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
   return this.http.post<any>( API_SERVER,param,httpOptions).pipe(catchError(this.handleError))
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
