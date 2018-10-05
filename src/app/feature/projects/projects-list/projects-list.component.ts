import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/interfaces/project';
import { ProjectsDataService } from '../shared/data-services/projects-data.service';

@Component({
  selector: 'pms-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  projectListCols: number;
  constructor(private projectDataService: ProjectsDataService) { }

  ngOnInit() {
    this.projectListCols = (window.innerWidth <= 480) ? 1 : (window.innerWidth <= 1024) ? 2 : 4;
    this.getProjects();
  }

  private getProjects(): void {
    this.projectDataService.getAllProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  onResize(event) {
    this.projectListCols = (window.innerWidth <= 480) ? 1 : (window.innerWidth <= 1024) ? 2 : 4;
  }
}
