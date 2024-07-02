import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavParametersComponent } from './nav-parameters.component';

describe('NavParametersComponent', () => {
  let component: NavParametersComponent;
  let fixture: ComponentFixture<NavParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavParametersComponent]
    });
    fixture = TestBed.createComponent(NavParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
