
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient) { }

  putListaAsistencia(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/doc/put/listaAsistencia';
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

  getListaStudentXassits(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/doc/get/listaStudentXassists';
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

  getListaAssists(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/doc/get/listaAsistencia';
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

  getListaAssistsDetalle(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/doc/get/detalleByAssist';
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

  putDetalleStatus(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_BASE +'/doc/put/detalleStatus';
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
  
//////////////////////actividadees//////////////////////
putActivity(param:any): Observable<Array<any>> {
  const API_SERVER =  environment.URL_BASE +'/doc/put/Activity';
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

putActivityFile(param:any): Observable<Array<any>> {
  const API_SERVER =  environment.URL_BASE +'/doc/put/ActivityFile';
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



getActivitysByCurso(param:any): Observable<Array<any>> {
  const API_SERVER =  environment.URL_BASE +'/doc/get/activitys';
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


getActivitysDetalleByAssists(param:any): Observable<Array<any>> {
  const API_SERVER =  environment.URL_BASE +'/doc/get/activitysDetalles';
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




putCalificarActivity(param:any): Observable<Array<any>> {
  const API_SERVER =  environment.URL_BASE +'/doc/put/calificarActivity';
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
