import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './data-services/authentication.service';
import { environment } from '../../../../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationMockService } from './mock-services/authentication-mock.service';
import { AuthTokenInterceptorService } from './interceptors/auth-token-interceptor.service';
import { ErrorInterceptorService } from './interceptors/error-interceptor.service';

const authProviders = [];
authProviders.push(AuthenticationService);
if (!environment.production) {
  authProviders.push({
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationMockService,
    multi: true
  });
}
authProviders.push({
  provide: HTTP_INTERCEPTORS,
  useClass: AuthTokenInterceptorService,
  multi: true
});
authProviders.push({
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptorService,
  multi: true
});

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: authProviders
})
export class AuthSharedModule { }
