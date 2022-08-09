import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class EduInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    if(token!=null){
      intReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+token)
      });    
    }
    return next.handle(intReq);
  }
}

export const eduInterceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: EduInterceptorService, multi:true}];
