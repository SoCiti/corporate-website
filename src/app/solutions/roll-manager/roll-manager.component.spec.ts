import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollManagerComponent } from './roll-manager.component';

describe('RollManagerComponent', () => {
  let component: RollManagerComponent;
  let fixture: ComponentFixture<RollManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
