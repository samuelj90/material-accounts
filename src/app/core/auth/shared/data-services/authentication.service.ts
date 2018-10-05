import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static isAuthenticatd: boolean;
  constructor(private http: HttpClient) {
    AuthenticationService.isAuthenticatd = false;
  }
  public authenticated(): boolean {
    return AuthenticationService.isAuthenticatd;
  }
  login(username: string, password: string) {
    return this.http.post<any>(`/auth/login`, { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          AuthenticationService.isAuthenticatd = true;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }
  logout() {
    AuthenticationService.isAuthenticatd = true;
  }

}
