import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncOperationComponent } from './async-operation.component';

describe('AsyncOperationComponent', () => {
  let component: AsyncOperationComponent;
  let fixture: ComponentFixture<AsyncOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
