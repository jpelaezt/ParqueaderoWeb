import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesService } from './comprobantes.service';

describe('ComprobantesService', () => {
  let component: ComprobantesService;
  let fixture: ComponentFixture<ComprobantesService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprobantesService]
    });
    fixture = TestBed.createComponent(ComprobantesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
