import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/interfaces/project';
import { ProjectsDataService } from '../shared/data-services/projects-data.service';

@Component({
  selector: 'pms-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss']
})
export class ProjectsViewComponent implements OnInit {
  project: Project;
  constructor(private route: ActivatedRoute, private projectDataService: ProjectsDataService) { }

  ngOnInit() {
    this.getProjectById(this.route.snapshot.paramMap.get('id'));
  }
  getProjectById(projectId) {
    this.projectDataService.getProjectById(projectId).toPromise()
      .then(
        (project) => { this.project = project; console.log(project); },
        (error) => { console.log(error); }
      );
  }
}
