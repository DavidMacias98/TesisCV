import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestWebUserComponent } from './guest-web-user.component';

describe('GuestWebUserComponent', () => {
  let component: GuestWebUserComponent;
  let fixture: ComponentFixture<GuestWebUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestWebUserComponent]
    });
    fixture = TestBed.createComponent(GuestWebUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
