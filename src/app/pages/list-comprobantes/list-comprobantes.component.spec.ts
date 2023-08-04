import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComprobantesComponent } from './list-comprobantes.component';

describe('ListComprobantesComponent', () => {
  let component: ListComprobantesComponent;
  let fixture: ComponentFixture<ListComprobantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComprobantesComponent]
    });
    fixture = TestBed.createComponent(ListComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
