import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Project } from '../project';
import { projectsMock } from './project-mock';

@Injectable()
export class ProjectMockService {
  private readonly API_URL = '/projects/';
  private projects: Project[] = projectsMock;
  constructor() { }

  intercept(request: HttpRequest<Project>, next: HttpHandler): Observable<HttpEvent<Project>> {

    return of(null).pipe(mergeMap(() => {
      console.log(request);
      if (request.url.endsWith(this.API_URL) && request.method === 'POST') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          const filteredProject = this.projects.filter(project => {
            return project.id === request.body.id || project.title === request.body.title;
          });

          if (filteredProject.length > 0) {
            const body = filteredProject[0];
            return of(new HttpResponse({ status: 422, body: { message: 'Project Already exist' } }));
          } else {
            return of(new HttpResponse({ status: 200, body: { message: 'Project saved sucessfully' } }));
          }
        } else {
          return throwError({ error: { message: 'Unauthorised' } });
        }
      }

      if (request.url.endsWith(this.API_URL) && request.method === 'GET') {
        console.log('--- Serving Project List ---');
        // if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        return of(new HttpResponse({ status: 200, body: this.projects }));
        // } else {
        //   return throwError({ error: { message: 'Unauthorised' } });
        // }
      }

      if (request.url.match(`^${this.API_URL}[0-9]+`) && request.method === 'GET') {
        console.log('----Serving Project---');
        // if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        const urlParts = request.url.split('/');
        const id = parseInt(urlParts[urlParts.length - 1], 10);
        const matchedProject = this.projects.filter(project => project.id === id);
        if (matchedProject.length) {
          return of(new HttpResponse({ status: 200, body: matchedProject[0] }));
        } else {
          return of(new HttpResponse({ status: 404, statusText: 'Project Not Found' }));
        }
        // } else {
        // return throwError({ error: { message: 'Unauthorised' } });
        // }
      }

      return next.handle(request);

    }))
      .pipe(materialize())
      .pipe(delay(2500))
      .pipe(dematerialize());
  }
}
