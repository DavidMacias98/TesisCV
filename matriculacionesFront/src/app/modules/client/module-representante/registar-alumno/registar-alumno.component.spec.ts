import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarAlumnoComponent } from './registar-alumno.component';

describe('RegistarAlumnoComponent', () => {
  let component: RegistarAlumnoComponent;
  let fixture: ComponentFixture<RegistarAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarAlumnoComponent]
    });
    fixture = TestBed.createComponent(RegistarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
