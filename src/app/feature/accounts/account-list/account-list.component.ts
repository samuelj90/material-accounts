import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'pms-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class AccountListComponent implements OnInit {
  accountsDataSource: Account[];
  columnsToDisplay: string[];
  expandedElement: Account;

  constructor() { }

  ngOnInit() {
    this.columnsToDisplay = ['detail-view-actions', 'title', 'accountType', 'balance', 'previousCarriedDown', 'parentAccount'];
    this.accountsDataSource = [
      {
        id: 1,
        title: 'Current Assets',
        accountType: 'Assets',
        balance: 300.00,
        previousCarriedDown: 5000.00,
        parentAccount: null,
        weight: 3,
        createdAt: '2018-09-08T13:24:43Z',
        createdBy: '',
        lastModifiedAt: '',
        lastModifiedBy: '2018-09-08T13:24:43Z'
      },
      {
        id: 2,
        title: 'Bank A/c',
        accountType: 'Assets',
        balance: 300.00,
        previousCarriedDown: 5000.00,
        parentAccount: {
          id: 1,
          title: 'Current Assets'
        },
        weight: 3,
        createdAt: '2018-09-08T13:24:43Z',
        createdBy: '',
        lastModifiedAt: '',
        lastModifiedBy: '2018-09-08T13:24:43Z'
      },
    ];
  }
  setExpandedElement(element) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

}
