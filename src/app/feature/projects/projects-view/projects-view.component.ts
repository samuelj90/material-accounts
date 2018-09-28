import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'pms-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss']
})
export class ProjectsViewComponent implements OnInit {
  private project: Project;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProjectById(this.route.snapshot.paramMap.get('id'));
  }
  getProjectById(projectId) {
    this.project = {
      'id': projectId,
      'title': 'Geetha Teacher',
      'customer_id': '17',
      'description': 'house',
      'start_date': '2017-04-21',
      'end_date': '2017-09-21',
      'status_id': '1',
      'remarks': '',
      'created_date': '2017-04-27 10:24:32',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    };

  }
}
