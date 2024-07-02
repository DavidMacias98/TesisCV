import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssistsComponent } from './modal-assists.component';

describe('ModalAssistsComponent', () => {
  let component: ModalAssistsComponent;
  let fixture: ComponentFixture<ModalAssistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAssistsComponent]
    });
    fixture = TestBed.createComponent(ModalAssistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
