import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
   const user = this.storageService.takeStorage('user');
   const headers = new HttpHeaders({'user-session': user ? user.userSession : ''});
   const clone = request.clone({headers});
   return handler.handle(clone);
  }



}
