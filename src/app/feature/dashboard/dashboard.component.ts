import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
export interface WidgetInfo {
  icon: string;
  title: string;
  styles: { [key: string]: string; };
  amount: number;
}

@Component({
  selector: 'pms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardWidgetBreakPoint: number;
  lastTransactionsBreakPoint: number;
  dashboardWidgetInfos: WidgetInfo[];
  latestIncomes;
  latestExpenses;
  displayedColumns;
  public barChartData = {
    'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'series': [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]]
  };
  public barChartTyp = 'Bar';

  @ViewChild('latestIncomesTable') latestIncomesSort: MatSort;
  @ViewChild('latestExpensesTable') latestExpensesSort: MatSort;

  ngOnInit() {
    this.dashboardWidgetBreakPoint = (window.innerWidth <= 480) ? 1 : (window.innerWidth <= 1024) ? 2 : 6;
    this.lastTransactionsBreakPoint = (window.innerWidth <= 1024) ? 1 : 2;
    this.dashboardWidgetInfos = [
      { icon: 'dashboard', title: 'Days Income', styles: { background: 'linear-gradient(60deg,#66bb6a,#43a047)' }, amount: 500 },
      { icon: 'dashboard', title: 'Days Expense', styles: { background: 'linear-gradient(60deg,#ec407a,#d81b60)' }, amount: 5500 },
      {
        icon: 'keyboard_arrow_down', title: 'Months Income',
        styles: { background: 'linear-gradient(60deg,#0ba360,#3cba92)' }, amount: 55500
      },
      {
        icon: 'keyboard_arrow_up', title: 'Months Expense',
        styles: { background: 'linear-gradient(60deg,#ff0844,#ffb199)' }, amount: 54500
      },
      { icon: 'dashboard', title: 'Years Income', styles: { background: 'linear-gradient(60deg,#00e3ae,#abecd6)' }, amount: 55500 },
      { icon: 'dashboard', title: 'Years Expense', styles: { background: 'linear-gradient(60deg,#f5576c,#f093fb)' }, amount: 54500 }
    ];
    this.displayedColumns = ['index', 'trDate', 'accountFrom', 'accountTo', 'amount'];

    this.latestIncomes = new MatTableDataSource([
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 10000 },
      { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Bank A/c', amount: 20000 },
      { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Bank A/c', amount: 350000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 20000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 5000000 },
      { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Project1 A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project2 A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 150000 },
      { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project1 A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Project1 A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project2 A/c', amount: 50000 }
    ]);
    this.latestExpenses = new MatTableDataSource([
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 20000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project1 A/c', amount: 30000 },
      { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Bank A/c', amount: 1000000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Project2 A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Bank A/c', amount: 55000 },
      { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Bank A/c', amount: 65000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Project2 A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project2 A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Bank A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project1 A/c', amount: 50000 },
      { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Bank A/c', amount: 50000 }
    ]);
    this.latestIncomes.sort = this.latestIncomesSort;
    this.latestExpenses.sort = this.latestExpensesSort;
  }

  onResize(event) {
    this.dashboardWidgetBreakPoint = (window.innerWidth <= 480) ? 1 : (window.innerWidth <= 1024) ? 2 : 4;
    this.lastTransactionsBreakPoint = (window.innerWidth <= 1024) ? 1 : 2;
  }
}
