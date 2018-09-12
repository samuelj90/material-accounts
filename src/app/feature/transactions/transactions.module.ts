import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
const routes: Routes = [{
  path: '',
  component: TransactionsComponent,
  data: {
    title: 'TRANSACTIONS'
  }
}];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [TransactionsComponent, TransactionsListComponent]
})
export class TransactionsModule { }
