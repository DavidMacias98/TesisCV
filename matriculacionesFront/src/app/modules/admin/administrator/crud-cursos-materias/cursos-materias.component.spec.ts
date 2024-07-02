import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosMateriasComponent } from './cursos-materias.component';

describe('CursosMateriasComponent', () => {
  let component: CursosMateriasComponent;
  let fixture: ComponentFixture<CursosMateriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosMateriasComponent]
    });
    fixture = TestBed.createComponent(CursosMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
