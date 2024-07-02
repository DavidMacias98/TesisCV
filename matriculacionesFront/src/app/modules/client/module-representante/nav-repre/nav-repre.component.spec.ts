import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRepreComponent } from './nav-repre.component';

describe('NavRepreComponent', () => {
  let component: NavRepreComponent;
  let fixture: ComponentFixture<NavRepreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavRepreComponent]
    });
    fixture = TestBed.createComponent(NavRepreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
