import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL= 'https://argentinaprograma-api.herokuapp.com/api/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(login: LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', login);
  }
}
