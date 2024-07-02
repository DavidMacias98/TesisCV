import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPagosComponent } from './nav-pagos.component';

describe('NavPagosComponent', () => {
  let component: NavPagosComponent;
  let fixture: ComponentFixture<NavPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPagosComponent]
    });
    fixture = TestBed.createComponent(NavPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
