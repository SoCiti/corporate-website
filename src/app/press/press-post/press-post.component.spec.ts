import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressPostComponent } from './press-post.component';

describe('PressPostComponent', () => {
  let component: PressPostComponent;
  let fixture: ComponentFixture<PressPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
