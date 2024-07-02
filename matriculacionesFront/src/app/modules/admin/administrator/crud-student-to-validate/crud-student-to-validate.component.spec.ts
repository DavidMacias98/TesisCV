import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudStudentToValidateComponent } from './crud-student-to-validate.component';

describe('CrudStudentToValidateComponent', () => {
  let component: CrudStudentToValidateComponent;
  let fixture: ComponentFixture<CrudStudentToValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudStudentToValidateComponent]
    });
    fixture = TestBed.createComponent(CrudStudentToValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
