import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL = 'http://localhost:8080/api/persona';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.httpClient.get<Persona>(this.personaURL);
  }

  public edit(id:number, persona:Persona): Observable<Persona>{
    return this.httpClient.put<Persona>(this.personaURL + '/edit', persona);
  }

}
