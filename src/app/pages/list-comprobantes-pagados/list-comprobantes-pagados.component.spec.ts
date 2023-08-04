import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComprobantesPagadosComponent } from './list-comprobantes-pagados.component';

describe('ListComprobantesPagadosComponent', () => {
  let component: ListComprobantesPagadosComponent;
  let fixture: ComponentFixture<ListComprobantesPagadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComprobantesPagadosComponent]
    });
    fixture = TestBed.createComponent(ListComprobantesPagadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
