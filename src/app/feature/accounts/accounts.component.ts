import { Component, OnInit } from '@angular/core';
import { Account } from './interfaces/account';
@Component({
  selector: 'pms-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accountGridListCols: number;
  accountListGridTileColspan: number;
  constructor() { }
  ngOnInit() {
    this.setScreen();
  }
  onResize(event) {
    this.setScreen();
  }
  setScreen() {
    if ((window.innerWidth <= 1024)) {
      this.accountGridListCols = 1;
      this.accountListGridTileColspan = 1;
    } else {
      this.accountGridListCols = 4;
      this.accountListGridTileColspan = 3;
    }
  }

}
