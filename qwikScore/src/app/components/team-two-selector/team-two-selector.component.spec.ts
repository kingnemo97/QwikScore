import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTwoSelectorComponent } from './team-two-selector.component';

describe('TeamTwoSelectorComponent', () => {
  let component: TeamTwoSelectorComponent;
  let fixture: ComponentFixture<TeamTwoSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTwoSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTwoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
