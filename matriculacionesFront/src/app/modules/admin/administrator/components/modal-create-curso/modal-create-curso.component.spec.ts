import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateCursoComponent } from './modal-create-curso.component';

describe('ModalCreateCursoComponent', () => {
  let component: ModalCreateCursoComponent;
  let fixture: ComponentFixture<ModalCreateCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCreateCursoComponent]
    });
    fixture = TestBed.createComponent(ModalCreateCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
