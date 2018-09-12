import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccountingPeriod } from '../interfaces/accounting-period';
@Component({
  selector: 'pms-accounting-period-list',
  templateUrl: './accounting-period-list.component.html',
  styleUrls: ['./accounting-period-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class AccountingPeriodListComponent implements OnInit {
  private accountingPeriodDataSource: AccountingPeriod[];
  private columnsToDisplay: string[];
  expandedElement: AccountingPeriod;
  constructor() { }

  ngOnInit() {
    this.columnsToDisplay = ['title', 'actions'];
    this.accountingPeriodDataSource = [
      {
        id: 1,
        title: 'FY 2016-2017',
        dateFrom: '01-04-2016',
        dateTo: '31-03-2017',
        createdAt: '10-10-2017',
        createdBy: '',
        lastModifiedAt: '',
        lastModifiedBy: '10-12-2017'
      },
      {
        id: 2,
        title: 'FY 2017-2018',
        dateFrom: '01-04-2017',
        dateTo: '31-03-2018',
        createdAt: '10-10-2017',
        createdBy: '',
        lastModifiedAt: '',
        lastModifiedBy: '10-12-2017'
      },
    ];
  }
  setExpandedElement(element) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
