import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { AppTitleService } from '../core/services/app-title.service';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'pms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AppTitleService]
})
export class HomeComponent implements OnInit {
  title: string;
  @ViewChild('matSideNav')
  matSideNav: MatSidenav;
  mobileQuery: MediaQueryList;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appTitleService: AppTitleService,
    private media: MediaMatcher) { }

  ngOnInit() {
    this.title = environment.appTitle;
    this.appTitleService.setTitle(this.title);
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.router
      .events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            } else {
              return null;
            }
          }
          return null;
        })).subscribe((title: any) => {
          this.title = title;
          this.appTitleService.setTitle(title);
        });
  }

  drawerToggleBtnClicked() {
    this.matSideNav.toggle();
  }

}
