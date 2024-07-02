import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysStudentComponent } from './activitys-student.component';

describe('ActivitysStudentComponent', () => {
  let component: ActivitysStudentComponent;
  let fixture: ComponentFixture<ActivitysStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitysStudentComponent]
    });
    fixture = TestBed.createComponent(ActivitysStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
