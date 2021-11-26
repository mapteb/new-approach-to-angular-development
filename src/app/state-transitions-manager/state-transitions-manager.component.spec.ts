import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTransitionsManagerComponent } from './state-transitions-manager.component';

describe('StateTransitionsManagerComponent', () => {
  let component: StateTransitionsManagerComponent;
  let fixture: ComponentFixture<StateTransitionsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTransitionsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTransitionsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
