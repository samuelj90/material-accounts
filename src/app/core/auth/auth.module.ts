import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthSharedModule } from './shared/auth-shared.module';
@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    AuthSharedModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
