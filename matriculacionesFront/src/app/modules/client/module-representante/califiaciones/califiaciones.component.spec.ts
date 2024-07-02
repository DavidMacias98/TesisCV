import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalifiacionesComponent } from './califiaciones.component';

describe('CalifiacionesComponent', () => {
  let component: CalifiacionesComponent;
  let fixture: ComponentFixture<CalifiacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalifiacionesComponent]
    });
    fixture = TestBed.createComponent(CalifiacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
