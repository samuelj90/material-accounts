import { Component, OnInit, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppTitleService } from '../../core/services/app-title.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'pms-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [],
})
export class NavigationComponent implements OnInit {

  private title = '';
  private dark = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    private appTitleService: AppTitleService,
    private _element: ElementRef<HTMLElement>,
    private _overlayContainer: OverlayContainer) { }

  ngOnInit() {
    this.appTitleService.titleBehaviorSubject.subscribe((title) => {
      this.title = title;
    });
  }
  toggleFullscreen() {
    // Cast to `any`, because the typings don't include the browser-prefixed methods.
    const elem = this._element.nativeElement.querySelector('.app-container') as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._element.nativeElement.classList.add(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this._element.nativeElement.classList.remove(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
