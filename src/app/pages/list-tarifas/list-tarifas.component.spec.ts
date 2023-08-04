import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTarifasComponent } from './list-tarifas.component';

describe('ListTarifasComponent', () => {
  let component: ListTarifasComponent;
  let fixture: ComponentFixture<ListTarifasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTarifasComponent]
    });
    fixture = TestBed.createComponent(ListTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
