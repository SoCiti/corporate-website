import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdwatchComponent } from './thirdwatch.component';

describe('ThirdwatchComponent', () => {
  let component: ThirdwatchComponent;
  let fixture: ComponentFixture<ThirdwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
