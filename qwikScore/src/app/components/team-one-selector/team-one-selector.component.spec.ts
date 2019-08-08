import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOneSelectorComponent } from './team-one-selector.component';

describe('TeamOneSelectorComponent', () => {
  let component: TeamOneSelectorComponent;
  let fixture: ComponentFixture<TeamOneSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamOneSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOneSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
