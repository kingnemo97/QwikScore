import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteGameComponent } from './complete-game.component';

describe('CompleteGameComponent', () => {
  let component: CompleteGameComponent;
  let fixture: ComponentFixture<CompleteGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
