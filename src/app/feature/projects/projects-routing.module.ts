import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsFormComponent } from './projects-form/projects-form.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListComponent,
    data: {
      title: 'PROJECTS'
    }
  },
  {
    path: 'create',
    component: ProjectsFormComponent,
    data: {
      title: 'PROJECTS/CREATE'
    }
  },
  {
    path: 'edit/:id',
    component: ProjectsFormComponent,
    data: {
      title: 'PROJECTS/EDIT'
    }
  },
  {
    path: 'view/:id',
    component: ProjectsViewComponent,
    data: {
      title: 'PROJECTS/VIEW'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
