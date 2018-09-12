import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'pms-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  transactionsDataSource: any;
  @ViewChild('transactions') transactionsSort: MatSort;
  constructor() { }

  ngOnInit() {
    this.transactionsDataSource = new MatTableDataSource([
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
    this.transactionsDataSource.sort = this.transactionsSort;
  }

}
