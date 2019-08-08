import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictedLadderComponent } from './predicted-ladder.component';

describe('PredictedLadderComponent', () => {
  let component: PredictedLadderComponent;
  let fixture: ComponentFixture<PredictedLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictedLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictedLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
