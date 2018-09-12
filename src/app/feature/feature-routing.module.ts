import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  loadChildren: './dashboard/dashboard.module#DashboardModule'
}, {
  path: 'projects',
  loadChildren: './projects/projects.module#ProjectsModule'
}, {
  path: 'transactions',
  loadChildren: './transactions/transactions.module#TransactionsModule'
}, {
  path: 'accounts',
  loadChildren: './accounts/accounts.module#AccountsModule'
}, {
  path: 'users',
  loadChildren: './users/users.module#UsersModule'
},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
