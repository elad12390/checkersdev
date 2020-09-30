import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {CheckersService} from './checkers.service';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable()
export class ClientHttpInterceptor implements HttpInterceptor {
  constructor(private checkers: CheckersService, private snackbar: MatSnackBar) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers;
    if (this.checkers.connectionHeaders) {
      for (const [key, val] of Object.entries(this.checkers.connectionHeaders)) {
        headers = headers.append(key, val);
      }
    }
    const req = request.clone({ url: this.checkers.serverUrl + '/' + request.url, headers });
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        this.snackbar.open(err.message, '', {duration: 1000, horizontalPosition: 'center', verticalPosition: 'top'});
        return EMPTY;
      })
    );
  }
}
