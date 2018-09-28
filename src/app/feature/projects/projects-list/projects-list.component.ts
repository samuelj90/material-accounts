import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'pms-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  projectListCols: number;
  constructor() { }

  ngOnInit() {
    this.projectListCols = (window.innerWidth <= 480) ? 1 : (window.innerWidth <= 1024) ? 2 : 4;
    this.getProjects();
  }

  private getProjects(): void {
    this.projects = [{
      'id': 11,
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
    },
    {
      'id': 12,
      'title': 'Bhanudevan CKR',
      'customer_id': '18',
      'description': 'HOUSE',
      'start_date': '2017-04-30',
      'end_date': '2017-10-31',
      'status_id': '1',
      'remarks': '',
      'created_date': '2017-05-26 14:50:48',
      'created_by': '0',
      'last_modified_date': '2017-05-26 06:53:04',
      'last_modified_by': '1'
    },
    {
      'id': 13,
      'title': 'Pankajakshan pilla',
      'customer_id': '19',
      'description': 'villa',
      'start_date': '2017-05-09',
      'end_date': '2017-12-09',
      'status_id': '1',
      'remarks': '',
      'created_date': '2017-05-30 14:31:02',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 17,
      'title': 'joji vazhapara',
      'customer_id': '24',
      'description': 'house',
      'start_date': '2017-07-24',
      'end_date': '2017-10-29',
      'status_id': '1',
      'remarks': '',
      'created_date': '2017-07-28 15:19:37',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 19,
      'title': 'Habeeb Sir',
      'customer_id': '26',
      'description': 'house',
      'start_date': '2017-09-11',
      'end_date': '2018-02-01',
      'status_id': '1',
      'remarks': '',
      'created_date': '2017-09-19 13:58:50',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 20,
      'title': 'binny ptpm',
      'customer_id': '27',
      'description': 'house',
      'start_date': '2017-10-26',
      'end_date': '2018-01-01',
      'status_id': '1',
      'remarks': '',
      'created_date': '2017-11-14 11:11:30',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 21,
      'title': 'Riju ptpm',
      'customer_id': '28',
      'description': 'shopping complex',
      'start_date': '2017-11-01',
      'end_date': '2018-01-01',
      'status_id': '1',
      'remarks': '',
      'created_date': '2017-11-17 13:51:19',
      'created_by': '0',
      'last_modified_date': '2017-11-25 05:36:56',
      'last_modified_by': '1'
    },
    {
      'id': 22,
      'title': 'RAJESH Rajendran',
      'customer_id': '29',
      'description': 'house',
      'start_date': '2017-12-01',
      'end_date': '2018-05-31',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-01-02 13:47:42',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 23,
      'title': 'koodal suresh',
      'customer_id': '30',
      'description': 'house',
      'start_date': '2017-12-07',
      'end_date': '2018-07-07',
      'status_id': '3',
      'remarks': '',
      'created_date': '2018-01-05 13:50:56',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 24,
      'title': 'Pathrikkal New benoy',
      'customer_id': '31',
      'description': 'house',
      'start_date': '2017-12-21',
      'end_date': '2018-04-01',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-02-16 10:04:04',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 25,
      'title': '1',
      'customer_id': '32',
      'description': 'house',
      'start_date': '2018-01-01',
      'end_date': '2018-05-01',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-03-10 15:07:47',
      'created_by': '0',
      'last_modified_date': '2018-04-01 01:39:05',
      'last_modified_by': '1'
    },
    {
      'id': 26,
      'title': 'Swami nadhan',
      'customer_id': '34',
      'description': 'Kada',
      'start_date': '2018-02-19',
      'end_date': '2018-04-30',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-04-12 06:46:21',
      'created_by': '0',
      'last_modified_date': '2018-04-13 05:34:22',
      'last_modified_by': '1'
    },
    {
      'id': 27,
      'title': 'Rajan New',
      'customer_id': '33',
      'description': 'house',
      'start_date': '2018-04-13',
      'end_date': '2018-04-13',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-04-13 05:33:10',
      'created_by': '0',
      'last_modified_date': '2018-04-13 05:49:57',
      'last_modified_by': '1'
    },
    {
      'id': 28,
      'title': 'School Ptpm new',
      'customer_id': '36',
      'description': 'bulding',
      'start_date': '2018-05-14',
      'end_date': '2018-06-30',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-05-16 08:39:21',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 29,
      'title': 'Shaji',
      'customer_id': '0',
      'description': 'house',
      'start_date': '2018-04-12',
      'end_date': '2018-06-30',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-05-21 06:18:56',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 30,
      'title': 'Doctor pallimukku',
      'customer_id': '37',
      'description': 'House',
      'start_date': '2018-06-26',
      'end_date': '2018-09-30',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-06-28 05:34:55',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 31,
      'title': 'Sindhu Shaji',
      'customer_id': '38',
      'description': 'House',
      'start_date': '2018-07-24',
      'end_date': '2018-09-24',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-07-25 06:17:49',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    },
    {
      'id': 32,
      'title': 'Krishnan',
      'customer_id': '39',
      'description': 'house',
      'start_date': '2018-09-12',
      'end_date': '2018-10-30',
      'status_id': '1',
      'remarks': '',
      'created_date': '2018-09-13 11:20:41',
      'created_by': '0',
      'last_modified_date': null,
      'last_modified_by': '0'
    }];
  }

  onResize(event) {
    this.projectListCols = (window.innerWidth <= 480) ? 1 : (window.innerWidth <= 1024) ? 2 : 4;
  }
}