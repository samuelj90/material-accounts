import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { DashboardWidgetComponent } from './dashboard-widgets/dashboard-widget/dashboard-widget.component';
import { LatestTransactionsComponent } from './latest-transactions/latest-transactions.component';
import { IncomeExpenseChartComponent } from './income-expense-chart/income-expense-chart.component';
const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  data: {
    title: 'DASHBOARD'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    DashboardComponent,
    DashboardWidgetsComponent,
    DashboardWidgetComponent,
    LatestTransactionsComponent,
    IncomeExpenseChartComponent
  ]
})
export class DashboardModule { }
