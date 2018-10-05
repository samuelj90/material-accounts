import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccountingPeriod } from '../shared/interfaces/accounting-period';
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
  expandedElement: AccountingPeriod;
  accountingPeriodDataSource: AccountingPeriod[];
  columnsToDisplay: string[];
  constructor() { }

  ngOnInit() {
    this.columnsToDisplay = ['title', 'actions'];
  }
  setExpandedElement(element) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
