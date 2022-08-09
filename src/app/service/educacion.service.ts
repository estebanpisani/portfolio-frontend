import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = 'http://localhost:8080/api/educacion';

  constructor(private httpClient: HttpClient) { }

  public get(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.educacionURL + `/${id}`);
  }
  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.educacionURL + '/list');
  }

  public save(educacion:Educacion): Observable<any>{
    return this.httpClient.post<any>(this.educacionURL + '/save', educacion);
  }

  public edit(id:number, educacion:Educacion): Observable<Educacion>{
    return this.httpClient.put<Educacion>(this.educacionURL + `/edit/${id}`, educacion);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.educacionURL + '/delete/'+id);
  }

}
