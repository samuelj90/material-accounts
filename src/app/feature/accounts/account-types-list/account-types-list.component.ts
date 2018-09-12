import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccountType } from '../interfaces/account-type';
@Component({
  selector: 'pms-account-types-list',
  templateUrl: './account-types-list.component.html',
  styleUrls: ['./account-types-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class AccountTypesListComponent implements OnInit {
  private accountTypesDataSource: AccountType[];
  private columnsToDisplay: string[];
  expandedElement: AccountType;

  constructor() { }

  ngOnInit() {
    this.columnsToDisplay = ['title', 'actions'];
    this.accountTypesDataSource = [
      {
        id: 1,
        title: 'Asset',
        description: 'Asset Accounts',
        createdAt: '2018-09-08T13:24:43Z',
        createdBy: '',
        lastModifiedAt: '2018-09-08T13:24:43Z',
        lastModifiedBy: ''
      },
      {
        id: 2,
        title: 'Liability',
        description: 'Liability Accounts',
        createdAt: '2018-09-08T13:24:43Z',
        createdBy: '',
        lastModifiedAt: '2018-09-08T13:24:43Z',
        lastModifiedBy: ''
      },
      {
        id: 3,
        title: 'Capital',
        description: 'Capital Accounts',
        createdAt: '2018-09-08T13:24:43Z',
        createdBy: '',
        lastModifiedAt: '2018-09-08T13:24:43Z',
        lastModifiedBy: ''
      },
      {
        id: 4,
        title: 'Withdrawal',
        description: 'Withdrawal Accounts',
        createdAt: '2018-09-08T13:24:43Z',
        createdBy: '',
        lastModifiedAt: '2018-09-08T13:24:43Z',
        lastModifiedBy: ''
      },
      {
        id: 5,
        title: 'Revenue',
        description: 'Revenue Accounts',
        createdAt: '2018-09-08T13:24:43Z',
        createdBy: '',
        lastModifiedAt: '2018-09-08T13:24:43Z',
        lastModifiedBy: ''
      },
      {
        id: 6,
        title: 'Expense',
        description: 'Expense Accounts',
        createdAt: '2018-09-08T13:24:43Z',
        createdBy: '',
        lastModifiedAt: '2018-09-08T13:24:43Z',
        lastModifiedBy: ''
      }
    ];
  }
  setExpandedElement(element) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

}
