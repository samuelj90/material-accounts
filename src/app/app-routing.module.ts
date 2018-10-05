import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './core/auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: HomeComponent,
    loadChildren: './feature/feature.module#FeatureModule',
    canActivate: [AuthGuard]
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
