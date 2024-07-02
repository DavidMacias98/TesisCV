import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalColabsComponent } from './modal-colabs.component';

describe('ModalColabsComponent', () => {
  let component: ModalColabsComponent;
  let fixture: ComponentFixture<ModalColabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalColabsComponent]
    });
    fixture = TestBed.createComponent(ModalColabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
