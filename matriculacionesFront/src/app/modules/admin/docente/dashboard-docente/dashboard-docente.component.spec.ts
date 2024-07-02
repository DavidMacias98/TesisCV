import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDocenteComponent } from './dashboard-docente.component';

describe('DashboardDocenteComponent', () => {
  let component: DashboardDocenteComponent;
  let fixture: ComponentFixture<DashboardDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDocenteComponent]
    });
    fixture = TestBed.createComponent(DashboardDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
