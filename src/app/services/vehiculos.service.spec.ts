import { TestBed } from '@angular/core/testing';
import { TarifasService } from './tarifas.service';

describe('VehiculosService', () => {
    let service: TarifasService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TarifasService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
})