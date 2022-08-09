import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajo } from '../models/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  trabajoURL = 'http://localhost:8080/api/trabajo';
  constructor(private httpClient: HttpClient) { }

  public get(id:number): Observable<Trabajo>{
    return this.httpClient.get<Trabajo>(this.trabajoURL + `/${id}`);
  }

  public list(): Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(this.trabajoURL + '/list');
  }

  public save(trabajo:Object): Observable<any>{
    return this.httpClient.post<any>(this.trabajoURL + '/save', trabajo);
  }

  public edit(id:number, trabajo:Trabajo): Observable<Trabajo>{
    return this.httpClient.put<Trabajo>(this.trabajoURL + `/edit/${id}`, trabajo);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.trabajoURL + `/delete/${id}`);
  }
}
