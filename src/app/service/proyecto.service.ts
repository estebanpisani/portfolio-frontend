import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = 'https://argentinaprograma-api.herokuapp.com/api/proyecto';

  constructor(private httpClient: HttpClient) { }

  public get(id:number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectoURL+`/${id}`);
  }
  public list(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + '/list');
  }

  public save(proyecto:Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proyectoURL + '/save', proyecto);
  }

  public edit(id:number, proyecto:Proyecto): Observable<Proyecto>{
    return this.httpClient.put<Proyecto>(this.proyectoURL + `/edit/${id}`, proyecto);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.proyectoURL + `/delete/${id}`);
  }
}
