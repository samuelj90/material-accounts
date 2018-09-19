import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTitleService } from './services/app-title.service';
import { AuthGuard } from './guards/auth.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: AppTitleService },
        {
          provide: AuthGuard,
          useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
        }
      ]
    };
  }
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
