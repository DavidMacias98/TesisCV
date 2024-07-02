/**
 * SecDevOops API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { RequestActivity } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface DocenteControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param idCurso 
     */
    getActivitys(idCurso: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idActivity 
     */
    getActivitysDetalleByAssists(idActivity: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idAssist 
     */
    getDetalleByAssist1(idAssist: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idCurso 
     */
    getListaAsistencia1(idCurso: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idAssist 
     */
    getListaStudentXassists(idAssist: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param requestActivity 
     */
    putActivity(requestActivity: RequestActivity, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idActivity 
     * @param file 
     */
    putActivityFile1(idActivity: string, file: Blob, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idActDet 
     * @param calificacion 
     */
    putCalificarActivity(idActDet: string, calificacion: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idDocente 
     */
    putListaAsistencia(idDocente: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idDetalle 
     * @param status 
     */
    putdetalleStatus(idDetalle: string, status: string, extraHttpRequestParams?: any): Observable<object>;

}
