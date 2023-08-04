import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';
import {Tarifa} from '../domain/tarifa';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    constructor (private http: HttpClient){}
    save(cliente:Cliente){
        return this.http.post<any>("http://localhost:8080/Proyecto1/rs/clientes/", cliente)
    }
    getAll(){
        return this.http.get<any>("http://localhost:8080/Parqueadero/rs/clientes/listaClientes/")
    }
    delete(cedula: string){
        return this.http.get<any>("http://localhost:8080/Proyecto1/rs/clientes/eliminarCliente/"+cedula)
    }
    find(cedula: string){
        return this.http.get<any>("http://localhost:8080/Proyecto1/rs/clientes/validarExistenciaCliente/"+cedula)
    }
    update(cliente:Cliente){
        return this.http.post<any>("http://localhost:8080/Proyecto1/rs/clientes/soloActualizarCliente/", cliente)
    }    
}