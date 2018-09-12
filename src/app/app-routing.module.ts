import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'LOGIN'
    }
  },
  {
    path: '',
    component: HomeComponent,
    loadChildren: './feature/feature.module#FeatureModule'
  },
  {
    path: '**', component: PageNotFoundComponent,
    data: {
      title: 'NOT FOUND'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
