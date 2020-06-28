import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoproposeComponent } from './sopropose.component';

describe('SoproposeComponent', () => {
  let component: SoproposeComponent;
  let fixture: ComponentFixture<SoproposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoproposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoproposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
