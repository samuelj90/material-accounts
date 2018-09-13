import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppTitleService } from '../../core/services/app-title.service';

@Component({
  selector: 'pms-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [],
})
export class NavigationComponent implements OnInit {

  private title = '';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    private appTitleService: AppTitleService) { }

  ngOnInit() {
    this.appTitleService.titleBehaviorSubject.subscribe((title) => {
      this.title = title;
    });
  }
}
