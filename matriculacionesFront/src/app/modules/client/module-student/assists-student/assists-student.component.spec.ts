import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistsStudentComponent } from './assists-student.component';

describe('AssistsStudentComponent', () => {
  let component: AssistsStudentComponent;
  let fixture: ComponentFixture<AssistsStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistsStudentComponent]
    });
    fixture = TestBed.createComponent(AssistsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
