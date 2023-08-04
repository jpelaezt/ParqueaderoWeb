import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Tarifa} from '../domain/tarifa';

@Injectable({
    providedIn: 'root'
})
export class TarifasService {
    constructor (private http: HttpClient){}
    save(tarifa:Tarifa){
        return this.http.post<any>("http://localhost:8080/Parqueadero/rs/tarifas/guardarTarifa/", tarifa)
    }
    getAll(){
        return this.http.get<any>("http://localhost:8080/Parqueadero/rs/tarifas/listaTarifas/")
    }
    save1(tarifa:Tarifa){
        return this.http.post<any>("hhttp://localhost:8080/Parqueadero/rs/tarifas/eliminarTarifa/", tarifa)
    }    
}