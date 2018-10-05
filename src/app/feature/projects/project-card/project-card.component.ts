import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/interfaces/project';

@Component({
  selector: 'pms-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input()
  project: Project;
  constructor() { }

  ngOnInit() {
    this.project.avatar = this.getAvatorURL(this.project);
  }
  getAvatorURL(project: Project): string {
    const color = this.getRandomColor();
    return 'https://via.placeholder.com/40/' + color + '/FFF/?text=' + project.title.charAt(0).toUpperCase();
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
