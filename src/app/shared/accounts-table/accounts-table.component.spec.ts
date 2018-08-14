
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsTableComponent } from './accounts-table.component';

describe('AccountsTableComponent', () => {
  let component: AccountsTableComponent;
  let fixture: ComponentFixture<AccountsTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
