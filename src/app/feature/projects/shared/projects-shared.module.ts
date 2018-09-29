import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMockService } from './mock-services/project-mock.service';
import { ProjectsDataService } from './data-services/projects-data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const projectProviders = [];
projectProviders.push(ProjectsDataService);
if (!environment.production) {
  projectProviders.push({
    provide: HTTP_INTERCEPTORS,
    useClass: ProjectMockService,
    multi: true
  });
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: projectProviders
})
export class ProjectsSharedModule { }
