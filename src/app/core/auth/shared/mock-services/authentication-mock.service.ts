import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { usersMock } from './users-mock';

@Injectable()
export class AuthenticationMockService {

  private readonly API_URL = '/auth';
  private users: User[] = usersMock;
  constructor() { }

  intercept(request: HttpRequest<User>, next: HttpHandler): Observable<HttpEvent<User>> {

    return of(null).pipe(mergeMap(() => {
      if (request.url.match(`^${this.API_URL}/login`) && request.method === 'POST') {
        // find if any user matches login credentials
        const filteredUsers = this.users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = filteredUsers[0];
          const response = {
            id: user.id,
            username: user.username,
            name: user.name,
            token: 'fake-jwt-token'
          };

          return of(new HttpResponse({ status: 200, body: response }));
        } else {
          // else return 400 bad request
          return throwError({ error: { message: 'Username or password is incorrect' } });
        }
      }
      // get users
      if (request.url.match(`^${this.API_URL}/users`) && request.method === 'GET') {
        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          return of(new HttpResponse({ status: 200, body: this.users }));
        } else {
          // return 401 not authorised if token is null or invalid
          return throwError({ error: { message: 'Unauthorised' } });
        }
      }

      // get user by id
      if (request.url.match(`^${this.API_URL}[0-9]+`) && request.method === 'GET') {
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          const id = parseInt(urlParts[urlParts.length - 1], 10);
          const matchedUsers = this.users.filter(user => user.id === id);
          const response = matchedUsers.length ? matchedUsers[0] : null;

          return of(new HttpResponse({ status: 200, body: response }));
        } else {
          // return 401 not authorised if token is null or invalid
          return throwError({ error: { message: 'Unauthorised' } });
        }
      }

      // register user
      if (request.url.match(`^${this.API_URL}/register`) && request.method === 'POST') {
        // get new user object from post body
        const newUser = request.body;

        // validation
        const duplicateUser = this.users.filter(user => user.username === newUser.username).length;
        if (duplicateUser) {
          return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
        }

        // save new user
        newUser.id = this.users.length + 1;
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // respond 200 OK
        return of(new HttpResponse({ status: 200 }));
      }

      // delete user
      if (request.url.match(`^${this.API_URL}[0-9]+`) && request.method === 'DELETE') {
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          const id = parseInt(urlParts[urlParts.length - 1], 10);
          for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (user.id === id) {
              // delete user
              this.users.splice(i, 1);
              localStorage.setItem('users', JSON.stringify(this.users));
              break;
            }
          }

          // respond 200 OK
          return of(new HttpResponse({ status: 200 }));
        } else {
          // return 401 not authorised if token is null or invalid
          return throwError({ error: { message: 'Unauthorised' } });
        }
      }

      return next.handle(request);

    }))
      .pipe(materialize())
      .pipe(delay(2500))
      .pipe(dematerialize());
  }
}
