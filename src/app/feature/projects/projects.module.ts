import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsFormComponent } from './projects-form/projects-form.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectCardComponent,
    ProjectsListComponent,
    ProjectsFormComponent,
    ProjectsViewComponent
  ]
})
export class ProjectsModule { }
