import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegiscriptComponent } from './legiscript.component';

describe('LegiscriptComponent', () => {
  let component: LegiscriptComponent;
  let fixture: ComponentFixture<LegiscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegiscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegiscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
