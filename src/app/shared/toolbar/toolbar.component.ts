import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'pms-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  mobileQuery: MediaQueryList;

  @Input()
  title: string;

  @Output()
  drawerToggleBtnClicked = new EventEmitter();

  constructor(private media: MediaMatcher) { }

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
  }

  onDrawerToggleBtnClicked(): void {
    this.drawerToggleBtnClicked.emit();
  }
}
