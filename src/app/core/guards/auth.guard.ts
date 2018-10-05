import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/shared/data-services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authenticationService: AuthenticationService, public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const authenticated: boolean = this.authenticationService.authenticated();
    if (authenticated) {
      return authenticated;
    } else {
      this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url }});
      return !authenticated;
    }
  }
}
