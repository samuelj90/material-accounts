
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDashboardComponent } from './accounts-dashboard.component';

describe('AccountsDashboardComponent', () => {
  let component: AccountsDashboardComponent;
  let fixture: ComponentFixture<AccountsDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
