import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  private readonly API_URL = '/projects/';
  dataChange: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.API_URL);
  }
  getProjectById(projectId): Observable<Project> {
    return this.httpClient.get<Project>(this.API_URL + projectId);
  }
  createProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.API_URL + project.id, project);
  }
  updateProject(project: Project): Observable<Project> {
    return this.httpClient.put<Project>(this.API_URL + project.id, project);
  }
  deleteProject(project: Project): Observable<Project> {
    return this.httpClient.delete<Project>(this.API_URL + project.id);
  }
}
