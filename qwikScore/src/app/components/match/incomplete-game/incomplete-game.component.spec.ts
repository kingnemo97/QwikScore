import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteGameComponent } from './incomplete-game.component';

describe('IncompleteGameComponent', () => {
  let component: IncompleteGameComponent;
  let fixture: ComponentFixture<IncompleteGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncompleteGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompleteGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
