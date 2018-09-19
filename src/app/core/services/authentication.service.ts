import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticatd: boolean;
  constructor(private http: HttpClient) {
    this.isAuthenticatd = false;
  }
  public authenticated(): Observable<boolean> {
    return of(this.isAuthenticatd);
  }
  login(username: string, password: string) {
    return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          this.isAuthenticatd = true;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }
  logout() {
    this.isAuthenticatd = true;
  }

}
