import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import {CheckersService} from './checkers.service';
@Injectable()
export class ClientHttpInterceptor implements HttpInterceptor {
  constructor(private checkers: CheckersService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers;
    if (this.checkers.connectionHeaders) {
      for (const [key, val] of Object.entries(this.checkers.connectionHeaders)) {
        headers = headers.append(key, val);
      }
    }
    const req = request.clone({ url: environment.serverUrl + '/' + request.url, headers });
    return next.handle(req);
  }
}
