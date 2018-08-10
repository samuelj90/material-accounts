
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsNavComponent } from './accounts-nav.component';

describe('AccountsNavComponent', () => {
  let component: AccountsNavComponent;
  let fixture: ComponentFixture<AccountsNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
