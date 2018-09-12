import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypesListComponent } from './account-types-list.component';

describe('AccountTypesListComponent', () => {
  let component: AccountTypesListComponent;
  let fixture: ComponentFixture<AccountTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
