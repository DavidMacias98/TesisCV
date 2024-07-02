import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviStudentComponent } from './navi-student.component';

describe('NaviStudentComponent', () => {
  let component: NaviStudentComponent;
  let fixture: ComponentFixture<NaviStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaviStudentComponent]
    });
    fixture = TestBed.createComponent(NaviStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
