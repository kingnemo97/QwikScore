import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLadderComponent } from './current-ladder.component';

describe('CurrentLadderComponent', () => {
  let component: CurrentLadderComponent;
  let fixture: ComponentFixture<CurrentLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
