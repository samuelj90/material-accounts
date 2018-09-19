import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountTypesListComponent } from './account-types-list/account-types-list.component';
import { AccountingPeriodListComponent } from './accounting-period-list/accounting-period-list.component';

const routes: Routes = [{
  path: '',
  component: AccountsComponent,
  data: {
    title: 'ACCOUNTS'
  }
}, {
  path: 'account-types',
  component: AccountTypesListComponent,
  data: {
    title: 'ACCOUNT TYPES'
  }
}, {
  path: 'accounting-periods',
  component: AccountingPeriodListComponent,
  data: {
    title: 'ACCOUNTING PERIODS'
  }
}, {
  path: 'create',
  component: AccountCreateComponent,
  data: {
    title: 'CREATE ACCOUNT'
  }
}];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [AccountsComponent, AccountCreateComponent, AccountListComponent, AccountTypesListComponent, AccountingPeriodListComponent]
})
export class AccountsModule { }
