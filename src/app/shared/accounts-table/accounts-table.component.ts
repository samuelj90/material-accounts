import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AccountsTableDataSource } from './accounts-table-datasource';

@Component({
  selector: 'accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})
export class AccountsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AccountsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AccountsTableDataSource(this.paginator, this.sort);
  }
}
