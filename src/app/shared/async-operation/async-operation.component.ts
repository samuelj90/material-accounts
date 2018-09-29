import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-async-operation',
  templateUrl: './async-operation.component.html',
  styleUrls: ['./async-operation.component.scss']
})
export class AsyncOperationComponent implements OnInit {

  @Input()
  promise: Promise<any>;
  constructor() { }

  ngOnInit() {
  }

}
