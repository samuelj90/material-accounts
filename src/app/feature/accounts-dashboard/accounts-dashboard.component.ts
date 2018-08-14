import { Component } from '@angular/core';

@Component({
  selector: 'accounts-dashboard',
  templateUrl: './accounts-dashboard.component.html',
  styleUrls: ['./accounts-dashboard.component.css']
})
export class AccountsDashboardComponent {
  cards = [
    { title: 'INCOME VS EXPENSE', cols: 2, rows: 2 },
    { title: 'LAST 5 INCOME', cols: 1, rows: 2 },
    { title: 'LAST 10 TRANSACTIONS', cols: 1, rows: 4 },
    { title: 'LAST 5 EXPENSE', cols: 1, rows: 2 }
  ];
}
