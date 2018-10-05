import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../data-services/authentication.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorInterceptorService {

  constructor(private authenticationService: AuthenticationService, private snackbar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      // Do some logic when error occurs
      const error = err.error.message || err.statusText;
      this.snackbar.open(error);
      return throwError(error);
    }));
  }
}
