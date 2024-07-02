import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActivityComponent } from './detalle-activity.component';

describe('DetalleActivityComponent', () => {
  let component: DetalleActivityComponent;
  let fixture: ComponentFixture<DetalleActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleActivityComponent]
    });
    fixture = TestBed.createComponent(DetalleActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
