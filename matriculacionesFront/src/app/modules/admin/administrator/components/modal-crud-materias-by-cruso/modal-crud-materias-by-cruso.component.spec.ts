import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrudMateriasByCrusoComponent } from './modal-crud-materias-by-cruso.component';

describe('ModalCrudMateriasByCrusoComponent', () => {
  let component: ModalCrudMateriasByCrusoComponent;
  let fixture: ComponentFixture<ModalCrudMateriasByCrusoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCrudMateriasByCrusoComponent]
    });
    fixture = TestBed.createComponent(ModalCrudMateriasByCrusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
