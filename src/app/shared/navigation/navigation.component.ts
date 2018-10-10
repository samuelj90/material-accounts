import { ChangeDetectorRef, Component, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { AppTitleService } from '../../core/services/app-title.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pms-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  title = '';
  showAccountsSubMenu: boolean;
  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher,private breakpointObserver: BreakpointObserver,
    private appTitleService: AppTitleService,
    ) {

  }

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.appTitleService.titleBehaviorSubject.subscribe((title) => {
      this.title = title;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
