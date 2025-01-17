import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth/auth-reducers';
import { selectAccessToken } from '../store/auth/auth-selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers
        .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
        .append('Access-Control-Allow-Origin', 'http://localhost:4200'),
    });
    return next.handle(authReq);
  }
}
