import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenTooglerComponent } from './full-screen-toogler.component';

describe('FullScreenTooglerComponent', () => {
  let component: FullScreenTooglerComponent;
  let fixture: ComponentFixture<FullScreenTooglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenTooglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenTooglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
