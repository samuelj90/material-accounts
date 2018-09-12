import { Component } from '@angular/core';
import { AppTitleService } from './core/app-title.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from '../environments/environment.prod';
@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppTitleService],
})
export class AppComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appTitleService: AppTitleService
  ) { }

  ngOnInit() {
    this.appTitleService.setTitle(environment.appTitle);
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
          this.appTitleService.setTitle(title);
        });
  }
}
