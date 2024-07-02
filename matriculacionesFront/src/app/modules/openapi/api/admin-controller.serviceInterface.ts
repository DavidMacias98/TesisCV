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

import { AdminUser } from '../model/models';
import { CatalogoCursos } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface AdminControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     */
    getAllColabs(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    getAllCursos1(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    getAllOrdenToPagar(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    getColabsByCurso(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    getRepresentanteConciliados(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    getStudentByRepreToMatricula1(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param user 
     * @param pass 
     */
    login1(user: string, pass: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idColab 
     * @param idCurso 
     */
    putColabsXCurso(idColab: string, idCurso: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param catalogoCursos 
     */
    putCurso(catalogoCursos: CatalogoCursos, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idOrden 
     */
    putPagarOrden(idOrden: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idDocente 
     */
    putSwitchActiveDocente(idDocente: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param adminUser 
     */
    putUser1(adminUser: AdminUser, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idRepre 
     */
    putValidateRepresentante(idRepre: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param idStudent 
     * @param idLastCurso 
     */
    putValidateStudent(idStudent: string, idLastCurso: string, extraHttpRequestParams?: any): Observable<object>;

}
