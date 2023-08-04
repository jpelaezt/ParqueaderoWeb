import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comprobante } from '../domain/comprobante';
import { Cabecera } from '../domain/cabecera';
import { Cobro } from '../domain/cobro';


@Injectable({
    providedIn: 'root'
})
export class ComprobantesService {
    constructor (private http: HttpClient){}
    save(comprobante:Comprobante){
        return this.http.post<any>("http://localhost:8080/Parqueadero/rs/comprobante/crearComprobante/", comprobante)
    }
    save1(cobro:Cobro){
        return this.http.post<any>("http://localhost:8080/Parqueadero/rs/comprobante/cobrarComprobante/", cobro)
    }
    getAll(){
        return this.http.get<any>("http://localhost:8080/Parqueadero/rs/comprobante/listaComprobantes/")
    }
    getAllP(){
        return this.http.get<any>("http://localhost:8080/Parqueadero/rs/comprobante/listaComprobantesP/")
    }
    update(ccomprobante:Comprobante){
        return this.http.post<any>("http://localhost:8080/Proyecto1/rs/clientes/soloActualizarCliente/", ccomprobante)
    }    
}