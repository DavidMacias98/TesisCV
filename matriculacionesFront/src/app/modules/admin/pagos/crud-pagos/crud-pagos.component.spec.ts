import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPagosComponent } from './crud-pagos.component';

describe('CrudPagosComponent', () => {
  let component: CrudPagosComponent;
  let fixture: ComponentFixture<CrudPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudPagosComponent]
    });
    fixture = TestBed.createComponent(CrudPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
