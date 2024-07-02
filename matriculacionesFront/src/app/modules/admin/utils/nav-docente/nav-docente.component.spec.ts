import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDocenteComponent } from './nav-docente.component';

describe('NavDocenteComponent', () => {
  let component: NavDocenteComponent;
  let fixture: ComponentFixture<NavDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDocenteComponent]
    });
    fixture = TestBed.createComponent(NavDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
