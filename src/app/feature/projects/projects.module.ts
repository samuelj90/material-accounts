import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes  = [{
  path: '',
  component: ProjectsComponent,
  data: {
    title: 'PROJECTS'
  }
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
