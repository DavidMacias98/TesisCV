import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCalificarComponent } from './modal-calificar.component';

describe('ModalCalificarComponent', () => {
  let component: ModalCalificarComponent;
  let fixture: ComponentFixture<ModalCalificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCalificarComponent]
    });
    fixture = TestBed.createComponent(ModalCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
