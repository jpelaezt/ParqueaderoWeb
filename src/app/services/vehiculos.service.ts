import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class VehiculosService {
    constructor (private http: HttpClient){}

    getAll(){
        return this.http.get<any>("http://localhost:8080/Parqueadero/rs/vehiculos/listaVehiculos/")
    }
  
}