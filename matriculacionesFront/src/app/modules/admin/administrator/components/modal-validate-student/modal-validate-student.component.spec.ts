import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalValidateStudentComponent } from './modal-validate-student.component';

describe('ModalValidateStudentComponent', () => {
  let component: ModalValidateStudentComponent;
  let fixture: ComponentFixture<ModalValidateStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalValidateStudentComponent]
    });
    fixture = TestBed.createComponent(ModalValidateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
