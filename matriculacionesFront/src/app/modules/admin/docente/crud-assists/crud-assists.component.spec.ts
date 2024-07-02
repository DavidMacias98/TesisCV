import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAssistsComponent } from './crud-assists.component';

describe('CrudAssistsComponent', () => {
  let component: CrudAssistsComponent;
  let fixture: ComponentFixture<CrudAssistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudAssistsComponent]
    });
    fixture = TestBed.createComponent(CrudAssistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
